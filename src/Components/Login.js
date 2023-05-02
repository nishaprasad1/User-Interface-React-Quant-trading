import React, { useState } from 'react'
import '../index.css';
//import React, { useState } from 'react'


import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import {toast, ToastContainer} from 'react-toastify'
import TopStrategyCard from './TopStrategyCard1';
import login from '../CSS/login.css'





export default function Login() {
  const navigate =useNavigate();
  const [name, setName] = useState("")
  
  const [phoneNO, setPhoneNo] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")


  const [loginPhoneNO, setLoginPhoneNO] = useState("");
  const [loginPassword, setPLoginPassword] = useState("");

  
  const [phoneNOO , setPhoneNOO ] = useState(localStorage.getItem("validPhoneNO" ,null));
  const [err ,setErr]=useState({
    errors:{},
    isError : false,
  })


  async function Customerlogin() {
    var notvalid=true;
    

    console.log("test");
    let item = { loginPhoneNO, loginPassword }
    console.log(item);
     axios.post("http://localhost:8053/Login/", item)
      .then((res) => {
        console.log(res.data.phoneNO);
        if(loginPhoneNO===res.data.phoneNO && loginPassword===res.data.password  ) //&& loginPassword===res.data.password 
        {
          notvalid=false;
        
          localStorage.setItem("validPhoneNO" , loginPhoneNO);
         //alert("Logged")
          toast.success("Login Successfully Done")
          console.log(localStorage.getItem("validPhoneNO"));
          //navigate("/profile");
          window.location.href = "http://localhost:3000/Profile";
          
        }
        else{
            if( ! loginPhoneNO===res.data.phoneNO )
               toast.error("Phone Number is Wrong")
               else{
                  toast.error("Password Is wrong")
               }
               

        }
        
      })
      .catch((err) => {
        console.log(err);
      
        toast.error("Server Error : Please try again later.")
       
      })
    
  }


  let Registeration = async (e) => {

    e.preventDefault();
    //  console.log(name , age , gender);
    let result = { name, phoneNO, email, password, confirmPassword }
    console.log(result);
    var pattern_MobileNO=/^[6-9][1-9]{9}$/
    var mobileValidation =pattern_MobileNO.test(result.phoneNO);
   // console.log(pattern_MobileNO.test(result.phoneNO));

    if(result.name.length < 4)
      toast.error("Name should be MIN 3 Character")
    else if(result.phoneNO=="")
       toast.error("Number not Entered")
    else if( result.email=="")
    toast.error("Email not Entered")
    else  if( (! result.password ==  result.confirmPassword)  || result.password=="" || result.confirmPassword=="")
            toast.error("Password Not Matching")

    else{
  var flage=true;
      axios.post("http://localhost:8053/registeration/" ,result)
      .then(
       (res)=>{
         console.log(res);
             
         toast.success("Registration Successful")
         flage=false;
         setName(""); setEmail(""); setPassword("");setPhoneNo(""); setConfirmPassword("");
       }
      )

      .catch((error) => {
        setErr({
          errors : error,
          isError:true
        })
        console.log("Eneterd Data is not Proper");
        console.log(err.errors);
        console.log(err.isError);
        
       
      })
      .then((res)=>{

        if(flage)
           toast.error("Soemthing is Wrong")
       
     })

    }


    

  }


  return (
    <div >
     
      <div class="container p-1">

        <div class="row mt-4">

          <div class="col-xl-6 ">

            <div class="border border-dark rounded p-4  " >
              <h2 class="text-center mb-3">Login</h2>
              <label>Mobile Number</label>
              <input type="text" style={{height: "40px"}} value={loginPhoneNO} onChange={(e) => setLoginPhoneNO(e.target.value)} placeholder="Mobile NUmber" class="form-control mb-3" />
              <label>Password</label>
              <input  style={{height: "40px"}}  type="password" value={loginPassword} onChange={(e) => setPLoginPassword(e.target.value)} placeholder="password" class="form-control mb-3" />

              <input style={{height: "40px"}}  type="button" onClick={Customerlogin} value="Login" class="form-control mb-3 btn btn-primary" />
            </div>

          </div>


          <div class="col-xl-6">
            <div class="border border-dark rounded p-4">
              <h2 class="text-center mb-3">Registration</h2>

              <label>Name</label>
              <input style={{height: "40px"}}  type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" class="form-control mb-3" />

      
              <label>Phone Number</label>
              <input style={{height: "40px"}}  type="text" value={phoneNO} onChange={(e) => setPhoneNo(e.target.value)} placeholder="Phone Number" class="form-control mb-3" />

              <label>Email</label>
              <input style={{height: "40px"}}  type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" class="form-control mb-3" />

              <label>Password</label>
              <input style={{height: "40px"}}  type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" class="form-control mb-3" />

              <label>Confirm Password</label>
              <input style={{height: "40px"}}  type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" class="form-control mb-3" />

              <input style={{height: "40px"}}  type="button" onClick={Registeration} value="Register" class="form-control mb-3 btn btn-primary" />
            </div>
          </div>

        </div>


      </div>


    </div>

  )
}
