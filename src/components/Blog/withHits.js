import React, { useState } from "react";

const withHits = (PersonageComponent) => {
    return (props) => {
        const [hits, setHits] = useState(0);
        const [life, setLife] = useState({ Zoro: 100, Arlong: 100 });

        const countHits = () => {
            setHits(hits + 1);
        };
   
        const countLoss = (param) => {
            // Créer une copie de l'objet life
            const updatedLife = { ...life };
            // Décrémenter la vie en fonction du paramètre
            updatedLife[param] -= 10;
            // Mettre à jour l'état life avec la nouvelle valeur
            setLife(updatedLife);
        };

        // Nous passons la fonction countHits et l'état hits au composant enveloppé
        return <PersonageComponent countHits={countHits} hits={hits} life={life} countLoss={countLoss} {...props} />;
    };
};

export default withHits;
