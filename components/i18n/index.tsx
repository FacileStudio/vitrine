import { Trans as TransComponent } from 'react-i18next/TransWithoutContext';

export function Translate(props: React.ComponentProps<typeof TransComponent>) {
  return <TransComponent {...props} />;
}

