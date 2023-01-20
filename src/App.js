import logo from './logo.svg';
import './App.css';
import Navbar from './Page/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
