# AltivaAI - Projekt Zusammenfassung

## Projektübersicht

**Projektname:** altiva-ai
**Version:** 0.1.0
**Typ:** Next.js React-Anwendung (App Router)
**Zweck:** Mehrsprachige Corporate Website für Alta Via Applications GmbH
**Domain:** altaviaapplications.com
**Sprachen:** Deutsch (/) + Englisch (/en)
**Deployment:** Vercel-ready
**Entwicklungsumgebung:** Windows 11 (win32)
**Build Status:** ✅ Production-ready (32 statische Routen)

## Technische Details

### Tech Stack
- **Framework:** Next.js 15.5.3 mit Turbopack
- **Frontend:** React 19.1.0 + React DOM 19.1.0
- **Styling:** Tailwind CSS v4 mit PostCSS
- **Sprache:** TypeScript 5 (Strict Mode)
- **Icons:** Lucide React 0.544.0
- **Linting:** ESLint 9 mit Next.js Config
- **Internationalisierung:** Custom Route-Mapping (lib/route-mapping.ts)

### Projektstruktur

```
altivaAI/
├── app/                           # Next.js App Router Seiten
│   ├── layout.tsx                # Root Layout mit Header
│   ├── page.tsx                  # Deutsche Homepage
│   ├── globals.css               # CSS-Variablen & Tailwind
│   ├── en/                       # Englische Seiten (13 Routes)
│   │   ├── page.tsx             # Englische Homepage
│   │   ├── contact/
│   │   ├── products/
│   │   ├── resources/
│   │   ├── datev-interface/
│   │   ├── travel-expenses/
│   │   ├── dunning/
│   │   ├── localization-germany/
│   │   ├── absence-management/
│   │   ├── peak-ship/
│   │   ├── imprint/
│   │   └── privacy/
│   ├── kontakt/                  # Deutsche Seiten
│   ├── products/
│   ├── ressourcen/
│   ├── schnittstelle-datev/
│   ├── reisekosten/
│   ├── dunning/
│   ├── localization-germany/
│   ├── abwesenheitsverwaltung/
│   ├── peak-ship/
│   ├── impressum/
│   ├── datenschutzerklarung/
│   ├── api/                      # API Route (Contact Form)
│   ├── colors-test/              # Test-Seiten
│   ├── typography-test/
│   └── ui-test/
├── components/                    # 72 React Komponenten
│   ├── Button/
│   ├── Header/                   # Navigation mit Mega Menu
│   │   ├── Header.tsx           # 416 Zeilen
│   │   └── LanguageSwitch.tsx
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── FooterBottom.tsx
│   ├── ProductSlider/
│   │   ├── ProductSlider.tsx    # Deutsche Version
│   │   └── ProductSliderEN.tsx  # Englische Version
│   └── sections/                # Sektionen für alle Seiten
│       ├── home/                # Homepage (8 Sektionen)
│       ├── datev/               # DATEV Produkt (DE+EN)
│       ├── localization/        # Lokalisierung (DE+EN)
│       ├── abwesenheit/         # Abwesenheit
│       ├── dunning/             # Mahnwesen
│       ├── peakship/            # Peak Ship
│       ├── reisekosten/         # Reisekosten
│       └── products/            # Produkt-Übersicht
├── lib/
│   └── route-mapping.ts         # DE/EN URL-Mapping
├── locales/
│   ├── de.json                  # Deutsche Übersetzungen
│   └── en.json                  # Englische Übersetzungen
├── public/                       # Statische Assets (Bilder, Icons)
└── [Config-Dateien]
```

## Design System & Branding

### Farbschema (Alta Via Applications)
- **Primary Colors:**
  - Dark Blue: `#002e64` (Hauptfarbe)
  - Sky Blue: `#a8dcf4`
  - Mid Blue: `#5095cb`
  - Ice Blue: `#eaf3f9`

- **Secondary Colors:**
  - Orange: `#f7a600`
  - Sunny Yellow: `#ffd700`

