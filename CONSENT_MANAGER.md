# Consent Manager Implementation Guide

## Übersicht

Diese Dokumentation beschreibt die Anforderungen und Implementierung eines Consent Managers (Cookie-Banner) für altaviaa.ai gemäß DSGVO und TDDDG.

## 1. Rechtliche Anforderungen

### DSGVO & TDDDG Compliance
- ✅ **Opt-in statt Opt-out**: Keine Cookies ohne explizite Zustimmung
- ✅ **Informationspflicht**: Klare Information über Art, Zweck und Dauer der Cookies
- ✅ **Widerrufbarkeit**: Nutzer müssen Einwilligung jederzeit widerrufen können
- ✅ **Dokumentation**: Protokollierung der Einwilligungen
- ✅ **Privacy by Design**: Datenschutzfreundliche Voreinstellungen

### Cookie-Kategorien

#### 1. Notwendige Cookies (Keine Zustimmung erforderlich)
- Session-Cookies
- Consent-Manager-Einstellungen
- Sicherheits-Cookies

#### 2. Funktionale Cookies (Zustimmung erforderlich)
- Spracheinstellungen
- Formular-Daten (temporär)

#### 3. Analytische Cookies (Zustimmung erforderlich)
- Google Analytics / Matomo
- Vercel Analytics (wenn aktiviert)

#### 4. Marketing Cookies (Zustimmung erforderlich)
- Google Ads / Facebook Pixel (falls zukünftig verwendet)

## 2. Aktuelle Cookies auf altaviaa.ai

### Status: Minimal
Die Website verwendet derzeit **keine externen Tracking-Tools**:
- ❌ Kein Google Analytics
- ❌ Kein Facebook Pixel
- ❌ Keine Marketing-Tools
- ✅ Nur Vercel-Standard Cookies (für Deployment/Hosting)

### Vercel Cookies
| Cookie | Typ | Zweck | Dauer |
|--------|-----|-------|-------|
| `__vercel_live_token` | Funktional | Vercel Preview-Modus | Session |
| `_vercel` | Notwendig | Load Balancing | Session |

**Hinweis**: Vercel Analytics muss explizit aktiviert werden und ist aktuell NICHT aktiv.

## 3. Empfohlene Consent Manager Lösungen

### Option 1: **Cookiebot** (Empfohlen für Profis)
**Vorteile:**
- ✅ Automatische Cookie-Erkennung
- ✅ DSGVO-konform
- ✅ Mehrsprachig (DE/EN)
- ✅ Professionelles Dashboard
- ✅ Automatische Updates bei Rechtsänderungen

**Kosten:**
- Free: bis 100 Unterseiten
- Light: €9/Monat (bis 500 Unterseiten)

**Integration:**
```html
<!-- Im <head> Tag -->
<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js"
        data-cbid="YOUR-DOMAIN-GROUP-ID" type="text/javascript"></script>
```

**Website:** https://www.cookiebot.com

---

### Option 2: **Usercentrics** (Enterprise)
**Vorteile:**
- ✅ Sehr umfangreich
- ✅ Compliance Management Suite
- ✅ A/B Testing für Banner
- ✅ Data Privacy Management

**Kosten:**
- Ab €100/Monat (individuell)

**Website:** https://usercentrics.com

---

### Option 3: **Klaro!** (Open Source, Empfohlen für Entwickler)
**Vorteile:**
- ✅ Kostenlos & Open Source
- ✅ Volle Kontrolle über Design
- ✅ Leichtgewichtig (~20KB)
- ✅ Keine externe Dependencies
- ✅ DSGVO-konform

**Kosten:** Kostenlos

**Website:** https://kiprotect.com/klaro

---

### Option 4: **Borlabs Cookie** (WordPress)
Nicht relevant, da Next.js verwendet wird.

---

### Option 5: **Custom Solution**
Eigene React-Komponente mit localStorage für Consent-Verwaltung.

**Vorteile:**
- ✅ Volle Kontrolle
- ✅ Keine Kosten
- ✅ Integration mit bestehendem Design

**Nachteile:**
- ⚠️ Rechtliche Verantwortung liegt beim Betreiber
- ⚠️ Manuelles Update bei Rechtsänderungen
- ⚠️ Cookie-Scanning muss manuell durchgeführt werden

## 4. Implementierung - Empfehlung für altaviaa.ai

### Empfohlener Ansatz: **Klaro!** (Open Source)

Da die Website aktuell keine Tracking-Tools verwendet, ist eine schlanke Lösung ausreichend.

#### Installation

```bash
npm install klaro
```

#### Konfiguration

Datei: `lib/klaro-config.ts`

