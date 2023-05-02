import React, { Component } from 'react'
import img1 from '../images/8432.jpg'

export default class AboutUs extends Component {
    render() {
        return (
            <>
            <div class="container text-center">
                <img src={img1} className='img img-fluid w-50'/>
            </div>
            <div className='container'>
                <div className='h1 text-dark'>Quant trading</div>
                <p className='h5 mt-4'>
                    <span className='h2 fw-bold text-warning'>Quant Trading,</span> also known as algorithmic trading, is a method of executing orders by providing a predefined set of rules to a computer program. When the predefined conditions are met,
                    orders are placed at a speed and frequency that is impossible for a human trader. <br></br>
                    This project focuses on building a simple Website where Users can register to perticular algorithimg and hence can get Buy/Sell signals to maximize the profits while minimizing their losses.<br></br>
                    <br/><br/>
                    The project is built using <span className='fw-bold h3 text-success'> React-JS, Spring-Boot, hibernate with core JAVA. </span>
                </p>
            </div>
            </>

        )
    }
}
