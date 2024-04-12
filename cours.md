# Cours React

Creer un nouvel app:

- npx create-react-app my-app

## Utilisation images en react

  - dans react tout est un composant même les images
  - avec jsx on peut utiliser lapin directement

  on importe l'image avant de l'utiliser 

- import lapin from "../../assets/images/lapin.jpg";

   lapin qui tourne, car on utilise la librairie de react qui a deja un style pour le app-logo
- <img src={lapin} height="300" className="App-logo" ></img>

# React router - router-dom
 

browser router :

React Router est une bibliothèque pour les applications React qui permet de gérer le routage de manière dynamique. En d’autres termes, il aide à naviguer entre différentes pages ou composants dans une application sans avoir à recharger la page entière.

- installation router-dom:  npm install react-router-dom

## creation de routes

* Dans le fichier App.js on va créeer nous routes cad nous chemins d'accès, il sera à l'intérieur de la balise main

Ex: 

// import {Routes, Route} from "react-router-dom"; 

// <Routes>
// <Route path="/" element = {<Home/>}/>
// <Route path="/Contact" element = {<Contact/>}/>
// </Routes>

"react-router-dom" est une version de React Router spécialement conçue pour les applications web.

// regarder ce que c'est props

- a propos des titres on peut appliquer des styles dans un même dossier car c'est considere comme prarents enfats. au sein du même composant. un peu flou a revoir

## Installer Bootstrap

Au niveau de terminal du dossier de notre app:

installation bootstrap: npm i bootstrap@5.3.3

- npm install react-bootstrap bootstrap

## Installer fontAwesome

intaller fontawesome: https://docs.fontawesome.com/web/use-with/react/

Dans le terminal à l'intérieur du dossier de notre application

1. on doit d'abord installer le core de fontAwesome qui permet d'utiliser les images svg sans utiliser les bases i et svg:

- npm i --save @fortawesome/fontawesome-svg-core

2. On va ensuite installer le package des icones qu'on veut utiliser, ici on va intaller les gratuites en solid, brand etc:

- npm i --save @fortawesome/free-solid-svg-icons
- npm i --save @fortawesome/free-regular-svg-icons
- npm i --save @fortawesome/free-brands-svg-icons

Enfin on installe le composant :

- npm i --save @fortawesome/react-fontawesome@latest

### Pour l'utiliser

on importe fontawesome et l'icone qu'on veut utiliser dans le ficher ou on veut l'afficher, ici on le place dans header.js

- import { faHome } from "@fortawesome/free-solid-svg-icons";
- import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

puis on le place dans une balise fontawesomeicon: 
// <FontAwesomeIcon icon={faHome} />

    //  ici un exemple simplifie de la nav bar avec des liens , pense a mettres dans une liste
    //  react va gerer la conversion de Link en balise a de htmlz
    // <nav>
    //   <Link className="nav-item" to={"/"}>Accueil</Link>
    //   <Link className="nav-item"  to={"/Contact"}>Nous Contacter</Link>
    //   {/* <h1>header</h1> */}
    // </nav>
