import Footer from "./Footer";
import Header from "./Header";


// composant avec header et footer 
// regarder comment children marche
const index = ({children}) => {
  // Utilisation de l'état et d'autres hooks React ici
  return (
    <>
    <Header/>
   {children}
    <Footer/>
    </>
  );
};

export default index;