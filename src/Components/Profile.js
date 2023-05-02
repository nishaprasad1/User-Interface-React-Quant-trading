
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import profile from '../images/profile.png'
import index from '../images/index.jpg'
//  import img2 from '../images/img2.jpg'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table';
import {toast, ToastContainer} from 'react-toastify'



export default function Profile(props) {
  const navigate = useNavigate();
  var MobileNo;
  const [authenticated, setAuthenticated] = useState(false);
  const [phoneNo, setPhoneNOO] = useState(null);
  const [subdata, setData] = useState([])
  const [subDeatils, setSubDetails] = useState({})
  const [signlasData, setSignalsData] = useState([])


  /*   useEffect(
     ()=>{
       const loggedCustomer = localStorage.getItem("authenticated")
       console.log(loggedCustomer);
       if(loggedCustomer)
       {
         setAuthenticated(true);
 
       }
 
     },[]
    ) */
   useEffect(
    () => {
      console.log("after profile");
      const phoneNO = localStorage.getItem("validPhoneNO");
      setPhoneNOO(phoneNO);
      MobileNo = phoneNO;
      console.log(" inside axios " + " " + MobileNo);
      
      fetchData(MobileNo);
      getSignals();
    }
    , []
  );
  
 
  /*  useEffect(
    () => {
      const phoneNO = localStorage.getItem("validPhoneNO");
      setPhoneNOO(phoneNO);
      MobileNo = phoneNO;

      fetchData(MobileNo);
        getSignals();
      const interval = setInterval(
        () => {
          const phoneNO = localStorage.getItem("validPhoneNO");
          setPhoneNOO(phoneNO);
          MobileNo = phoneNO;
          console.log(" inside axios " + " " + MobileNo);
          
    
    
          fetchData(MobileNo); 

           getSignals();
          
        }, 60000
      );
       return () => clearInterval(interval); 
    }, []
  ) 
 */


  console.log("***************************************");
  console.log(phoneNo);

  const getSignals=()=>
  {
    console.log("this will run after every 2 second");
            axios.get(`http://localhost:8080/signal/`)
          .then((res) => {
            console.log(res.data);
            setSignalsData(res.data)
            console.log(signlasData);
    
          }
          ).catch((err) => {
    
          }).then(() => {
    
          })
          setSignalsData([]);
          console.log(signlasData);

  }

  const fetchData = (data) => {
    console.log("phone value" + " " + data);

    /* const loggedCustomer = localStorage.getItem("authenticated")
      console.log(loggedCustomer);
      if(loggedCustomer)
      {
        setAuthenticated(true);

      } */



    axios.get(`http://localhost:8080/subscription/${data}`)
      .then((res) => {
        console.log(res.data);
          if(res.data.length > 0)
         {
          
         } 
        setData(res.data)

      }
      ).catch((err) => {
        

      }).then(() => {
       
      
      })



    axios.get(`http://localhost:8080/registeration/${data}`)
      .then((res) => {
        console.log("registeretion details using phono no");
        console.log(res.data);
        setSubDetails(res.data)

      }
      ).catch((err) => {

      }).then(() => {

      })



  }
  /*   const loggedCustomer = localStorage.getItem("authenticated")
    console.log(loggedCustomer);
    if(loggedCustomer)
    {
      setAuthenticated(true);
  
    } */
  /*  var len = subdata.length;
    console.log(" out side details" + " " + subDeatils);
    console.log(subDeatils);
    console.log(authenticated); */
    function logoutuser(){
      localStorage.removeItem("validPhoneNO",undefined);
      navigate("/");
    }



  return (

    <div className='container'>
      <div className='row'>
        <div className='col-xl-3'>

          {
            <div className='text-center'>
              <img className='img-fluid' src={profile} alt="illus-0" />
              <h2 className=" h4 fw-bold text-dark-black" >{subDeatils.name} </h2>
              <button className='btn btn-danger' onClick={logoutuser}>Logout</button>

            </div>
          }

        </div>

        <div className='col-xl-9'>
          <div className='row' >
            {



              subdata.length > 0 && subdata.map(
                val =>
                  /* if (val.strategyName==="Dhamaka") {
                    return ( */
                  <div className='col-xl-4' >
                    <br></br>
                    <Card border="primary" style={{ width: '20rem' }}>
                      <Card.Header style={{ width: 'auto' }} className=" h4 fw-bold pe-4 text-dark-blue" >{val.strategyName}</Card.Header>
                      <Card.Body>
                        <div className='fs-6 font-monospace'>created : 1Y ago</div>
                        <div className='badge bg-secondary m-1'>Intraday</div>
                        <div className='badge bg-secondary m-1'>Long Term</div>
                        <div className='badge bg-secondary m-1'>Low Risk</div>
                        <div className='badge bg-secondary m-1'>Medium Risk</div>
                        <div className='badge bg-secondary m-1'>High Risk</div>
                        <div className='badge bg-secondary m-1' >High Risk</div>
                        <p className="fw-bold" style={{ display: 'inline' }}>Subscription No : </p>
                        <span>{val.sub_Id} </span>
                        <Card.Text>
                          <p className="fw-bold" style={{ display: 'inline' }}>Start Date : </p> <span>{val.startDate}</span> <br></br>
                          <p className="fw-bold" style={{ display: 'inline' }}>End Date   : </p> <span>{val.endDate} </span>

                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>



                /*   )
                  
                } */

              )

            }
           
     </div>

    < br></br>

    
      <Table striped bordered hover variant="blue text-dark-blue">
      <thead>
        <tr>
          <th>Signal Id</th>
          <th>Company Name</th>
          <th>Company Id</th>
          <th>Strategy Name</th>
          <th>Signal Date</th>
          <th>Buy Price</th>
          <th>Sell Price</th>
          <th>Signal Type</th>
          <th>Stop Loss</th>
        </tr>
      </thead>
      {
      signlasData.length > 0 && signlasData.map(
        val =>

    
            
              <tbody>
                <tr>
                  <td>{val.signalId}</td>
                  <td>{val.companyName}</td>
                  <td>{val.companyId}</td>
                  <td>{val.strategyName}</td>
                  <td>{val.recordDate}</td>
                  <td>{val.buyPrice}</td>
                  <td>{val.sellPrice}</td>
                  <td>{val.signalType}</td>
                  <td>{val.stopLoss}</td>
                </tr>
              </tbody>
                 )
           }
            </Table>


        </div>

      </div>

    </div>
  )



}



/* 
  if(!authenticated)
  {
    console.log(authenticated);
    return <Navigate replace to='/login' />
  }


*/
