import type { PrismaClient } from '@repo/database';

const DAY_WINDOW = 14;

const startOfDay = (date = new Date()) =>
  new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));

const addDays = (date: Date, days: number) => {
  const next = new Date(date);

  next.setUTCDate(next.getUTCDate() + days);
  return next;
};

const dayLabel = (date: Date) =>
  date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', timeZone: 'UTC' });

export const statisticsService = {
  trackVisit: async (db: PrismaClient, visitorKey: string) => {
    const date = startOfDay();

    const visitor = await db.siteVisitor.upsert({
      where: { visitorKey },
      create: { visitorKey },
      update: { lastSeenAt: new Date() },
    });

    await db.$transaction(async (tx) => {
      await tx.siteDailyStat.upsert({
        where: { date },
        create: { date, visits: 1 },
        update: { visits: { increment: 1 } },
      });

      const { count } = await tx.siteDailyVisitor.createMany({
        data: [{ date, visitorId: visitor.id }],
        skipDuplicates: true,
      });

      if (count > 0)
        await tx.siteDailyStat.update({
          where: { date },
          data: { uniqueVisitors: { increment: 1 } },
        });
    });

    return { visitorKey };
  },

  getOverview: async (db: PrismaClient) => {
    const firstDay = addDays(startOfDay(), -(DAY_WINDOW - 1));

    const [totals, totalUniqueVisitors, stats, totalContacts] = await Promise.all([
      db.siteDailyStat.aggregate({ _sum: { visits: true } }),
      db.siteVisitor.count(),
      db.siteDailyStat.findMany({ where: { date: { gte: firstDay } }, orderBy: { date: 'asc' } }),
      db.contact.count(),
    ]);

    const byDay = new Map(stats.map((stat) => [stat.date.getTime(), stat]));

    const series = Array.from({ length: DAY_WINDOW }, (_, i) => {
      const date = addDays(firstDay, i);
      const stat = byDay.get(date.getTime());

      return {
        label: dayLabel(date),
        visits: stat?.visits ?? 0,
        uniqueVisitors: stat?.uniqueVisitors ?? 0,
      };
    });

    // mean of daily unique visitors over the window, rounded to one decimal
    const avgVisitorsPerDay =
      Math.round((series.reduce((sum, day) => sum + day.uniqueVisitors, 0) / DAY_WINDOW) * 10) / 10;

    return {
      counters: {
        totalVisits: totals._sum.visits ?? 0,
        totalUniqueVisitors,
        avgVisitorsPerDay,
        totalContacts,
      },
      series,
    };
  },
};

export default statisticsService;
