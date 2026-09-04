import { createMailer, fromEnv } from '@facile/facteur';

/*
 * The suite's shared mailer. facteur owns transport and message shaping; the
 * templates and the send policy stay here.
 *
 * It rejects when SMTP_HOST is unset rather than resolving quietly, which is the
 * opposite of what this file used to do: it exported null and every caller
 * skipped with a console warning, so an unconfigured environment looked exactly
 * like a working one. Callers decide whether a failure is fatal — the contact
 * form logs and continues, because a contact that reached the database must not
 * be lost to a mail server.
 */
const env = fromEnv();

export const mailer = createMailer({
	...env,
	from: env.from || 'GF Conseil & Formation <contact@gfconseiletformation.fr>',
});
