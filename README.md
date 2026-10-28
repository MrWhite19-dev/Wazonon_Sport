# Wazonon Sport Center — mini-site vitrine front-end uniquement

## Fichiers du projet
- `index.html` : page d’accueil
- `services.html` : page des services
- `rendez-vous.html` : formulaire de demande de visite / renseignements
- `assets/css/style.css` : design responsive
- `assets/js/config.js` : coordonnées et horaires centralisés
- `assets/js/main.js` : menu mobile, animations et formulaire WhatsApp
- `assets/images/` : emplacement pour les images locales autorisées

## Important
Cette version utilise uniquement **HTML5, CSS3 et JavaScript natif**. Elle ne contient aucun code PHP, aucune base de données MySQL et aucun backend.

## Lancer le site
1. Extraire le ZIP.
2. Ouvrir le dossier `wazonon_sport_center`.
3. Double-cliquer sur `index.html` pour ouvrir le site dans un navigateur récent.
4. Une connexion Internet est nécessaire pour charger les images Unsplash et la police Google Fonts.
5. Pour tester avec un serveur local, ouvrir un terminal dans le dossier du projet puis lancer `python -m http.server 8000`, et ouvrir `http://localhost:8000`.

## Modifier les coordonnées
Ouvrir `assets/js/config.js`. Le numéro de téléphone affiché vient des informations fournies. Le numéro WhatsApp officiel n’a pas été inventé et reste vide. Pour activer les liens WhatsApp, renseigner `whatsapp` avec le numéro international vérifié, sans `+`, espaces ni ponctuation.

## Informations à confirmer par l’établissement
- Numéro WhatsApp officiel
- Adresse détaillée et repère d’accès
- Horaires du dimanche et jours fériés
- Liste officielle des prestations et tarifs
- E-mail, logo officiel et liens de réseaux sociaux
- Autorisation d’utiliser des photos réelles du centre

Les images du site sont des illustrations du secteur sportif, pas des photos garanties du centre. Aucun tarif, avis client ou certification n’est inventé.

## Fonctionnement du formulaire
Le formulaire vérifie les champs dans le navigateur puis prépare un message personnalisé que le visiteur peut relire et envoyer dans WhatsApp. L’ouverture de WhatsApp ne confirme pas un rendez-vous. Si le numéro WhatsApp n’est pas configuré, le formulaire affiche une explication et le visiteur peut appeler le numéro affiché.

Le formulaire ne stocke pas les demandes : cette version est entièrement front-end.

## Vérifications effectuées
- Présence des trois pages HTML et des fichiers CSS/JavaScript communs.
- Vérification statique des liens locaux et des champs du formulaire.
- Menu mobile avec attributs ARIA.
- Formulaire avec contraintes HTML et génération de message WhatsApp.
- Respect de `prefers-reduced-motion` et solution de repli si `backdrop-filter` n’est pas disponible.

Les tests complets dans plusieurs navigateurs et sur des appareils physiques restent à effectuer.
