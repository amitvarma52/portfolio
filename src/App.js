import { useTheme } from "./context/ThemeContext";
import ScrollToTop from "react-scroll-to-top";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from './Pages/layout/Layout';
import About from './Pages/About/About';
import Techstack from './Pages/Techstack/Techstack';
import Projects from './Pages/Projects/Projects';
import Education from './Pages/Education/Education';
import Contact from './Pages/Contact/Contact';
function App() {
const [theme]=useTheme()
  return (
    <>
    <div id={theme} >  
    <Layout></Layout>
    <div className='container'>
    <About></About>
    <Education></Education>
    <Techstack></Techstack>
    <Projects></Projects>
    <Contact></Contact>
    </div>
    <footer className='footer pb-3 ms-3'>
      <h4 className='text-center'>Made with ❤ by - &#169; Amit varma</h4>
    </footer>
    </div>
    <ScrollToTop smooth />
    </>
  )
}

export default App;
