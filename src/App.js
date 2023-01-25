
import './App.scss';
import {Routes,Route,useLocation} from "react-router-dom"
import Home from "./containers/home/Home"
import About from './containers/about/About';
import Resume from "./containers/resume/Resume"
import Contact from './containers/contact/Contact';
import Skills from "./containers/skills/Skills";
import Portfolio from "./containers/portfolio/Portfolio"
import Navbar from './components/navbar/Navbar';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import particles from './utils/particles';
function App() {
   const location = useLocation();
   console.log(location);

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticleJsInHomePage = location.pathname === "/";
  return (
    
    <div className="App">
      {renderParticleJsInHomePage &&
      <Particles id="particles" options={particles} init={handleInit}  />
      
      }
     
      <Navbar/>
      <div className="App__main-page-content">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
      </div>
    
    
 
  );
}

export default App;