- **Produktspezifische Farben:**
  - DATEV: `#009b87` / `#78dc3c`
  - Reisekosten: `#7bcfc9` / `#d6ffff`
  - Mahnwesen: `#980000` / `#ff4100`
  - PeakShip: `#ffba00` / `#ffebc5`
  - Lokalisierung: `#003399` / `#00bfbf`
  - Abwesenheit: `#00789e` / `#65ffe8`
  - GSheet: `#005f32` / `#00b577`

### Gradienten
- `gradient-dark-to-mid`: Radial Sky Blue → Mid Blue
- `gradient-mid-to-sky`: Radial Mid Blue → Sky Blue
- `gradient-orange-to-yellow`: Radial Sunny Yellow → Orange

### Typografie
- **Font:** Titillium Web (400, 600, 700)
- **Base Font Size:** 18px (1.125rem)
- **Scale Factor:** 1.125 (Perfect Fourth)
- **Responsive Headings:** H1-H6 mit Desktop/Mobile Varianten
- **Line Height:** 1.4 für Body Text

## Homepage Architektur

Die Homepage ist modular aus verschiedenen Sektionen aufgebaut:

**Implementierte Komponenten (8 Sektionen):**
1. **HomeHero** - Hero-Sektion mit Hintergrundbild (72vh, Hero-Image mit CTA-Button "Download Produktbroschüre")
2. **HomeMarketOptimization** - 2-spaltiges Layout: Text + Illustration (80% Container-Breite)
3. **HomeCompany** - Unternehmensvorstellung mit CSS Module (gradient-sky-to-ice Hintergrund, 3 Absätze)
4. **HomeLokalisierung** - Feature-Liste mit CheckCircle-Icons (gradient-lokalisierung Hintergrund, 7 Features)
5. **HomeDatev** - DATEV Integration (components/sections/home/home-datev.tsx)
6. **HomeCompliance** - Compliance/Rechtliches (components/sections/home/home-compliance.tsx)
7. **HomePartners** - Partner-Sektion (2-spaltig: NetSuite-Nutzer + Partner, gradient-sky-to-ice)
8. **HomeTestimonial** - Zitat von Peter von Zimmermann mit Profilbild (Quote-Icon + 192x192 Bild)
9. **Footer** - Globaler Seitenfuß (components/Footer/Footer.tsx + FooterBottom.tsx)

**Alle Sektionen verwenden responsive Design und CSS-Variablen aus globals.css.**

### Beispiel: HomeCompany Komponente
```tsx
// Implementiert mit CSS Module (HomeCompany.module.css)
- Gradient Hintergrund: var(--gradient-sky-to-ice)
- Zentrierter Content mit 80% Breite
- Navy Blue Text (#1e40af)
- Responsive Typografie (H2 + 3 Absätze)
- React.memo für Performance-Optimierung
- CSS Containment für Rendering-Performance
```

## Seiten-Portfolio

**Gesamtanzahl:** 27 Seiten (Deutsch + Englisch) + 3 Test-Seiten + 1 API = **32 Routen**

### Deutsche Seiten (14 Routes)
- **Homepage:** `/` - Modularer Aufbau mit 8 Sektionen
- **Produkte:**
  - `/products` - Produktübersicht mit Slider
  - `/schnittstelle-datev` - DATEV Schnittstelle
  - `/localization-germany` - Lokalisierung Deutschland
  - `/abwesenheitsverwaltung` - Abwesenheitsverwaltung
  - `/dunning` - Mahnwesen
  - `/peak-ship` - Peak Ship Versandmanagement
  - `/reisekosten` - Reisekosten
  - `/ressourcen` - Ressourcen-Seite
- **Service:**
  - `/kontakt` - Kontaktformular (mit API-Integration)
  - `/impressum` - Impressum
  - `/datenschutzerklarung` - Datenschutzerklärung

