import logo from './logo.svg';
// on va importer le css de la 
import './App.css';
// import lapin from './assets/images/lapin.jpg'
import {Routes, Route} from "react-router-dom";
// 
import Home from "./components/Home";
import Business from "./components/Business";
import Service from "./components/Service";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="App">

<Routes>
  <Route path="/" element = {<Home/>}/>
  <Route path="/Business" element = {<Business/>}/>
  <Route path="/Service" element = {<Service/>}/>
  <Route path="/Blog" element = {<Blog/>}/>
  <Route path="/Contact" element = {<Contact/>}/>

</Routes>


    </main>
  );
}

export default App;
