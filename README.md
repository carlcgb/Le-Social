<div align="center">

# 🍷 Le Social - Site Web Élégant

**Un lieu d'exception, pensé pour s'accorder à chaque occasion**

[![Deploy to Cloudflare Pages](https://github.com/carlcgb/Le-Social/workflows/Deploy%20to%20Cloudflare%20Pages/badge.svg)](https://github.com/carlcgb/Le-Social/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3.1-61dafb.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8.svg)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-4.21.1-000000.svg)](https://expressjs.com/)

</div>

---

## 📋 Table des matières

- [À propos](#-à-propos)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies](#-technologies)
- [Structure du projet](#-structure-du-projet)
- [Installation](#-installation)
- [Développement](#-développement)
- [Build et déploiement](#-build-et-déploiement)
- [Configuration](#-configuration)
- [Architecture](#-architecture)
- [Contribuer](#-contribuer)

---

## 🎯 À propos

**Le Social** est une application web moderne et élégante conçue pour présenter un lieu d'exception offrant trois expériences uniques :

- 🎭 **Volet Spectacles** - Des spectacles intimistes dans une ambiance feutrée
- 🎉 **Événements Privés** - Pour vos moments les plus précieux
- 💼 **Volet Corporatif** - Transformez vos événements professionnels en expériences mémorables

Le site présente une interface sophistiquée avec des effets visuels raffinés, une navigation fluide et une expérience utilisateur optimale.

---

## ✨ Fonctionnalités

- ✨ **Interface moderne** avec animations Framer Motion
- 🎨 **Design élégant** avec Tailwind CSS et effets de blur
- 📱 **Responsive design** pour tous les appareils
- 🚀 **Performance optimale** avec esbuild
- 🔄 **Déploiement automatique** via GitHub Actions vers Cloudflare Pages
- 📝 **Formulaire de contact** avec validation Zod
- 🎯 **Navigation fluide** avec routing côté client
- 🖼️ **Gestion d'assets** optimisée

---

## 🛠️ Technologies

### Frontend
- **React 18.3.1** - Bibliothèque UI
- **TypeScript 5.6.3** - Typage statique
- **Tailwind CSS 3.4.17** - Framework CSS utilitaire
- **Framer Motion 11.13.1** - Animations fluides
- **Radix UI** - Composants accessibles
- **React Hook Form** - Gestion de formulaires
- **Zod** - Validation de schémas
- **TanStack Query** - Gestion de données

### Backend
- **Express 4.21.1** - Framework Node.js
- **Node.js 18+** - Runtime JavaScript

### Build & Déploiement
- **esbuild** - Bundler ultra-rapide
- **GitHub Actions** - CI/CD
- **Cloudflare Pages** - Hosting et CDN

---

## 📁 Structure du projet

```
Le-Social/
├── assets/              # Assets statiques (images, GIFs)
├── build/               # Fichiers de build (générés)
│   ├── index.js        # Serveur Express bundlé
│   └── public/         # Application React compilée
├── client/              # Application frontend React
│   ├── index.html      # Point d'entrée HTML
│   └── src/
│       ├── components/ # Composants React
│       │   ├── ui/     # Composants UI de base (Radix)
│       │   └── ...     # Composants spécifiques
│       ├── hooks/      # Hooks React personnalisés
│       ├── lib/        # Utilitaires et configuration
│       ├── pages/      # Pages de l'application
│       ├── App.tsx     # Composant racine
│       ├── main.tsx    # Point d'entrée React
│       └── index.css   # Styles globaux
├── server/              # Backend Express
│   ├── index.ts        # Point d'entrée serveur
│   ├── routes.ts       # Configuration des routes
│   └── static.ts       # Service de fichiers statiques
├── shared/              # Code partagé frontend/backend
│   └── schema.ts       # Schémas Zod
├── scripts/             # Scripts de build
│   └── build.js        # Script de build client
├── .github/
│   └── workflows/      # GitHub Actions workflows
├── package.json         # Dépendances et scripts
├── tsconfig.json        # Configuration TypeScript
└── tailwind.config.ts  # Configuration Tailwind
```

---

## 🚀 Installation

### Prérequis
- **Node.js** 18 ou supérieur
- **npm** ou **yarn**

### Étapes

1. **Cloner le dépôt**
```bash
git clone https://github.com/carlcgb/Le-Social.git
cd Le-Social
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Construire le projet**
```bash
npm run build
```

4. **Démarrer le serveur**
```bash
npm start
```

L'application sera disponible sur [http://localhost:3000](http://localhost:3000)

---

## 💻 Développement

### Mode développement

```bash
npm run dev
```

Le serveur de développement démarre avec rechargement automatique.

### Vérification TypeScript

```bash
npm run check
```

### Scripts disponibles

| Script | Description |
|--------|-------------|
| `npm run dev` | Démarre le serveur de développement |
| `npm run build` | Construit l'application pour la production |
| `npm start` | Démarre le serveur de production |
| `npm run check` | Vérifie les types TypeScript |

---

## 🏗️ Build et déploiement

### Build manuel

```bash
npm run build
```

Cette commande :
1. Compile l'application React avec esbuild
2. Traite les styles CSS avec Tailwind et PostCSS
3. Copie les assets dans `build/public/assets/`
4. Bundle le serveur Express dans `build/index.js`

### Déploiement automatique

Le projet est configuré avec **GitHub Actions** pour un déploiement automatique vers **Cloudflare Pages** lors de chaque push sur la branche `main`.

**Workflow :** `.github/workflows/deploy-cloudflare.yml`

#### Configuration requise

Ajoutez ces secrets dans les paramètres GitHub du dépôt :

1. **CLOUDFLARE_API_TOKEN**
   - Obtenez-le sur [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
   - Permissions : `Account > Cloudflare Pages > Edit`

2. **CLOUDFLARE_ACCOUNT_ID**
   - Trouvez-le dans votre [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Visible dans la barre latérale droite

---

## ⚙️ Configuration

### Variables d'environnement

| Variable | Description | Valeur par défaut |
|----------|-------------|-------------------|
| `NODE_ENV` | Environnement (development/production) | `production` |
| `PORT` | Port du serveur | `3000` |
| `API_BASE_URL` | URL de l'API backend | `https://le-social-api.carl-g-bisaillon.workers.dev` |
| `RESEND_API_KEY` | Clé API Resend pour l'envoi d'emails | *(requis pour l'envoi d'emails)* |
| `EMAIL_FROM` | Adresse email expéditeur | `Le Social <onboarding@resend.dev>` |

#### Configuration de l'email (Resend)

Le formulaire de réservation envoie des emails via [Resend](https://resend.com), un service d'email moderne et fiable.

**Pour configurer :**

1. Créez un compte gratuit sur [resend.com](https://resend.com) (100 emails/jour, 3,000/mois)
2. Obtenez votre clé API dans [les paramètres](https://resend.com/api-keys)
3. Ajoutez-la à vos variables d'environnement :
   ```bash
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   EMAIL_FROM="Le Social <noreply@socialbar.ca>"
   ```

**Note :** En développement, si `RESEND_API_KEY` n'est pas configuré, le formulaire fonctionnera mais l'email ne sera pas envoyé (utile pour tester sans configurer l'email).

### Alias de chemins

Le projet utilise des alias pour simplifier les imports :

- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `assets/*`

**Exemple :**
```typescript
import Logo from "@/components/navigation";
import { InsertReservation } from "@shared/schema";
import image from "@assets/logo.png";
```

---

## 🏛️ Architecture

### Frontend

- **React Router** : Utilise `wouter` pour la navigation
- **State Management** : React Query pour la gestion des données
- **Styling** : Tailwind CSS avec classes personnalisées
- **Animations** : Framer Motion pour les transitions
- **Formulaires** : React Hook Form + Zod pour la validation

### Backend

- **Express.js** : Serveur HTTP
- **Static Serving** : Service des fichiers statiques depuis `build/public`
- **API Routes** : Configuration dans `server/routes.ts`

### Build System

- **esbuild** : Bundler ultra-rapide
- **PostCSS** : Traitement CSS avec Tailwind et Autoprefixer
- **Asset Pipeline** : Copie automatique des assets

---

## 📝 Notes importantes

### Assets

- Les assets doivent être placés dans le dossier `assets/`
- Ils sont automatiquement copiés dans `build/public/assets/` lors du build
- Utilisez l'alias `@assets/*` pour les importer dans vos composants

### Styles

- Les styles globaux sont dans `client/src/index.css`
- Tailwind est configuré dans `tailwind.config.ts`
- Les composants UI utilisent Radix UI avec styles Tailwind

### Performance

- Le build utilise `esbuild` pour une compilation ultra-rapide
- Les assets sont optimisés et copiés lors du build
- Le code est minifié en production

---

## 🤝 Contribuer

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** le projet
2. Créez une **branche** pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. **Commitez** vos changements (`git commit -m 'Add some AmazingFeature'`)
4. **Pushez** vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une **Pull Request**

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

## 👥 Auteur

**Par Attelier Archibald**

---

<div align="center">

**[⬆ Retour en haut](#-le-social---site-web-élégant)**

Fait avec ❤️ pour Le Social

</div>

