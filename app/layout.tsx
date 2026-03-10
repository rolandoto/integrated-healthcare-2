import './globals.css';
import {NextIntlClientProvider} from 'next-intl';

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const messages = (await import('../messages/en.json')).default;

  return (
    <html lang="en">
      <body className="antialiased">
        <NextIntlClientProvider locale="en" messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
