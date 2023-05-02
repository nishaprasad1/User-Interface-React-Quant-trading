import React from 'react';
import home_0 from '../images/img_home_0.png';
import TopStrategyCard1 from './TopStrategyCard1';
import { useNavigate } from 'react-router-dom';
import TopStrategyCard2 from './TopStrategyCard2';
import TopStrategyCard3 from './TopStrategyCard3';


export default function Home() {
    console.log(localStorage.getItem("validPhoneNO"));
    //localStorage.setItem("validPhoneNO" , loginPhoneNO);

    const navigate = useNavigate();
     const stat1 =()=>
     {

       navigate("/stat1")
     }

     
    return (
        <div className='container'>
            {/* 2 top cols */}
            <div className='row row-cols-md-2 row-cols-1 mt-5 align-items-center'>
                <div className=''>
                    <div className='h1 fw-bold'>Power of Algo-Trading at your fingure tips!</div>
                    <p className='h5 mt-3'> Bring the power of out top tier algorithms in your trades to increase 
                        the potential <span className='fw-bold text-warning'>rewards</span>. </p>
                </div>
                <div className=''>
                    <img className='img-fluid' src={home_0} alt="illus-0"/>
                </div>
            </div>
            {/* Top startategies */}
            <div className='mt-3 mx-auto px-5'>
                <div className='h3 d-flex justify-content-between'>
                    <span>Top Strategies</span>
                </div>
                <hr className='border border-dark border-1 opacity-50' />
                <div className='row '>
                <TopStrategyCard1  />
                <TopStrategyCard2 />
                <TopStrategyCard3/>
               
                </div>
                
            </div>
        </div>
    )
}
