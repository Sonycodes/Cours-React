import { useState } from "react";
import chopper from "../../assets/images/chopper.jpg";
import luffy from "../../assets/images/luffy.jpg";
import nami from "../../assets/images/nami.jpg";
import nico from "../../assets/images/nico.jpg";
import sanji from "../../assets/images/sanji.jpg";
import usopp from "../../assets/images/usopp.jpg";
import zoro from "../../assets/images/zoro.jpg";
import Personnage from "./Personnage";

const Equipe = () => {
  const [perso, setPerso] = useState([
    // pour les images on est deja dans l'objet donc on veut que l'import
    { nom: "chopper", img: chopper, equipage: "Chappeau de paille" },
    { nom: "luffy", img: luffy, equipage: "Chappeau de paille" },
    { nom: "nami", img: nami, equipage: "Chappeau de paille" },
    { nom: "nico", img: nico, equipage: "Chappeau de paille" },
    { nom: "sanji", img: sanji, equipage: "Chappeau de paille" },
    { nom: "usopp", img: usopp, equipage: "Chappeau de paille" },
    { nom: "zoro", img: zoro, equipage: "Chapeau de paille" },
  ]);
  return (
    <div className="container">
      <h2>Notre équipage: </h2>

      {/* ici on récupére l'objet a l'index 0 pour l'afficher */}

      {/* <Personnage
        nom={perso[0].nom}
        img={perso[0].img}
        equipe={perso[0].equipage}
      /> */}

      ,
      
      {/* ici je veux afficher plusieurs intances de cet object */}

      {/* {pokemons.map(
    (el, index) => <li key={index}>{el.nom}
        <button onClick={() => handleClick(el.id)}>-</button>
    </li>
)} */}
      <div className="d-flex flex-wrap justify-content-center justify-content-lg-between">
        {perso.map((el, index) => (
          // encadrer car c'est du jsx
          <Personnage
        //   chaque enfant doit avoir une clé unique
            key={index}
            nom={el.nom}
            img={el.img}
            equipe={el.equipage}
          />
        ))}
      </div>
    </div>
  );
};

export default Equipe;

// La méthode .map(), est le moyen par défaut de boucler sur un tableau et de renvoyer un élément JSX valide contenant les données de chaque élément du tableau.     {data.map(person => <p key={person.name}>{`${person.name}, ${person.age} years old`}</p>)}

// Key : chaque élément créé à l’aide de la méthode .map() doit avoir un identifiant key, défini sur une valeur unique. <p key={person.name}>{}</p>)
