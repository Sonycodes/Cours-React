// on va utiliser ici le destructuring pour recuperer les valeurs de l'objet personnage
const Personnage= ({nom,img,equipe}) => {
    return (
        <div className="card mt-2" style={{width: "18rem"}}>
        <img src={img}className="card-img-top" alt={"avis de recherche de" + nom}/>
          <div className="card-body">
            <h5 className="card-title">{nom}</h5>
            <p className="card-text">{equipe}</p>
          </div>
        </div>
        
    );
  }
  
  export default Personnage;
  