import React from 'react';
import Data from './Data';
import "bootstrap/dist/css/bootstrap.css";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Mainpage() {
  let navigate = useNavigate();
  const handleAddclick = (e)=>{
    e.preventDefault();
    navigate('/add-data')
  }
    return <>
    <div className='pt-5'></div>
    
    <div className='container border border-5'>
    <div className=' mt-2 bg-primary p-5 text-center' style={{opacity:0.8}}>
       <div className='fs-1 text-center' style={{fontWeight:"bold", opacity:1}}>BCCI Players List</div>
    </div>
  
    <div className='mt-5 row'>
      <div className='col-6'>
        <h1 className='p-2' style={{ color:"ButtonText"}}>Individual Data:</h1>
      </div>
      <div className='col-6'>
        <Button style={{background:"green", right:"-30em", position:"relative"}} onClick={handleAddclick}>Add Player</Button>
      </div>
    </div>
    <div className='p-2'>
        <Data />
    </div>
    </div>
    </>
}
