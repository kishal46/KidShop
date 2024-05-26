import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Login from './Components/Login';
import CustomNavbar from './Components/Navbar';
import Profile from './Components/Profile';
import Signup from './Components/Signup';
import Product from './Components/Product';
import Bot from './Home/Bot';
import Services from './Components/Service';
import Books from './Home/Books';
import Toys from './Home/Toys';
import SchoolSuplies from './Home/SchoolSuplies';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
      <div className="App">
        <Bot/>
        <CustomNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/purchase' element={<Product />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Services/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/books' element={<Books/>}></Route>
          <Route path='/schoolthinks' element={<SchoolSuplies/>} />
          <Route path='/toys' element={<Toys/>} />
        </Routes>
    </div>
  );
}

export default App;
