import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ModalProvider from '@/components/providers/modal-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import './globals.css';

const inter = Inter({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className={cn('dark:bg-[#1f1f1f]', inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey={`${siteConfig.name}-theme`}
          disableTransitionOnChange
        >
          <ModalProvider>{children}</ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
