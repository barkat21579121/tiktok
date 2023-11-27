import './App.css';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import Home from './components/home/Home';  
import SignIn from './components/SignUp/signIn';
import MainNav from './components/mainNavbar/MainNav';
import Profile from './components/profile/Profile';
// import EditProfile from './components/edirprofile/EditProfile';


function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/signUp' element={<SignIn/>}/>
  <Route path='main' element={<MainNav/>}/>
  <Route path='main/profile' element={<Profile/>}/>
  {/* <Route path='dummy' element={<EditProfile/>}/> */}



 </Routes>
 </BrowserRouter>
  );
}

export default App;
