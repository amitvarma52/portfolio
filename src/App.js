import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from './Pages/layout/Layout';
import About from './Pages/About/About';
import Techstack from './Pages/Techstack/Techstack';
import Projects from './Pages/Projects/Projects';
function App() {
  return (
    <>  
    <Layout></Layout>
    <div className='container'>
    <About></About>
    <Techstack></Techstack>
    <Projects></Projects>
    </div>
    </>
  )
}

export default App;
