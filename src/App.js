import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/User/Login/Login';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Home/Footer';
import Appoinment from './Pages/Appoinment/Appoinment';
import SignUp from './Pages/User/Signup/Signup';
import RequireAuth from './Pages/User/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appoinment' element={
          <RequireAuth>
            <Appoinment></Appoinment>
          </RequireAuth>
        }></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
