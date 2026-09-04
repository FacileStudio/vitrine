import { Html, Head, Body, Container, Text, Button, Tailwind, Img } from '@react-email/components';
import { tailwindConfig } from '../tailwind-config';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <Html>
    <Head />
    <Tailwind config={tailwindConfig}>
      <Body className="bg-background font-sans">
        <Container className="max-w-lg mx-auto bg-white rounded shadow p-8 border-border border-8">
          <Img src={`${baseUrl}/static/facile-logotype.png`} width="40" height="40" alt="Facile Logo" className="mb-6" />
            {children}
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
