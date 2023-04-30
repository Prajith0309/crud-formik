import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import  Button  from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { url } from '../App'
import axios from 'axios'

function Data() {
    let navigate =  useNavigate(); 
    const[players,setPlayers] = useState([]);

   useEffect(()=>{
    getdata()
   },[])

   const getdata = async () => {
    try {
      const res = await axios.get(url);
      setPlayers(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleDelete = async (i) => {
    try {
      await axios.delete(url+`/${i}`);
      getdata();
    } catch (error) {
      console.log(error);
    }
  };
    return <>
    <Table striped>
       <thead>
         <tr>
           <th>#</th>
           <th>player Name</th>
           <th>Role</th>
           <th>Average</th>
           <th>Wickets</th>
           <th>S.Rate</th>
           <th>5WI</th>
           <th>Actions</th>
         </tr>
       </thead>
       <tbody>
       {
          players.map((e,i)=>{
            return<>
                <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td> 
                <td>{e.role}</td>
                <td>{e.avg}</td>
                <td>{e.wickets}</td>
                <td>{e.sr}</td>
                <td>{e.wi}</td>
                <td>
                    <Button variant='primary' onClick={()=>navigate('/edit-data/'+e.id)}>Edit</Button>
                     &nbsp;
                     &nbsp;
                     &nbsp;
                    <Button variant='danger' onClick={()=>handleDelete(e.id)}>Delete</Button>
                </td>
                </tr>
              </>
             })
        }
       </tbody>
     </Table>
    </>
}

export default Data