### Englische Seiten (13 Routes - `/en/*`)
- **Homepage:** `/en` - English Homepage
- **Products:**
  - `/en/products` - Product Overview
  - `/en/datev-interface` - DATEV Interface
  - `/en/localization-germany` - German Localization
  - `/en/absence-management` - Absence Management
  - `/en/dunning` - Dunning Management
  - `/en/peak-ship` - Peak Ship Shipping
  - `/en/travel-expenses` - Travel Expenses
  - `/en/resources` - Resources Page
- **Service:**
  - `/en/contact` - Contact Form
  - `/en/imprint` - Imprint
  - `/en/privacy` - Privacy Policy

### Entwicklungs-Seiten (4 Routes)
- `/ui-test` - UI-Komponenten Test (399 Zeilen)
- `/typography-test` - Typografie Test (215 Zeilen)
- `/colors-test` - Farbsystem Test (406 Zeilen)
- `/api/contact` - Contact Form API Endpoint (ƒ Dynamic)

## Development Setup

### Scripts
```json
{
  "dev": "next dev --turbopack",      // Development Server
  "build": "next build --turbopack",  // Production Build
  "start": "next start",              // Production Server
  "lint": "eslint"                    // Code Linting
}
```

### Konfiguration
- **Next.js:** next.config.ts (TypeScript Config)
- **Tailwind:** tailwind.config.ts mit umfangreichem Design System
  - Custom Colors (7 Produktpaletten)
  - Typography Scale (1.125 Ratio)
  - Custom Gradients
  - Font System (Titillium Web)
- **TypeScript:** Strict Mode aktiviert (tsconfig.json)
- **ESLint:** eslint.config.mjs mit Next.js Rules
- **PostCSS:** postcss.config.mjs mit Tailwind 4

## Git-Historie

**Branch:** main (clean working directory)

**Letzte Commits (Januar 2025):**
- `785e686` - "updT" (Aktuellster Commit)
- `1acb37c` - "updatge kontakt"
- `56b813d` - "update errore"
- `7fa6d86` - "kontakt update"
- `3b8dcfe` - "test"

**Wichtige Feature-Commits:**
- `e29d6f1` - "Set mobile H1 font size to 36px with 110% line height" (Typography-Anpassung)
- `4a7f081` - "Redesign mobile navigation: Vertical list" (Mobile-Navigation Redesign)
- `df750ad` - "Fix: Remove unused Grid3x3 import" (Code-Cleanup)
- `8c776ee` - "Change navigation to hover-based" (Hover-Navigation)
- `5c90e8b` - "Implement mega menu for Applications dropdown" (Mega Menu mit 8 Produktkarten)
- `e53f636` - "Add accessibility improvements: ARIA attributes, keyboard navigation" (Accessibility)
- `42386d7` - "Fix dropdown navigation: Move overlay outside header" (Z-Index Fix)

## Besonderheiten

### CLAUDE.md Integration
- Projekt enthält spezifische Anweisungen für Claude Code
- Automatisierte Komponenten-Erstellung (z.B. home-company.tsx)
- Definierte Design System Conventions

### Performance Optimierungen
- Turbopack für schnelle Entwicklung
- Next.js App Router für optimale Performance
- Font Optimization mit Google Fonts
- Responsive Images und Assets

### SEO & Accessibility
- Strukturierte Metadata
- OpenGraph und Twitter Cards
- Skip-to-Content Link
- Semantische HTML-Struktur

## Code-Statistiken

**Projektgröße:**
- **TypeScript/React Komponenten:** 103 .tsx Dateien (31 in app/ + 72 in components/)
- **App Routes:** 27 Seiten-Routes + 3 Test-Seiten + 1 API = 32 Routen
- **Zweisprachig:** Deutsch (14 Seiten) + Englisch (13 Seiten unter /en)
- **Größte Dateien:**
  - components/Header/Header.tsx: 416 Zeilen (komplexe Navigation)
  - app/colors-test/page.tsx: 406 Zeilen (Farbsystem-Tests)
  - app/ui-test/page.tsx: 399 Zeilen (UI-Komponenten-Tests)
  - app/typography-test/page.tsx: 215 Zeilen (Typografie-Tests)

