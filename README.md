# Portfolio — Serigne Cheikh Ahmet Tidiane Sy Thioune
Application Angular 17 (standalone components).

## Structure
```
src/
├── app/
│   ├── app.component.ts          ← Root component
│   └── components/
│       ├── navbar/               ← Navigation sticky avec scroll detection
│       ├── hero/                 ← Section d'accueil
│       ├── about/                ← À propos + fiches infos
│       ├── skills/               ← Grille de compétences techniques
│       ├── projects/             ← Carte projets avec accent couleur
│       ├── experience/           ← Timeline parcours & formation
│       ├── contact/              ← Formulaire + liens
│       └── footer/               ← Pied de page
├── index.html
├── main.ts
└── styles.css                    ← Variables CSS globales + reset
```

## Démarrage rapide
```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
ng serve

# 3. Ouvrir http://localhost:4200
```

## Build production
```bash
ng build
# Fichiers générés dans dist/portfolio-serigne/
```

## Personnalisation
- **Email / GitHub / LinkedIn** → `src/app/components/contact/contact.component.ts`
- **Projets** → `src/app/components/projects/projects.component.ts`
- **Compétences** → `src/app/components/skills/skills.component.ts`
- **Couleurs** → variables CSS dans `src/styles.css` (`:root`)
- **Formulaire de contact** → intégrer Formspree, EmailJS ou un backend Spring Boot dans `onSubmit()`

## Technologies
- Angular 17 (Standalone Components)
- FormsModule (template-driven form)
- CSS custom properties (dark navy + gold)
- Google Fonts : Playfair Display + Source Sans 3