```typescript
import { KlaroConfig } from 'klaro';

export const klaroConfig: KlaroConfig = {
  version: 1,

  // Sprach-Konfiguration
  lang: 'de',
  translations: {
    de: {
      consentModal: {
        title: 'Cookie-Einstellungen',
        description: 'Wir verwenden Cookies, um unsere Website und unsere Services zu optimieren. Sie können selbst entscheiden, welche Kategorien Sie zulassen möchten.',
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
    },
    en: {
      consentModal: {
        title: 'Cookie Settings',
        description: 'We use cookies to optimize our website and our services. You can decide which categories you want to allow.',
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
    },
  },

  // Cookie-Konfiguration
  services: [
    {
      name: 'vercel',
      title: 'Vercel Hosting',
      purposes: ['necessary'],
      required: true,
      cookies: [/^_vercel/, '__vercel_live_token'],
      description: {
        de: 'Vercel-Cookies werden für das Hosting und die Performance der Website benötigt.',
        en: 'Vercel cookies are required for hosting and website performance.',
      },
    },
    {
      name: 'netsuite-form',
      title: 'Kontaktformular',
      purposes: ['functional'],
      cookies: ['contact_form_data'],
      description: {
        de: 'Speichert temporäre Formulardaten für das Kontaktformular.',
        en: 'Stores temporary form data for the contact form.',
      },
    },
    // Zukünftig: Analytics
    // {
    //   name: 'google-analytics',
    //   title: 'Google Analytics',
    //   purposes: ['analytics'],
    //   cookies: [/^_ga/, /^_gid/],
    //   description: {
    //     de: 'Google Analytics wird verwendet, um die Nutzung der Website zu analysieren.',
    //     en: 'Google Analytics is used to analyze website usage.',
    //   },
    // },
  ],

  // Design & Verhalten
  mustConsent: true,
  acceptAll: true,
  hideDeclineAll: false,
  hideLearnMore: false,
  noticeAsModal: true,

  // Styling
  styling: {
    theme: ['light'],
    primaryColor: '#5095cb', // Alta Via Blue
    accentColor: '#002e64', // Dark Blue
  },
};
```

#### React Integration

Datei: `components/ConsentManager.tsx`

```typescript
'use client';

import { useEffect } from 'react';
import * as Klaro from 'klaro';
import { klaroConfig } from '@/lib/klaro-config';
import 'klaro/dist/klaro.css';

export default function ConsentManager() {
  useEffect(() => {
    // Initialize Klaro
    Klaro.setup(klaroConfig);
  }, []);

  return null;
}
```

#### Layout Integration

Datei: `app/layout.tsx`

```typescript
import ConsentManager from '@/components/ConsentManager';

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <ConsentManager />
        {children}
      </body>
    </html>
  );
}
```

## 5. Datenschutzerklärung Anpassungen

### Benötigte Ergänzungen

Die Datenschutzerklärung muss folgende Punkte enthalten:

#### 5.1 Cookie-Übersicht

```markdown
## Cookies und ähnliche Technologien

### Was sind Cookies?
Cookies sind kleine Textdateien, die beim Besuch unserer Website auf Ihrem Gerät gespeichert werden.

### Welche Cookies verwenden wir?

#### Notwendige Cookies
- **Vercel Hosting Cookies**: Erforderlich für die Bereitstellung der Website
  - Cookie: `_vercel`
  - Zweck: Load Balancing
  - Dauer: Session
  - Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)

- **Consent Manager Cookie**
  - Cookie: `klaro`
  - Zweck: Speichert Ihre Cookie-Einstellungen
  - Dauer: 365 Tage
  - Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)

### Ihre Rechte
Sie können Ihre Cookie-Einstellungen jederzeit über den Link "Cookie-Einstellungen"
im Footer ändern oder Cookies in Ihren Browser-Einstellungen löschen.
```

#### 5.2 Kontaktformular (NetSuite Integration)

```markdown
## Kontaktformular

### Datenverarbeitung
Wenn Sie unser Kontaktformular nutzen, werden folgende Daten verarbeitet:
- Name
- E-Mail-Adresse
- Unternehmen
- Herkunftsquelle (optional)
- Nachricht (optional)

### Empfänger
Die Daten werden an unser CRM-System (NetSuite, Oracle Corporation) übermittelt
und dort als Lead gespeichert.

### Zweck
Die Verarbeitung erfolgt zur Bearbeitung Ihrer Kontaktanfrage.

### Rechtsgrundlage
Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)

### Speicherdauer
Die Daten werden solange gespeichert, wie dies zur Bearbeitung Ihrer Anfrage
erforderlich ist. Danach werden sie gelöscht, sofern keine gesetzlichen
Aufbewahrungspflichten bestehen.

### Ihre Rechte
Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung,
Datenübertragbarkeit und Widerspruch gemäß Art. 15-21 DSGVO.
```