**Komponentenarchitektur:**
- **72 React Komponenten** in components/ organisiert nach:
  - **Header-System:** (2 Komponenten)
    - Header.tsx: Komplexe Navigation mit Mega Menu (416 Zeilen)
    - LanguageSwitch.tsx: DE/EN Umschalter mit Route-Mapping
    - Features: ARIA-Attribute, ESC-Taste, Mobile Burger-Menu
  - **Footer-System:** (2 Komponenten)
    - Footer.tsx + FooterBottom.tsx
  - **Button-System:** Wiederverwendbare Button-Komponente
  - **ProductSlider:** (2 Komponenten - DE + EN)
  - **Home-Sektionen:** 8 modulare Komponenten für Homepage
  - **Produktsektionen:** Komponenten für 7 NetSuite-Produkte
    - Hero, Challenges, Solutions, Teaser, Comparison
    - Teilweise zweisprachig (DE + EN Versionen)
  - **Product-Specific:** Datev (12), Localization (12), Dunning (6), Peakship (6), Reisekosten (6), Abwesenheit (5)

## Status & Deployment

- **Entwicklungsstand:** ✅ Production-ready (Stand: Januar 2025)
- **Git Status:** Clean working directory (main branch)
- **Build Status:** ✅ Kompiliert erfolgreich (32 statische Routen)
- **Deployment:** Vercel-ready (vercel.json vorhanden)
- **Domain:** altaviaapplications.com
- **Performance:**
  - Turbopack-optimiert für Entwicklung & Build
  - Alle Routen statisch pre-rendered (SSG)
  - First Load JS: ~131-133 kB pro Route
  - Shared JS Chunks: 140 kB (optimiert)
- **Aktuelle Features:**
  - ✅ Zweisprachige Website (DE + EN) mit 27 Seiten
  - ✅ Homepage vollständig implementiert (8 Sektionen)
  - ✅ Responsive Navigation mit Mega Menu
  - ✅ Accessibility-konform (ARIA, Keyboard, ESC-Taste)
  - ✅ 7 vollständige Produktseiten (teilweise zweisprachig)
  - ✅ Kontaktformular mit API-Integration
  - ✅ Vollständiges Impressum und Datenschutzerklärung (DE+EN)
  - ✅ Custom Route-Mapping für Internationalisierung
  - ✅ Language Switcher mit korrekter URL-Zuordnung

## Produktportfolio (7 NetSuite-Erweiterungen)

**Implementierte Produktseiten mit vollständiger Struktur:**

1. **DATEV Schnittstelle** (`/schnittstelle-datev`)
   - Deutsche Buchhaltungsintegration für NetSuite
   - Farben: #009b87 / #78dc3c (Grün/Hellgrün)

2. **Lokalisierung Deutschland** (`/localization-germany`)
   - Rechtskonforme Anpassungen für den deutschen Markt
   - Farben: #003399 / #00bfbf (Dunkelblau/Türkis)

3. **Abwesenheitsverwaltung** (`/abwesenheitsverwaltung`)
   - Urlaubsverwaltung und Abwesenheitsmanagement
   - Farben: #00789e / #65ffe8 (Petrol/Hellblau)

4. **Mahnwesen** (`/dunning`)
   - Automatisiertes Forderungsmanagement
   - Farben: #980000 / #ff4100 (Dunkelrot/Orange-Rot)

5. **Peak Ship** (`/peak-ship`)
   - Versandmanagement und Logistikintegration
   - Farben: #ffba00 / #ffebc5 (Gelb-Orange/Beige)

6. **Reisekosten** (`/reisekosten`)
   - Reisekostenabrechnung für NetSuite
   - Farben: #7bcfc9 / #d6ffff (Türkis/Hellblau)

