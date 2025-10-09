'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getAlternateUrl } from '@/lib/route-mapping';
import type { Locale } from '@/locales';

interface LanguageSwitchProps {
  currentLocale?: Locale;
}

export default function LanguageSwitch({ currentLocale = 'de' }: LanguageSwitchProps) {
  const pathname = usePathname();
  const targetLocale: Locale = currentLocale === 'en' ? 'de' : 'en';
  const alternateUrl = getAlternateUrl(pathname, targetLocale);

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/"
        className="flex items-center justify-center w-6 h-6"
        aria-label="Home"
      >
        <Image
          src="/images/AVA-Globe.png"
          alt="Alta Via Globe"
          width={32}
          height={32}
          className="w-full h-full object-contain"
        />
      </Link>
      <Link
        href={alternateUrl}
        className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-100"
        aria-label={`Switch to ${targetLocale === 'en' ? 'English' : 'Deutsch'}`}
        style={{ color: '#002e64' }}
      >
        {targetLocale.toUpperCase()}
      </Link>
    </div>
  );
}
