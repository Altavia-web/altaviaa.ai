# AltivaAI - Projekt Zusammenfassung

## Projektübersicht

**Projektname:** altiva-ai
**Version:** 0.1.0
**Typ:** Next.js React-Anwendung
**Zweck:** Corporate Website für Alta Via Applications GmbH

## Technische Details

### Tech Stack
- **Framework:** Next.js 15.5.3 mit Turbopack
- **Frontend:** React 19.1.0 + React DOM 19.1.0
- **Styling:** Tailwind CSS v4 mit PostCSS
- **Sprache:** TypeScript 5
- **Icons:** Lucide React 0.544.0
- **Linting:** ESLint 9 mit Next.js Config

### Projektstruktur

```
altivaAI/
├── app/                     # Next.js App Router Seiten
│   ├── layout.tsx          # Root Layout mit Header
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Globale CSS-Variablen
│   ├── applications/       # Produktübersicht Seite
│   ├── datenschutzerklarung/
│   ├── impressum/
│   ├── kontakt/
│   ├── produktuebersicht/
│   └── [weitere Seiten]    # 18 Seiten total
├── components/
│   ├── Button/             # Wiederverwendbare Button-Komponente
│   ├── Header/             # Globale Navigation
│   ├── Footer/             # Footer mit Branding
│   └── sections/home/      # Modular aufgebaute Homepage-Sektionen
│       ├── home-hero.tsx
│       ├── home-company.tsx
│       ├── home-datev.tsx
│       ├── home-compliance.tsx
│       └── [weitere 5 Sektionen]
├── public/                 # Statische Assets
├── .next/                  # Next.js Build-Dateien
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

Die Homepage ist modular aus 9 Sektionen aufgebaut:

1. **HomeHero** - Header/Hero-Sektion
2. **HomeMarketOptimization** - Marktoptimierung
3. **HomeCompany** - Unternehmensvorstellung (mit Gradient-Hintergrund)
4. **HomeLocalization** - Lokalisierung
5. **HomeDatev** - DATEV Integration
6. **HomeCompliance** - Compliance/Rechtliches
7. **HomePartners** - Partner-Bereich
8. **HomeCta** - Call-to-Action
9. **Footer** - Seitenfuß

### Beispiel: HomeCompany Komponente
```tsx
// Implementiert als per CLAUDE.md Anweisung
- Gradient Hintergrund: var(--gradient-mid-to-sky)
- Zentrierter Content mit 80% Breite
- Navy Blue Text (#1e40af)
- Responsive Typografie (H2 + 2 Absätze)
```

## Seiten-Portfolio

**Hauptseiten (18 total):**
- Homepage (modularer Aufbau)
- Applications (Produktübersicht)
- Spezifische Produktseiten:
  - DATEV Schnittstelle
  - Reisekosten
  - Dunning (Mahnwesen)
  - Peak Ship
  - Lokalisierung Deutschland
  - Abwesenheitsverwaltung
- Service-Seiten:
  - Kontakt
  - Datenschutz
  - Impressum
- Test-Seiten:
  - UI Test
  - Typography Test
  - Colors Test

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
- **Next.js:** Minimal Config (Standard)
- **Tailwind:** Extensive Custom Config mit Design System
- **TypeScript:** Strict Mode aktiviert
- **ESLint:** Next.js Rules + Custom Rules

## Git-Historie

**Letzte Commits:**
- `2e9182f` - "löscchen" (Bereinigung)
- `097b218` - "home 4" (Homepage Updates)
- `7babc26` - "home 2" (Homepage Iteration)
- `abd2e2d` - "home bild verbesser" (Bildoptimierung)
- `4962744` - "new" (Neue Features)

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

## Status & Deployment

- **Entwicklungsstand:** Aktiv entwickelt
- **Branch:** main (sauber, keine uncommitted changes)
- **Deployment:** Vercel-ready (vercel.json vorhanden)
- **Domain:** altaviaapplications.com (in Metadata definiert)

## Fazit

Professionell strukturierte Next.js-Anwendung für eine NetSuite-Beratung mit:
- Sauberer Komponentenarchitektur
- Durchdachtem Design System
- Modularem Homepage-Aufbau
- Performance-optimierter Implementierung
- Vollständiger Corporate Identity Integration