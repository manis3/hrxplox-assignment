'use client';
import DashboardWrapper from './dashboard-wrapper';
import './globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body>
          <DashboardWrapper>{children}</DashboardWrapper>
        </body>
      </QueryClientProvider>
    </html>
  );
}
