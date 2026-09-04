import { PrismaClient } from '@repo/database';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import { seedMedia } from './seed-media';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: ['error', 'warn'],
});

async function main() {
  console.log('Start seeding...');
  
  await prisma.painting.deleteMany();
  await prisma.paintingCategory.deleteMany();
  console.log('Cleared existing paintings.');

  const categories = [
    {
      slug: 'gorilles',
      displayName: 'Gorilles',
      description: "Gorilles paints dans un style pop-art que j'adore. Chacun a sa propre histoire, découvrez-les.",
      type: 'Acrylique sur toile, résine',
      dateStart: new Date('2024'),
      dateEnd: null,
      width: 100, widthMax: null,
      height: 120, heightMax: null,
      tableaux: [
        { title: "Street Art", image: await seedMedia('Gorille-Street-Art.png'), width: 100, widthMax: null, height: 120, heightMax: null, date: new Date('2023-10-01'), type: null, description: "Tokyo alternatif où le chef des yakuzas japonais est un gorille." },
        { title: "Al Pacino", image: await seedMedia('Al-Pacino.png'),          width: 100, widthMax: null, height: 120, heightMax: null, date: new Date('2023-10-01'), type: null, description: "Le légendaire acteur de Scarface, Le Parrain et L'Avocat du Diable était en fait, un gorille, depuis tout ce temps." },
        { title: "DJ", image: await seedMedia('DJ.png'),                 width: 100, widthMax: null, height: 120, heightMax: null, date: new Date('2023-10-01'), type: null, description: "Votre Dj préféré dans son élément." },
        { title: "Marylin", image: await seedMedia('Marylin.png'),            width: 120, widthMax: null, height: 120, heightMax: null, date: new Date('2023-10-01'), type: null, description: "La Marylin d'Andy Wharol revisitée." },
        { title: "Tropical", image: await seedMedia('Tropical.png'),           width: 100, widthMax: null, height: 120, heightMax: null, date: new Date('2023-10-01'), type: null, description: "Un gorille tanquille, sage et détendu dans la chaleur et les tropiques." },
      ],
    },
    {
      slug: 'popart',
      displayName: 'Pop Art',
      description: 'Mes plus beaux tableaux dans le style pop art.',
      type: null,
      dateStart: new Date('2018'),
      dateEnd: new Date('2025'),
      width: 40, widthMax: null,
      height: 120, heightMax: null,
      tableaux: [
        { title: "Saturday Night Fever", image: await seedMedia('Saturday-Night-Fever.png'), width: 70, widthMax: null, height: 70,  heightMax: null, date: new Date('2023-10-01'), type: 'Acrylique sur toile', description: '' },
        { title: "Infrequentables", image: await seedMedia('Infrequentables.png'),      width: 40, widthMax: null, height: 40,  heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Jeans Fétiches", image: await seedMedia('Jeans-fetiches.png'),       width: 40, widthMax: null, height: 40,  heightMax: null, date: new Date('2023-10-01'), type: null, description: 'Le jean favori de mon mari découpé dans la résine.' },
        { title: "Bouches", image: await seedMedia('Bouches.png'),              width: 40, widthMax: null, height: 40,  heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Liberté", image: await seedMedia('Liberte.png'),              width: 40, widthMax: null, height: 40,  heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Le Cuivre", image: await seedMedia('Le-Cuivre.png'),            width: 30, widthMax: null, height: 30,  heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Le Pop Art", image: await seedMedia('Le-Pop-Art.png'),           width: 40, widthMax: null, height: 40,  heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Le Rouge", image: await seedMedia('Le-Rouge.png'),             width: 30, widthMax: null, height: 30,  heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Le Suave", image: await seedMedia('Le-Suave.png'),             width: 20, widthMax: null, height: 20,  heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Le Bleu", image: await seedMedia('Le-Bleu.png'),              width: 40, widthMax: null, height: 40,  heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
      ],
    },
    {
      slug: 'abstraits',
      displayName: 'Abstraits',
      description: "Peut-être mon style phare, l'abstrait a été ma source d'inspiration pendant de nombreuses années.",
      type: 'Acrylique sur toile, résine',
      dateStart: new Date('2009'),
      dateEnd: new Date('2025'),
      width: 70, widthMax: 120,
      height: 80, heightMax: 110,
      tableaux: [
        {  title: "Temple", image: await seedMedia('Temple.png'),           width: 120, widthMax: null, height: 100, heightMax: null, date: new Date('2023-10-01'), type: 'Acrylique sur toile', description: '' },
        { title: "Green", image: await seedMedia('Green.png'),            width: 100, widthMax: null, height: 100, heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Pavements", image: await seedMedia('Pavements.png'),        width: 80,  widthMax: null, height: 160, heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Harmonie", image: await seedMedia('Harmonie.png'),         width: 70,  widthMax: null, height: 70,  heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Sommets-enneiges", image: await seedMedia('Sommets-enneiges.png'), width: 100, widthMax: null, height: 100, heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "La-corde-a-linge", image: await seedMedia('La-corde-a-linge.png'), width: 100, widthMax: null, height: 100, heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Escaliers", image: await seedMedia('Escaliers.png'),        width: 100, widthMax: null, height: 80,  heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "MAG", image: await seedMedia('MAG.png'),              width: 100, widthMax: null, height: 80,  heightMax: null, date: new Date('2023-10-01'), type: null, description: 'un jeu de lumière abstrait.' },
        { title: "Manu", image: await seedMedia('Manu.png'),             width: 100, widthMax: null, height: 80,  heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Couche-de-soleil", image: await seedMedia('Couche-de-soleil.png'), width: 120, widthMax: null, height: 120, heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
      ],
    },
    {
      slug: 'realistes',
      displayName: 'Réalistes',
      description: "Mes plus belles reconstitutions de nature, visages ou autres dans un style réaliste, honnête et connecté.",
      type: 'Acrylique sur toile, résine',
      dateStart: new Date('2013'),
      dateEnd: new Date('2024'),
      width: 70, widthMax: null,
      height: 120, heightMax: null,
      tableaux: [
        { title: "Cerisiers", image: await seedMedia('Cerisiers.png'),      width: 120, widthMax: null, height: 120, heightMax: null, date: new Date('2023-10-01'), type: null,                  description: '' },
        { title: "La-place-rouge", image: await seedMedia('La-place-rouge.png'), width: 80,  widthMax: null, height: 80,  heightMax: null, date: new Date('2023-10-01'), type: 'Acrylique sur toile', description: '' },
        { title: "Mes-angelos", image: await seedMedia('Mes-angelos.png'),    width: 80,  widthMax: null, height: 100, heightMax: null, date: new Date('2023-10-01'), type: null,                  description: 'Mes 2 enfants, une décennie auparavant.' },
        { title: "La-plage", image: await seedMedia('La-plage.png'),       width: 70,  widthMax: null, height: 100, heightMax: null, date: new Date('2023-10-01'), type: null,                  description: '' },
        { title: "Ganesh", image: await seedMedia('Ganesh.png'),         width: 100, widthMax: null, height: 70,  heightMax: null, date: new Date('2023-10-01'), type: null,                  description: '' },
      ],
    },
    {
      slug: 'detournements',
      displayName: 'Détournements',
      description: "De petits tableaux d'époque que j'ai détournés à ma façon.",
      type: 'Acrylique sur toile, résine',
      dateStart: new Date('2024-01-01'),
      dateEnd: new Date('2025-01-01'),
      width: 30, widthMax: 50,
      height: 40, heightMax: 60,
      tableaux: [
        { title: "Renard", image: await seedMedia('Renard.png'),      width: 80,  widthMax: null, height: 80,  heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Balancoire", image: await seedMedia('Balancoire.png'),  width: 80,  widthMax: null, height: 100, heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Coulé n.1", image: await seedMedia('Coulé n.1.png'),   width: 100, widthMax: null, height: 70,  heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Coulé n.2", image: await seedMedia('Coulé n.2.png'),   width: 100, widthMax: null, height: 100, heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Coulé n.3", image: await seedMedia('Coulé n.3.png'),   width: 100, widthMax: null, height: 80,  heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Coupé n.1", image: await seedMedia('Coupé n.1.png'),   width: 100, widthMax: null, height: 80, heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Coupé n.2", image: await seedMedia('Coupé n.2.png'),   width: 100, widthMax: null, height: 70,  heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Coupé n.3", image: await seedMedia('Coupé n.3.png'),   width: 100, widthMax: null, height: 80,  heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Painter", image: await seedMedia('Painter.png'),     width: 100, widthMax: null, height: 80,  heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Pissed off", image: await seedMedia('Pissed off.png'),  width: 100, widthMax: null, height: 80,  heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Van-Gogh", image: await seedMedia('Van-Gogh.png'),    width: 100, widthMax: null, height: 80,  heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Repas pop", image: await seedMedia('Repas pop.png'),   width: 100, widthMax: null, height: 80, heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Poisson n.1", image: await seedMedia('Poisson n.1.png'), width: 100, widthMax: null, height: 80, heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Poisson n.2", image: await seedMedia('Poisson n.2.png'), width: 100, widthMax: null, height: 80, heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
      ],
    },
    {
      slug: 'renovations',
      displayName: 'Rénovations',
      description: "En plus de tableaux, je rénove aussi des meubles en tout genre..",
      type: 'Acrylique, résine',
      dateStart: new Date('2017-01-01'),
      dateEnd: new Date('2025-01-01'),
      width: null, widthMax: null,
      height: null, heightMax: null,
      tableaux: [
        {  title: "ISA", image: await seedMedia('ISA.png'),                 width: null, widthMax: null, height: null, heightMax: null, date: new Date('2023-10-01'), type: null, description: 'Une table en 3 parties, en bois et résine époxy.' },
        { title: "ISA-bis", image: await seedMedia('ISA-bis.png'),             width: null, widthMax: null, height: null, heightMax: null, date: new Date('2023-10-01'), type: null, description: 'Une table en 3 parties, en bois et résine époxy' },
        { title: "Set-feuille", image: await seedMedia('Set-feuille.png'),         width: null, widthMax: null, height: null, heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Commode feuille", image: await seedMedia('Commode-feuille.png'),     width: null, widthMax: null, height: null, heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Table-basse feuille", image: await seedMedia('Table-basse-feuille.png'), width: null, widthMax: null, height: null, heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Tabouret feuille", image: await seedMedia('Tabouret-feuille.png'),    width: null, widthMax: null, height: null, heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Bahut noir", image: await seedMedia('Bahut-noir.png'),          width: null, widthMax: null, height: null, heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
        { title: "Cactus", image: await seedMedia('Cactus.png'),              width: null, widthMax: null, height: null, heightMax: null, date: new Date('2023-10-01'), type: null, description: '' },
      ],
    },
  ]

    for (const cat of categories) {
    const { tableaux, ...catData } = cat;
    const category = await prisma.paintingCategory.create({
      data: catData,
    });

    await prisma.painting.createMany({
      data: tableaux.map(p => ({ ...p, categoryId: category.id })),
    });
    console.log(`Seeded ${tableaux.length} paintings → ${cat.displayName}`);
  }
}


main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
