Projet e-commerce 

Vite Project
Ce projet utilise Vite pour une configuration rapide et efficace de React avec le support du Hot Module Replacement (HMR). Il est configuré avec des outils modernes pour le développement, le linting et la gestion des dépendances.

Contenu:

. React pour la construction des interfaces utilisateur.
. Vite comme outil de construction et de développement.
. Tailwind CSS pour les styles.
. ESLint pour le linting du code.
. Redux Toolkit pour la gestion des états.
. Ant Design et Material Tailwind pour les composants UI.
. Firebase pour implementé les fonctionnalités y compris l'authentification.

# React + Vite

Ce modèle fournit une configuration minimale pour faire fonctionner React avec Vite, avec HMR et certaines règles ESLint.

Actuellement, deux plugins officiels sont disponibles :

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) Pour le Rechargement rapide
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) Pour le Rechargement rapide


-Prérequis:
Assurez-vous d'avoir Node.js installé sur votre machine.

Installation
Clonez le dépôt :

bash:
git clone <URL_DU_DEPÔT_CLONÉ>
cd <NOM_DU_REPERTOIRE_DE_VOTRE_PROJET>
Installez les dépendances :

bash:
npm install


Démarrer le serveur de développement :

bash
npm run dev

Documentation React js:
(https://react.dev/learn)

* Si vous voulez changer et ne pas utilisé ma configuration Firebase:
. Pour se Connecter en tant qu'administrateur l'email est : admin@gmail.com
et le Password est admin123.
(https://samuelbankole.medium.com/google-firebase-in-react-1acc64516788)
. Vous devez en plus créer un utilisateur avec le role admin dans Firebase.

* Fonctionnalités

Pages et Formulaires
. Page d'information produit
. Page du panier (Cart)
. Page de tous les produits 
. Page de connexion et d'inscription 
. Page du tableau de bord utilisateur 
. Page du tableau de bord administrateur
. Fonctionnalités d'inscription et de connexion 


Gestion des Produits:

. Fonction d'ajout de produit par l'admin
. Affichage des produits sur le tableau de bord administrateur 
. Fonction de mise à jour des produits par l'admin
. Fonction de suppression des produits parl'admin
. Affichage des produits sur la page d'accueil 
. Affichage de tous les produits 
. Affichage d'un produit spécifique sur la page d'information produit 
. Page des catégories afichés predefinis

Gestion d'État du Panier et achat:

. Fonction d'ajout au panier dans la carte produit 
. Affichage des articles du panier sur la page du panier 
. Fonction d'ajout au panier sur la page d'information produit 
. Fonction de paiement "Acheter maintenant" 

Gestion des Commandes et Utilisateurs:

. Affichage des commandes sur le tableau de bord utilisateur 
. Affichage des commandes sur le tableau de bord administrateur 
. Fonction de suppression des commandes 
. Affichage des détails utilisateur sur le tableau de bord administrateur 
. Fonction de recherche

