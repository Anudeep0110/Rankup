import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './Components/Home';
import Sign from './Components/Sign';
import Login from './Components/Login';
import Profile from './Components/Profile'
import QodQuest from './Components/QodQuest';
import HostQs from './Components/HostQs';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<Sign/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/qofd' element={<QodQuest/>}></Route>
          <Route path='/hqs' element={<HostQs/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
