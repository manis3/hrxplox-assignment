import Navbar from '@/components/navbar/navBar';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function DashboardWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <main>
      <Navbar pathname={pathname} />
      {children}
    </main>
  );
}
