'use client';

import { useEffect } from 'react';
import { createJournal } from '@facile/journal';

const journalUrl =
  process.env.NEXT_PUBLIC_JOURNAL_URL || 'https://journal.facile.studio/api';
const journalKey =
  process.env.NEXT_PUBLIC_JOURNAL_KEY ||
  'journal_pub_vitrine_AZqPViokahMRdy3f-OD7gKSu0-ADutpK165z_Cq3tYk';

export function JournalTelemetry() {
  useEffect(() => {
    if (!journalUrl || !journalKey) return;
    const journal = createJournal({
      url: journalUrl,
      key: journalKey,
    });
    return journal.install();
  }, []);

  return null;
}

export default JournalTelemetry;
