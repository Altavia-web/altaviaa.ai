// Klaro! Consent Manager Configuration
// Documentation: https://kiprotect.com/docs/klaro

export const klaroConfig = {
  version: 1,

  // Element ID for mounting the consent notice
  elementID: 'klaro',

  // Styling configuration
  styling: {
    theme: ['light'],
  },

  // Do not show the consent notice as a modal
  noticeAsModal: false,

  // HTML content configuration
  htmlTexts: true,

  // Hide "Decline All" button
  hideDeclineAll: false,

  // Show "Accept All" button
  acceptAll: true,

  // Hide "Learn More" link
  hideLearnMore: false,

  // User must give consent before using the site
  mustConsent: true,

  // Cookie name for storing consent
  cookieName: 'klaro',

  // Cookie expiry in days
  cookieExpiresAfterDays: 365,

  // Default language
  default: 'de',

  // Translations
  translations: {
    // German translations
    de: {
      consentModal: {
        title: 'Cookie-Einstellungen',
        description:
          'Wir verwenden Cookies, um unsere Website zu optimieren. Sie können selbst entscheiden, welche Kategorien Sie zulassen möchten. Weitere Informationen finden Sie in unserer <a href="/datenschutzerklarung">Datenschutzerklärung</a>.',
      },
      consentNotice: {
        changeDescription:
          'Es gab Änderungen seit Ihrem letzten Besuch. Bitte aktualisieren Sie Ihre Einwilligung.',
        description:
          'Wir verwenden Cookies, um unsere Website zu optimieren. Sie können selbst entscheiden, welche Kategorien Sie zulassen möchten.',
        learnMore: 'Mehr erfahren',
      },
      purposes: {
        necessary: 'Notwendig',
        functional: 'Funktional',
        analytics: 'Analytisch',
        marketing: 'Marketing',
      },
      ok: 'Alle akzeptieren',
      save: 'Auswahl speichern',
      decline: 'Nur notwendige',
      close: 'Schließen',
      acceptAll: 'Alle akzeptieren',
      acceptSelected: 'Ausgewählte akzeptieren',
      service: {
        disableAll: {
          title: 'Alle Dienste an-/ausschalten',
          description: 'Verwenden Sie diesen Schalter, um alle Dienste zu aktivieren/deaktivieren.',
        },
        optOut: {
          title: '(Opt-out)',
          description: 'Dieser Dienst wird standardmäßig geladen (aber Sie können ihn deaktivieren)',
        },
        required: {
          title: '(immer erforderlich)',
          description: 'Dieser Dienst ist immer erforderlich',
        },
        purposes: 'Zwecke',
        purposeItem: {
          service: 'Dienst',
          services: 'Dienste',
        },
      },
    },

    // English translations
    en: {
      consentModal: {
        title: 'Cookie Settings',
        description:
          'We use cookies to optimize our website. You can decide which categories you want to allow. For more information, please see our <a href="/en/privacy">Privacy Policy</a>.',
      },
      consentNotice: {
        changeDescription:
          'There have been changes since your last visit. Please update your consent.',
        description:
          'We use cookies to optimize our website. You can decide which categories you want to allow.',
        learnMore: 'Learn more',
      },
      purposes: {
        necessary: 'Necessary',
        functional: 'Functional',
        analytics: 'Analytics',
        marketing: 'Marketing',
      },
      ok: 'Accept all',
      save: 'Save selection',
      decline: 'Only necessary',
      close: 'Close',
      acceptAll: 'Accept all',
      acceptSelected: 'Accept selected',
      service: {
        disableAll: {
          title: 'Toggle all services',
          description: 'Use this switch to enable/disable all services.',
        },
        optOut: {
          title: '(Opt-out)',
          description: 'This service is loaded by default (but you can opt out)',
        },
        required: {
          title: '(always required)',
          description: 'This service is always required',
        },
        purposes: 'Purposes',
        purposeItem: {
          service: 'Service',
          services: 'Services',
        },
      },
    },
  },

  // Services / Cookies configuration
  services: [
    {
      name: 'vercel',
      title: 'Vercel Hosting',
      purposes: ['necessary'],
      required: true,
      optOut: false,
      onlyOnce: true,
      cookies: [
        /^_vercel/,
        '__vercel_live_token',
      ],
      translations: {
        de: {
          description:
            'Vercel-Cookies werden für das Hosting und die Performance der Website benötigt. Diese Cookies sind technisch notwendig.',
        },
        en: {
          description:
            'Vercel cookies are required for hosting and website performance. These cookies are technically necessary.',
        },
      },
    },
    {
      name: 'consent-manager',
      title: 'Consent Manager',
      purposes: ['necessary'],
      required: true,
      optOut: false,
      onlyOnce: true,
      cookies: ['klaro'],
      translations: {
        de: {
          description:
            'Speichert Ihre Cookie-Einstellungen, damit wir uns Ihre Präferenzen merken können. Dieser Cookie ist technisch notwendig.',
        },
        en: {
          description:
            'Stores your cookie settings so we can remember your preferences. This cookie is technically necessary.',
        },
      },
    },
    {
      name: 'contact-form',
      title: 'Kontaktformular / Contact Form',
      purposes: ['functional'],
      required: false,
      optOut: false,
      default: true,
      cookies: ['contact_form_data'],
      translations: {
        de: {
          description:
            'Speichert temporär Ihre Formulardaten beim Ausfüllen des Kontaktformulars, um einen versehentlichen Datenverlust zu vermeiden.',
        },
        en: {
          description:
            'Temporarily stores your form data when filling out the contact form to prevent accidental data loss.',
        },
      },
    },
  ],

  // Custom styling via CSS variables
  // Applied via app/globals.css
};

export default klaroConfig;
