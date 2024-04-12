// pour faire des liens
import {Link} from "react-router-dom";
import '../../assets/styles/header.css'
// // get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons/faAmazon";



const Header = ()  =>{
  return (
    //  ici un exemple simplifie de la nav bar avec des liens , pense a mettres dans une liste
    //  react va gerer la conversion de Link en balise a de htmlz
    // <nav>
    //   <Link className="nav-item" to={"/"}>Accueil</Link>
    //   <Link className="nav-item"  to={"/Contact"}>Nous Contacter</Link>
    //   {/* <h1>header</h1> */}
    // </nav>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
  <li className="nav-item">
      <Link className="nav-link" to={"/"}>Accueil 
      <FontAwesomeIcon icon={faHome} />
      </Link>

      </li>
      <li className="nav-item">
         <Link className="nav-link"  to={"/Contact"}>Nous Contacter</Link>
      </li>
    
    </ul>
    

  </div>
</div>
</nav>
  )
}

export default Header;