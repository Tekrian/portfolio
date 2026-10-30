# Portfolio — Briand Kokou TETEH (v2)

Portfolio une seule page en HTML, CSS et JavaScript natif (aucun framework).

## Architecture

```
portfolio-bt/
├── index.html              ← squelette : en-tête, emplacements des sections, pied de page
├── README.md
├── sections/               ← une page HTML par section
│   ├── accueil.html
│   ├── apropos.html
│   ├── parcours.html
│   ├── competences.html
│   ├── projets.html
│   └── contact.html
├── css/                    ← un fichier CSS par partie
│   ├── base.css            ← couleurs (:root), typo, boutons, animations
│   ├── header.css          ← logo BT, menu, bouton FR/EN
│   ├── accueil.css
│   ├── apropos.css
│   ├── parcours.css
│   ├── competences.css
│   ├── projets.css
│   ├── contact.css
│   ├── footer.css
│   └── responsive.css      ← tablette / mobile (chargé en dernier)
├── js/                     ← un fichier JS par fonctionnalité
│   ├── i18n.js             ← textes anglais
│   ├── loader.js           ← insère les fichiers de sections/ dans index.html
│   ├── lang.js             ← bascule FR / EN
│   ├── nav.js              ← menu mobile, lien actif, barre de progression
│   ├── animations.js       ← apparition au défilement, images manquantes
│   ├── projets.js          ← filtres des projets
│   ├── contact.js          ← formulaire (ouvre l'application mail)
│   ├── cv.js               ← affiche les boutons CV seulement si le PDF existe
│   └── main.js             ← point d'entrée : charge les sections puis lance le reste
└── assets/
    ├── img/                ← favicon.svg + tes images
    └── cv/                 ← ton CV : CV-Briand-TETEH.pdf
```

Les sections restent des fichiers séparés, mais elles sont affichées les unes sous les autres dans une seule page : le menu fait défiler jusqu'à chacune.

## Images à copier dans `assets/img/`

Reprends les fichiers de ton ancien dépôt, avec exactement ces noms :

- `tux.svg`
- `ma_photo.png.jpeg`
- `logo_langage_C.png`, `Cplusplus.jpg`, `logo_PostgreSQL.png`, `python-logo.png`, `Bootstrap-Framework-Logo.png`, `qt-logo.svg`
- `biblio_num.png`, `algos.png`, `dual_Boot.png`, `site_BUT_image.png`, `arduino.png`

Si une image manque, la page affiche un fond propre à la place (pas d'icône cassée).

**Photo de profil** : à déposer sous le nom `ma_photo.png.jpeg` (ou change le nom dans `sections/apropos.html`). De préférence une photo verticale (portrait), visage dans le tiers haut. Le cadrage garde automatiquement le haut de l'image.

## CV

Dépose ton CV dans `assets/cv/` sous le nom exact **`CV-Briand-TETEH.pdf`**. Les boutons « Télécharger mon CV » (accueil et contact) apparaissent alors tout seuls ; sans le fichier, ils restent cachés.

## Modifier le contenu

- **Texte français** : dans le fichier de la section concernée (`sections/...html`).
- **Texte anglais** : dans `js/i18n.js`, même clé que l'attribut `data-i18n` de l'élément.
- **Ajouter un projet** : un modèle commenté est en haut de `sections/projets.html`. Copie-le, donne-lui `data-cat="soft"`, `"web"` ou `"sys"`, remplis-le, puis ajoute ses traductions dans `i18n.js`. Les boutons « Voir le site » / « Voir le code » sont facultatifs.
- **Couleurs** : variables `--accent`, `--bg`, etc. en haut de `css/base.css`.
- **Ajouter une section** : créer `sections/nom.html` (avec `<section id="nom">`), ajouter `<div data-section="nom"></div>` dans `index.html` et un lien `#nom` dans le menu.

## Stage

La période de stage (29 mars → 18 juin 2027) apparaît à 4 endroits : badge de l'accueil (`sections/accueil.html`), photo (`sections/apropos.html`), parcours (`sections/parcours.html`) et contact (`sections/contact.html`), plus leurs traductions dans `js/i18n.js` (clés `hero.status`, `about.tag`, `path.1n`, `contact.p`). Une fois ton stage trouvé, mets-les à jour.

## Navigation

Les liens du menu sont des ancres internes (`#apropos`, `#projets`…) : un clic fait défiler la page en douceur jusqu'à la section, et le lien de la section visible s'allume automatiquement.

## Formulaire de contact

Le bouton ouvre l'application mail du visiteur avec le message pré-rempli vers `tetehbriand@gmail.com`. Aucun service externe, aucune donnée stockée.

## Tester en local

⚠️ Les sections étant chargées depuis des fichiers séparés, un double-clic sur `index.html` ne suffit pas (le navigateur bloque le chargement). Utilise un petit serveur local :

- VS Code → extension **Live Server** → clic droit sur `index.html` → *Open with Live Server* ;
- ou dans un terminal, dans le dossier : `python -m http.server` puis http://localhost:8000

Sur Vercel, ça fonctionne directement.

## Mettre en ligne

Créer un **nouveau** dépôt GitHub avec ce dossier, puis l'importer dans Vercel comme un nouveau projet (Framework : *Other*, aucune commande de build). L'ancien site reste intact.
