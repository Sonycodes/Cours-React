# Cours React
React c'est un framework front: 

Veilles: 

`PWA:` Une progressive web app est une application web qui consiste en des pages ou des sites web, et qui peuvent apparaître à l'utilisateur de la même manière que les applications natives ou les applications mobiles. 

`Typescript` est une sous couche de javascript: TypeScript est un langage de programmation libre et open source développé par Microsoft qui a pour but d'améliorer et de sécuriser la production de code JavaScript. 


Le rendu côté serveur d'une page web ou` Server Side Rendering (SSR)` est une technique de développement web qui consiste à créer les pages html côté serveur pour les envoyer toutes faites au navigateur. 

Creer un nouvel app:

- npx create-react-app my-app

## Utilisation images en react

  - dans react tout est un composant même les images
  - avec jsx on peut utiliser lapin directement

  on importe l'image avant de l'utiliser 

- import lapin from "../../assets/images/lapin.jpg";

   lapin qui tourne, car on utilise la librairie de react qui a deja un style pour le app-logo
- <img src={lapin} height="300" className="App-logo" ></img>

### React router - router-dom
 

Browser router :

React Router est une bibliothèque pour les applications React qui permet de gérer le routage de manière dynamique. En d’autres termes, il aide à naviguer entre différentes pages ou composants dans une application sans avoir à recharger la page entière.

- installation router-dom:  npm install react-router-dom

## creation de routes

* Dans le fichier App.js on va créeer nous routes cad nous chemins d'accès, il sera à l'intérieur de la balise main

Ex: 

// import {Routes, Route} from "react-router-dom"; 
//import Home from "./components/Home";
//import Business from "./components/Business";


// <Routes>
<!-- prend en parametre le chemin et le composant qu'on veut rendre -->
// <Route path="/" element = {<Home/>}/>
// <Route path="/Contact" element = {<Contact/>}/>
// </Routes>

"react-router-dom" est une version de React Router spécialement conçue pour les applications web.

// regarder ce que c'est props: c'est les propriétés

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


## Creation boucle

La méthode .map(), est le moyen par défaut de boucler sur un tableau et de renvoyer un élément JSX valide contenant les données de chaque élément du tableau.     

{data.map(person => <p key={person.name}>{`${person.name}, ${person.age} years old`}</p>)}


Key : chaque élément créé à l’aide de la méthode .map() doit avoir un identifiant key, défini sur une valeur unique. 

<p key={person.name}>{}</p>)

  {/* dans react on ne peut pas utiliser mao comme un tableau on doit lui dire de retourner une liste d'intance à partir d'un tableau de données */}
      {/* {Personnage.map(
         (el, index) => key={index} nom={el.nom} img={el.img} equipe={el.equipage}  */}
    {/* )} */}



 ## Les hook = cycles de vie

 https://www.youtube.com/watch?v=MQ5K-VLXW_o 

Chaque composant React suit le même cycle de vie : Un composant est monté lorsqu'il est ajouté à l'écran. Un composant se met à jour quand il reçoit de nouvelles props ou variables d'état, généralement à la suite d'une interaction. Un composant est démonté quand il est retiré de l'écran.


1. **Montage (Mounting)** :
   - **constructor()** : Le premier appel dans le cycle de vie. Il est utilisé pour initialiser l'état et lier les méthodes.
   - **render()** : Cette méthode retourne l'élément React à rendre.
   - **componentDidMount()** : Appelé après que le composant a été rendu dans le DOM. C'est l'endroit où vous pouvez effectuer des appels à des API externes ou à des mises à jour d'état qui nécessitent l'accès au DOM.

2. **Mise à jour (Updating)** :
   - **render()** : La méthode `render()` est à nouveau appelée à chaque mise à jour de l'état ou des propriétés du composant.
   - **componentDidUpdate()** : Appelé après que le rendu a été effectué à chaque mise à jour. Il est utilisé pour effectuer des actions après que le composant a été mis à jour dans le DOM.

3. **Démontage (Unmounting)** :
   - **componentWillUnmount()** : Appelé juste avant que le composant ne soit retiré du DOM. C'est l'endroit où vous nettoyez les ressources telles que les abonnements aux événements ou les requêtes API.

Ces phases constituent le cycle de vie d'un composant React, qui est essentiel pour comprendre comment les composants réagissent aux changements et aux événements. Avec l'introduction des hooks dans React, ces cycles de vie sont également disponibles dans les composants fonctionnels via des hooks comme `useEffect`


## utilisation vite

* Vite est un outil de construction qui vise à fournir une expérience de développement plus rapide et plus légère pour les projets web modernes.


- npm create vite@latest