7. **GSheet Integration** (Komponenten vorhanden)
   - Google Sheets Integration
   - Farben: #005f32 / #00b577 (Dunkelgrün/Hellgrün)

**Komponenten-Struktur je Produkt:**
- Hero-Sektion (mit Produktfarben)
- Challenges (Problemstellung)
- Solutions (Lösungsansatz)
- Teaser (Call-to-Action)
- Comparison Table (Vorher/Nachher-Vergleich)

## Internationalisierung (i18n)

**Implementierung:**
- **Route-basiertes System** ohne externe Libraries
- **Deutsche Seiten:** Root-Level (`/`)
- **Englische Seiten:** Unter `/en/*`
- **Route-Mapping:** lib/route-mapping.ts
  - Bidirektionale URL-Zuordnung (DE ↔ EN)
  - Unterstützt komplexe Pfade und Produktseiten
  - Automatische Fallback-Logik
- **Language Switch:** LanguageSwitch.tsx Komponente
  - Dynamische URL-Umschaltung zwischen Sprachen
  - Erhält aktuelle Seiten-Kontext
  - Nutzt getAlternateUrl() für korrekte Zuordnung
- **Übersetzungen:** locales/de.json + locales/en.json

**Vorteile:**
- ✅ SEO-freundliche URLs (separate Pfade)
- ✅ Keine Client-Side Redirect-Logik
- ✅ Statisch pre-rendered (schnelles Loading)
- ✅ Einfache Wartung und Erweiterung

## Fazit

**Enterprise-grade Next.js-Anwendung für Alta Via Applications GmbH mit:**

✅ **Skalierbare Architektur:**
- 103 TypeScript/React Komponenten (.tsx)
- 32 App Routes (27 Seiten + 3 Tests + 1 API)
- Zweisprachige Website (DE + EN) mit 27 lokalisierten Seiten
- Modulare Komponentenstruktur mit CSS Modules
- Homepage mit 8 modularen Sektionen
- 7 vollständige Produktseiten

✅ **Ausgereiftes Design System:**
- Vollständige Farbpalette mit 7 produktspezifischen Farbthemen
- Responsive Typografie (Titillium Web, 36px mobile → 69px desktop H1)
- CSS-Variablen und Tailwind 4 Integration
- Radial Gradients für visuelles Interesse
- Konsistente Spacing- und Typography-Scale (1.125 Ratio)

✅ **Performance & Technologie:**
- Next.js 15.5.3 mit Turbopack (schnellste Build-Pipeline)
- React 19.1.0 (neueste stabile Version)
- TypeScript 5 im Strict Mode
- Alle Routen statisch pre-rendered (SSG)
- First Load JS: 131-133 kB (optimiert)
- Optimierte Google Fonts Integration

✅ **Internationalisierung:**
- Route-basiertes i18n ohne externe Libraries
- 27 lokalisierte Seiten (DE + EN)
- Custom Route-Mapping für SEO-freundliche URLs
- Language Switcher mit kontextbezogener Navigation

✅ **Corporate Identity & SEO:**
- Vollständige Integration der Alta Via Applications Marke
- NetSuite-fokussierte Produktdarstellung (7 Erweiterungen)
- SEO-optimierte Metadaten (OpenGraph, Twitter Cards)
- Responsive Design (Mobile-First Approach)
- Strukturierte Sitemaps für beide Sprachen

✅ **Accessibility & UX:**
- ARIA-Labels und Semantic HTML
- Keyboard-Navigation (ESC-Taste, Tab-Navigation)
- Skip-to-Content Link
- Hover-basierte Desktop-Navigation mit Mega Menu
- Mobile Burger-Menu mit vertikalem Layout
- Focus-States und Screen-Reader Support

✅ **Production-Ready:**
- Build kompiliert fehlerfrei (32 Routen)
- Vercel-Deployment konfiguriert
- API-Integration für Kontaktformular
- Umfassende Test-Seiten für Design System
- Clean Git-Repository (main branch)