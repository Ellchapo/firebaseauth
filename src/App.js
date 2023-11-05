
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import { useState,useEffect } from 'react';
import { auth } from './firebase';
function App() {
  const [userName,setUserName] = useState("");
   
  useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
       if(user){
            setUserName(user.displayName)
       }else{
            setUserName("");
       }
  })
  },[])
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Home name={userName}/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>  
        
      </Routes>
     </Router>
    </div>
  );
}

export default App;
