import './App.css';
import Navbar from './components/Navbar'
import ProductsList from './components/ProductsList';
import Slider from './components/Slider';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Prodetails from './components/Prodetails';
function App() {
  return (
    <div className="App">
      
      <>
      
      <Navbar/>

      <Routes>

<Route path='Home' element={<Home/>} />
<Route path='About' element={<About/>} />
<Route path='Contact' element={<Contact />} />
<Route path='product/:productId/:term' element={<Prodetails />} />




</Routes>

      <Slider/>
      <ProductsList/>
      </>
    </div>
  );
}

export default App;
