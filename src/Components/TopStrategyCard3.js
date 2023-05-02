import React from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'bootstrap';


export default function TopStrategyCard1() {
  const navigate = useNavigate();

  const Buy =()=>
  {
    navigate("/buyStrategy1")
  }

  return (
    <div className='col card me-2'>
      <div className='card-body'>
        <div className='h4 fw-bold pe-4 text-dark-blue'>Super Trend Algorithm</div>
        <div className='fs-6 font-monospace'>created : 1Y ago</div>
        {/*INFO*/}
        <div>
          <div className='badge bg-secondary m-1'>Intraday</div>
          <div className='badge bg-secondary m-1'>Long Term</div>
        {/*   <div className=' bg-secondary m-1' onClick={Buy} > Buy Strategy</div> */}
          
        
        
        </div>
        <div className='pt-3 d-flex justify-content-end'>
          <button type="button" class="btn btn-secondary mt-3 " disabled>Coming Soon!</button>
        </div>
        {/*INFO-2*/}
        <div className='row row-cols-2 mt-3'>
          <div className='col border-end border-dark'>
            <div>Min Capital</div>
            <div className='fw-bols'><i class="fa-solid fa-indian-rupee-sign"></i> 10k</div>
          </div>
          <div className='col'>
            <div>Monthly Fee</div>
            <div className='fw-bols'><i class="fa-solid fa-indian-rupee-sign"></i> 2000 + 5%</div>
          </div>
        </div>
      </div>
    </div>
  )
}