## 6. Footer Integration

### Link zu Cookie-Einstellungen

Die Footer-Komponente sollte einen Link zu den Cookie-Einstellungen enthalten:

```typescript
// In components/Footer/Footer.tsx
<button
  onClick={() => {
    // @ts-ignore
    if (window.klaro) {
      // @ts-ignore
      window.klaro.show();
    }
  }}
  className="hover:text-[#5095cb] transition-colors"
>
  Cookie-Einstellungen
</button>
```

## 7. Testing Checklist

### Funktionale Tests
- [ ] Banner erscheint beim ersten Besuch
- [ ] "Alle akzeptieren" funktioniert
- [ ] "Nur notwendige" funktioniert
- [ ] "Auswahl speichern" funktioniert
- [ ] Einstellungen werden gespeichert (localStorage)
- [ ] Banner erscheint nicht bei erneutem Besuch (wenn Consent gegeben)
- [ ] Link "Cookie-Einstellungen" im Footer funktioniert
- [ ] Banner ist auf DE und EN korrekt übersetzt
- [ ] Mobile Ansicht funktioniert korrekt

### Compliance Tests
- [ ] Keine nicht-notwendigen Cookies vor Consent
- [ ] Nur akzeptierte Cookies werden gesetzt
- [ ] Consent ist widerrufbar
- [ ] Datenschutzerklärung ist aktualisiert
- [ ] Impressum verlinkt Datenschutzerklärung

### Performance Tests
- [ ] Banner blockiert nicht das Rendering
- [ ] Keine negativen Core Web Vitals
- [ ] JavaScript-Bundle bleibt unter 200KB

## 8. Zukünftige Erweiterungen

### Wenn Analytics hinzugefügt wird:

1. **Google Analytics 4 Integration**
```typescript
// In klaro-config.ts Service hinzufügen:
{
  name: 'google-analytics',
  title: 'Google Analytics',
  purposes: ['analytics'],
  cookies: [/^_ga/, /^_gid/, /^_gat/],
  onAccept: () => {
    // GA4 initialisieren
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  },
  onDecline: () => {
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied'
    });
  },
}
```

2. **Vercel Analytics**
```typescript
// Nur laden wenn Analytics-Consent gegeben
import { Analytics } from '@vercel/analytics/react';

{hasAnalyticsConsent && <Analytics />}
```

## 9. Kosten-Nutzen-Analyse

| Lösung | Setup-Zeit | Kosten/Jahr | Wartung | DSGVO-Sicherheit |
|--------|-----------|-------------|---------|------------------|
| Klaro! | 4-6h | €0 | Mittel | Hoch (bei korrekter Implementierung) |
| Cookiebot Free | 1-2h | €0 | Gering | Sehr hoch |
| Cookiebot Light | 1-2h | €108 | Sehr gering | Sehr hoch |
| Usercentrics | 2-3h | €1200+ | Sehr gering | Sehr hoch |

### Empfehlung für altaviaa.ai

**Phase 1 (Jetzt)**: Klaro! (Open Source)
- Kein externes Tracking aktiv
- Minimale Kosten
- Volle Design-Kontrolle

**Phase 2 (Bei Analytics-Implementierung)**: Cookiebot Light
- Automatische Cookie-Erkennung
- Professioneller Support
- Geringer Wartungsaufwand

## 10. Implementierungs-Timeline

### Sprint 1 (1-2 Tage)
- [x] Dokumentation erstellt
- [ ] Klaro! installieren
- [ ] Konfiguration erstellen
- [ ] Komponente implementieren
- [ ] Styling anpassen (Alta Via Design)

### Sprint 2 (1 Tag)
- [ ] Datenschutzerklärung aktualisieren
- [ ] Footer-Link hinzufügen
- [ ] Testing durchführen
- [ ] Mobile-Optimierung

### Sprint 3 (1 Tag)
- [ ] User Acceptance Testing
- [ ] Performance-Messung
- [ ] Deploy to Production

## 11. Support & Ressourcen

### Dokumentation
- **Klaro!**: https://kiprotect.com/docs/klaro
- **DSGVO**: https://dsgvo-gesetz.de/
- **TDDDG**: https://www.gesetze-im-internet.de/ttdsg/

### Rechtliche Beratung
Für rechtlich bindende Auskünfte sollte ein Datenschutzbeauftragter oder
Rechtsanwalt konsultiert werden.

### Hilfreiche Tools
- **Cookie-Scanner**: https://www.cookiemetrix.com/
- **DSGVO-Check**: https://www.datenschutz-generator.de/

---

**Erstellt am**: 2025-10-14
**Letzte Aktualisierung**: 2025-10-14
**Version**: 1.0
**Projekt**: altaviaa.ai
