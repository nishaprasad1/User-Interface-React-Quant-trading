import React from 'react'

import '../CSS/App.css';


import { useState } from 'react';
import axios from 'axios';

import { toast } from 'react-toastify';
import Footer from './Footer';


export default function Subscription() {

    if(localStorage.getItem("validPhoneNO")==null || localStorage.getItem("validPhoneNO")==undefined){
        window.location.href="http://localhost:3000/login";
    }

    const Countries = [
        { label: "Strategy-1" },
        { label: "Strategy-2" },
        { label: "Strategy-3" },

    ];

    //const [phoneNO, setPhoneNo] = useState("")
    const [strategyName, setStrategyName] = useState("")
    const [totalPayment, setTotalPayment] = useState("")


    const subscription = () => {
        var flag = false;
        console.log("test");
        var phoneNO = localStorage.getItem("validPhoneNO");
        let item = { phoneNO, strategyName, totalPayment }
        console.log(item);
        if (item.strategyName === "")
            toast.error("Select any one Strategy")
        else {



            axios.get(`http://localhost:8053/registeration/${phoneNO}`)
                .then((res) => {
                    console.log(res.data);
                    if (res.data.phoneNO == phoneNO) {
                        //  toast.success("Valid User");
                        flag = true;

                        axios.post(`http://localhost:8053/subscription/`, item)
                            .then((res) => {
                                console.log(res.data);
                                toast.success("ThankYou for Subscription")
                                window.location.href="http://localhost:3000/profile";

                            }
                            ).catch((err) => {
                                toast.error("Server Error")

                            }).then(() => {

                            })

                    }


                }
                ).catch((err) => {
                    toast.error(" Do Registeration First")

                }).then(() => {

                })
        }

        // setPhoneNo(""); 
        setStrategyName(""); setTotalPayment("");


    }



    return (


        <div  class="d-flex align-items-center justify-content-center"  style={{ width:"100%" , paddingTop: "100px" }}  >           
          
            <form className='B1 border border-secondary rounded p-3'  >
                <div className="input-container pb-4">
                    <div className=" h4 fw-bold pe-4 m-0" >Phone Number</div>
                    <input className='m-0' disabled value={localStorage.getItem("validPhoneNO")}  type="text" name="uname" required />
                </div>
                <div className="dropdown input-container  pb-4">
                    <h4 className=" h4 fw-bold pe-4  m-0" >Strategies</h4>
                    <select value={strategyName} onChange={(e) => setStrategyName(e.target.value)} style={{ width: "95%", height: "40px", paddingLeft: "10px", background: "white" }} >
                        <option>None</option>
                        <option>ORB</option>
                        {/*<option>Startegy 2</option>
                        <option>Startegy 3</option>*/}
                    </select>

                </div>

                <div className="input-container pb-2"  style={{ paddingTop: "10px" }} >
                    <h4 className=" h4 fw-bold pe-4  m-0" >Total Payment </h4>
                    <input disabled value="1000" onChange={(e) => setTotalPayment(e.target.value)} type="text" name="pass" required />

                </div>

                <div>

                </div>
                <div className="button-container" style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                    {/*      <button onClick={subscription}  class="button">Subscribe</button> */}
                    {/*  <input  style={{width:"40%" , height:"20px" ,textAlign:"center"}}  type="button" onClick={subscription} value="Subscribe"  /> */}

                    <input style={{ height: "40px" }} type="button" onClick={subscription} value=" Get Subscribtion" class="form-control mb-3 btn btn-primary" />
                </div>
            </form>
        </div>



    )
}
