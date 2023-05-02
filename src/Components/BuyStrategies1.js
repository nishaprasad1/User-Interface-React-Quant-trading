import React from 'react'
/* import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client'; */
import img3 from '../images/comparison.png'
import '../index.css';

import { useNavigate } from 'react-router-dom';

export default function BuyStrategies1() {


  const navigate = useNavigate();

  const goSubscription = () => {
    navigate("/subscription")
  }

  return (
    <div >

      <div class="container p-1">

        <div class="row mt-4">
          <div className='d-flex justify-content-between align-items-center'>
            <div className='h1'>ORB (open range breakout)</div>
            <button class=" button btn btn-warning" type="submit" onClick={goSubscription}
            >Subscribe</button >
          </div>
          
          <div class="container">
            <img src={img3} alt="" className="img-fluid brd" /><br /><br /><br />
          </div>

          <div class="container">
            <div className='h2 pb-3'>Strategy description</div>
            <div class="shade3 container h5">
              This is one of the popular opening range success formulas. The early morning range breakout focuses on the 
              size of the gap and also on the breakthrough its high/low. In this strategy, we need to trade in the direction 
              of the breakout when we identify the boundaries of gaps. The breakouts later in the day should be taken as caution.<br/>
              One should always use a stop-loss order when trading the early morning range breakout. The stop loss should be the 
              mid-point of the gap.<br/>
              Algo created by <span className='text-warning fw-bold'>Quant Trading</span> is back tested and provides you will Signals to
               Buy and sell Stocks with calculated StopLoss and Target.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
