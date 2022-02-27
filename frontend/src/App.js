import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'


function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
