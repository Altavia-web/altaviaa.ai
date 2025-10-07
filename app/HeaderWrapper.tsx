'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import type { Locale } from '@/locales';

export default function HeaderWrapper() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith('/en') ? 'en' : 'de';

  return <Header locale={locale} />;
}
