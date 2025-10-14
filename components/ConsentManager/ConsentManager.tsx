'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import klaroConfig from '@/lib/klaro-config';
import 'klaro/dist/klaro.css';

export default function ConsentManager() {
  const pathname = usePathname();

  useEffect(() => {
    // Dynamically import Klaro to avoid SSR issues
    // @ts-expect-error - Klaro doesn't have official TypeScript definitions
    import('klaro').then((Klaro) => {
      // Determine language based on pathname
      const isEnglish = pathname?.startsWith('/en');
      const language = isEnglish ? 'en' : 'de';

      // Update config with current language
      const config = {
        ...klaroConfig,
        lang: language,
      };

      // Make config available globally for the cookie settings button
      if (typeof window !== 'undefined') {
        window.klaroConfig = config;
      }

      // Initialize Klaro
      Klaro.setup(config);
    });
  }, [pathname]);

  return null; // This component doesn't render anything
}
