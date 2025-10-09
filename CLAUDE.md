- 09:46:46.412 Running build in Washington, D.C., USA (East) – iad1
09:46:46.413 Build machine configuration: 2 cores, 8 GB
09:46:46.442 Cloning github.com/Altavia-web/altaviaa.ai (Branch: main, Commit: 70cd659)
09:46:55.917 Cloning completed: 9.475s
09:46:56.248 Restored build cache from previous deployment (FcyabCY5rnCWfmAm2HWkQbTEPa14)
09:46:56.782 Running "vercel build"
09:46:57.189 Vercel CLI 48.2.9
09:46:58.718 Running "install" command: `npm install`...
09:47:00.141 
09:47:00.142 up to date, audited 339 packages in 1s
09:47:00.142 
09:47:00.142 139 packages are looking for funding
09:47:00.142   run `npm fund` for details
09:47:00.143 
09:47:00.143 found 0 vulnerabilities
09:47:00.170 Detected Next.js version: 15.5.3
09:47:00.171 Running "npm run build"
09:47:00.289 
09:47:00.289 > altiva-ai@0.1.0 build
09:47:00.289 > next build --turbopack
09:47:00.289 
09:47:01.428    ▲ Next.js 15.5.3 (Turbopack)
09:47:01.430    - Experiments (use with caution):
09:47:01.430      · optimizePackageImports
09:47:01.431 
09:47:01.513    Creating an optimized production build ...
09:47:14.041  ✓ Finished writing to disk in 26ms
09:47:14.073  ✓ Compiled successfully in 11.8s
09:47:14.079    Linting and checking validity of types ...
09:47:21.577 
09:47:21.579 Failed to compile.
09:47:21.579 
09:47:21.580 ./components/sections/dunning/DunningGrowthEN.tsx
09:47:21.580 18:25  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
09:47:21.580 18:125  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
09:47:21.580 
09:47:21.580 info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules
09:47:21.625 Error: Command "npm run build" exited with 1
- hh