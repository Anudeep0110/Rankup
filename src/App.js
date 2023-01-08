import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Profile from './Components/Profile'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
