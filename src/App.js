import Navbar from "./components/Navbar";
import {FaBars,FaTimes} from "react-icons/fa";
import Home from './components/Home';
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from './components/Experience';
import Contact from "./components/Contact";
import Education from "./components/Education";

function App() {
  
  return (
 <div>
  <Navbar/>
  <Home/>
  <SocialLinks/>
  <About/>
  <Education/>
  <Portfolio/>
   <Experience/> 
 <Contact/>
 </div>

  );
}

export default App;
