import React,{useEffect,useState} from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { url } from '../App'
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

function Editdata() {
  let navigate = useNavigate();
  let params = useParams(); 
  const [initialValues, setInitialValues] = useState({
    name: "",
    role: "",
    avg: "",
    wickets: "",
    sr: "",
    wi: "",
  });
  useEffect(()=>{
    fetchData()
  }, [])

   const fetchData = async()=>{
    console.log('fetchData called');
    try{
     let rex = await axios.get(`${url}/${params.id}`)
     setInitialValues(rex.data)
   } catch (error) {
     console.log(error);
   }
   }

     const handleSubmit = async (values)=>{

       await axios.put(`${url}/${params.id}`,values)
       navigate('*');
     }
    let formik = useFormik({
        initialValues,
        validationSchema: Yup.object({
        name:Yup.string()
        .max(15,'must be less than 15 characters')
        .min(4, 'must be greater than 4 characters')
        .required('Require (or) do any change'),

        role:Yup.string().required('Require (or) do any change'),

        avg:Yup.string().matches(/^\d{1,2}(\.\d{1,2})?$/,'only 2 numbers after the decimal point is allowed')
        .required('Require (or) do any change'),

        wickets:Yup.number()
        .max(800,'must be less than 800')
        .min(5, 'must be greater than 5')
        .required('Require (or) do any change'),

        sr:Yup.string().matches(/^\d{1,2}(\.\d{1,2})?$/,'only 2 numbers after the decimal point is allowed')
        .required('Require (or) do any change'),

        wi:Yup.number()
        .max(16,'must be less than 16')
        .min(1, 'must be greater than 1')
        .required('Require (or) do any change')
        
    }),
    onSubmit: (values)=>{
        handleSubmit(values)
    }
})

  return <>
   <div className='p-3 fs-1' style={{fontWeight:'bolder'}}>Enter Data</div>
    <Form onSubmit={formik.handleSubmit} className='p-3'>
     <div className='mt-3'>
        <label htmlFor='name' className='form-label'><b>Player Name</b></label>
        <input
         id='name'
         name='name'
         type='text'
         onBlur={formik.handleBlur}
         onChange={formik.handleChange}
         
         defaultValue={initialValues.name}
         className='form-control'
         />
         {formik.touched.name && formik.errors.name?<div style={{color:'red'}}>{formik.errors.name}</div>:null}
     </div>
     <div className='mt-3'>
        <label htmlFor='role' className='form-label'><b>Role</b></label>
        <input
         id='role'
         name='role'
         type='text'
         onBlur={formik.handleBlur}
         onChange={formik.handleChange}
         defaultValue={initialValues.role}
         className='form-control'
         />
         {formik.touched.role && formik.errors.role?<div style={{color:'red'}}>{formik.errors.role}</div>:null}
     </div>
     <div className='mt-3'>
        <label htmlFor='avg' className='form-label'><b>Average</b></label>
        <input
         id='avg'
         name='avg'
         type='number'
         onBlur={formik.handleBlur}
         onChange={formik.handleChange}
         value={formik.values.avg}
         className='form-control'
         />
         {formik.touched.avg && formik.errors.avg?<div style={{color:'red'}}>{formik.errors.avg}</div>:null}
     </div>
     <div className='mt-3'>
        <label htmlFor='wickets' className='form-label'><b>Wickets</b></label>
        <input
         id='wickets'
         name='wickets'
         type='number'
         onBlur={formik.handleBlur}
         onChange={formik.handleChange}
         defaultValue={initialValues.wickets}
         className='form-control'
         />
         {formik.touched.wickets && formik.errors.wickets?<div style={{color:'red'}}>{formik.errors.wickets}</div>:null}
     </div>
     <div className='mt-3'>
        <label htmlFor='sr' className='form-label'><b>Strike Rate</b></label>
        <input
         id='sr'
         name='sr'
         type='number'
         onBlur={formik.handleBlur}
         onChange={formik.handleChange}
         value={formik.values.sr}
         className='form-control'
         />
         {formik.touched.sr && formik.errors.sr?<div style={{color:'red'}}>{formik.errors.sr}</div>:null}
     </div>
     <div className='mt-3'>
        <label htmlFor='wi' className='form-label'><b>5WI</b></label>
        <input
         id='wi'
         name='wi'
         type='number'
         onBlur={formik.handleBlur}
         onChange={formik.handleChange}
         defaultValue={initialValues.wi}
         className='form-control'
         />
         {formik.touched.wi && formik.errors.wi?<div style={{color:'red'}}>{formik.errors.wi}</div>:null}
     </div>
     <div className='form-group mt-5'>
        <Button type='submit' className='btn btn-primary'>
           Submit
        </Button>
     </div>
    </Form>
    </>
}

export default Editdata