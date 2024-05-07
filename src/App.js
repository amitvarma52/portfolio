import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from './Pages/layout/Layout';
import About from './Pages/About/About';
import Techstack from './Pages/Techstack/Techstack';
function App() {
  return (
    <>  
    <Layout></Layout>
    <div className='container'>
    <About></About>
    <Techstack></Techstack>
    </div>
    </>
  )
}

export default App;
