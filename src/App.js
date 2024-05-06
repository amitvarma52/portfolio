import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from './Pages/layout/Layout';
import About from './Pages/About/About';
function App() {
  return (
    <>  
    <Layout></Layout>
    <div className='container'>
    <About></About>
    </div>
    </>
  )
}

export default App;
