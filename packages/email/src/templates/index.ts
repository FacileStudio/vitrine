import { WelcomeEmail } from "./welcome";

export const templates = {
  "welcome": WelcomeEmail,
} as const;

export interface TemplateProps {
  "welcome": { name: string };
}

export type TemplateName = keyof typeof templates;
