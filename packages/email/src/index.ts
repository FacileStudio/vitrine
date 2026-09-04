import React from "react";
import { templates } from "./templates";
import type { TemplateProps, TemplateName } from "./templates";
import { mailer } from "./transporter";
import { render, pretty } from '@react-email/render';

type SendOptions = { to: string | string[]; subject: string };

async function sendEmail<T extends TemplateName>(options: {
  templateName: T;
  props: TemplateProps[T];
  mailOptions: SendOptions;
}): Promise<void> {
  const { mailOptions, templateName, props } = options;
  const TemplateComponent = templates[templateName] as React.FC<any>;

  const body = await render(React.createElement(TemplateComponent, props));

  await mailer.send({ ...mailOptions, html: await pretty(body) });
}

export { sendEmail, templates, mailer };
export type { TemplateProps, TemplateName };
