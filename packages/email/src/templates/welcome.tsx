import {Text } from '@react-email/components';
import { Layout } from '../components/layout';

export const WelcomeEmail = ({ name } : { name: string }) => (
  <Layout>
    <Text className="text-2xl font-bold text-primary mb-2">Welcome to Facile!</Text>
    <Text className="text-base text-secondary mb-4">
      Hi, {name}
    </Text>
    <Text className="text-base text-text mb-6">
      Thank you for registering. We’re excited to have you on board!
    </Text>
    <Text className="text-sm text-secondary">
      If you have any questions, just reply to this email.
    </Text>
  </Layout>
);

WelcomeEmail.PreviewProps = {
  name: "John Doe",
};

export default WelcomeEmail;
