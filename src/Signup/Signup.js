import React from 'react'
import './Signup.css';
import Input from '../components/Input/Input';
import { Link ,useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../firebase';
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
export default function Signup() {
  
  const [sign,setSignup] = useState({
    nam:"",email:"",pas:""

  })
  const [errorMsg,setErrorMsg] = useState("");
  const [submitButton,setSubmitButton] = useState(false);
  const navigate = useNavigate();
  const onClickHandler = ()=>{
      if(!sign.nam || !sign.email || !sign.pas){
        setErrorMsg("fill all fields")
        return;
      }
      setErrorMsg("");
      setSubmitButton(true)
      createUserWithEmailAndPassword(auth,sign.email,sign.pas).then(
        async(res)=>{
          console.log(res);
          setSubmitButton(false)
          const user=res.user
           await updateProfile(user,{
            displayName:sign.nam
           })
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
             <h1 className='heading'>Signup</h1>
             <Input label="Name"  placeholder="Enter Your Name" onChange={(e)=>{setSignup((p)=>({...p,nam:e.target.value}))}}/>
             <Input label="Email"  placeholder="Enter email address"onChange={(e)=>{setSignup((p)=>({...p,email:e.target.value}))}}/>
             <Input label="Password"  placeholder="Enter Password" onChange={(e)=>{setSignup((p)=>({...p,pas:e.target.value}))}}/>

             <div className='footer'>
              <b className='error'>{errorMsg}</b>
            <button onClick={onClickHandler} disabled={submitButton}>button</button>
            <p>
              Already have an account ? {" "} 
              <span>
                <Link to="/Login">Login</Link>
              </span>
            </p>
             </div>
        </div>

    </div>
  )
}
