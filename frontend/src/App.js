import Nav from './components/Nav';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<h1>Product Listing Component</h1>}></Route>
        <Route path='/add' element={<h1>Add Product Component</h1>}></Route>
        <Route path='/update' element={<h1>Update Product Component</h1>}></Route>
        <Route path='/logout' element={<h1>Logout</h1>}></Route>
        <Route path='/profile' element={<h1>Profile Component</h1>}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
