import React from 'react'
import './Login.css'
import Input from '../components/Input/Input'
import { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import { auth } from '../firebase';
import {signInWithEmailAndPassword} from "firebase/auth";
export default function Login() {
  
  const [login,setLogin] = useState({
    email:"",pas:""

  })

  const [errorMsg,setErrorMsg] = useState("");
  const [submitButton,setSubmitButton] = useState(false);
  const navigate = useNavigate();
  const onClickHandler = ()=>{
      if( !login.email || !login.pas){
        setErrorMsg("fill all fields")
        return;
      }
      setErrorMsg("");
      setSubmitButton(true)
      signInWithEmailAndPassword(auth,login.email,login.pas).then(
        async(res)=>{
          
          setSubmitButton(false)
          
           navigate('/');
        }
      ).catch(
        (err)=>{
          setSubmitButton(false)
          setErrorMsg(err.message)
        }
      )
  }
  return (
    <div className='container'>
        <div className='innerBox'>
             <h1 className='heading'>Login</h1>
             <Input label="Email"  placeholder="Enter email address" onChange={(e)=>{setLogin((p)=>({...p,email:e.target.value}))}}/>
             <Input label="Password"  placeholder="Enter Password" onChange={(e)=>{setLogin((p)=>({...p,pas:e.target.value}))}}/>

             <div className='footer'>
             <b className='error'>{errorMsg}</b>
            <button onClick={onClickHandler}>button</button>
            <p>
              Already have an account ? {" "} 
              <span>
                <Link to="/Signup">Sign up</Link>
              </span>
            </p>
             </div>
        </div>

    </div>
  )
}
