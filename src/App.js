import logo from './logo.svg';
import './App.css';
import Navbar from './Page/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Footer from './Page/Footer/Footer';
import Featured from './Page/Featured/Featured';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/courses' element={<Featured></Featured>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
