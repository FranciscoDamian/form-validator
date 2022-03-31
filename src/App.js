import './App.css';
import {ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'; 
import styled from 'styled-components';
import { Container, CardGroup } from 'react-bootstrap';
import './index.css' 

const Tittle = styled.h1` 
  background-color: black;
  color: white;
  margin-right:auto; 
  `
  const Forms = styled(Form)` 
  background-color: black;
  color: white;  
  `
function App() {
  return ( 
      <Formik initialValues={
        {
        tittle: '',
        date: '',
        gender: '',
        price: '',
        video: '',
        disk: '', 
        } 
      }
      validationSchema = {
        Yup.object().shape({
          tittle: Yup.string().required('Title is required') ,
          date: Yup.date().required('Date is in the wrong format'),
          gender: Yup.string().required('Select your gender'),
          price: Yup.number().required('Price is required'),
          video: Yup.string().required('Select the format'), 
          disk: Yup.number().required('Quantity is required')
        })
      } 
      render = {
        (
          {
            errores,
            status,
            touched
          }
        )=>(
          <Forms>
            <Container>
              <Tittle>MOVIES REGISTER</Tittle> 
              <CardGroup>
                <label>Tittle</label>
                <br/> 
                <Field name ="tittle" type="text"  placeholder="Tittle"/>
                <ErrorMessage name='tittle' render={msg => <div className="invalid-feedback error">{msg}</div>}/> 
                <br/>
                <label className='fix'>Launching date</label>
                <br/> 
                <Field name ="date" type="date" />
                <ErrorMessage name='date' render={msg => <div className="invalid-feedback error">{msg}</div>}/>  
                <br/>
                <label>Gender</label>
                <br/> 
                <Field name="gender" as="select">
                  <option> </option>
                  <option> Male </option>
                  <option> Female </option>
                  <option> I prefer don't say it </option>
                </Field>
                <ErrorMessage name='gender' render={msg => <div className="invalid-feedback error">{msg}</div>}/>  
                <br/>
                <label>Price</label>
                <br/> 
                <Field name ="price" type="number" placeholder="Price"/>
                <ErrorMessage name='price' render={msg => <div className="invalid-feedback error">{msg}</div>}/>  
                <br/> 
                <label>Format Video</label>
                <br/>  
                <Field name="video" as="select">
                  <option> </option>
                  <option> .MP4 </option>
                  <option> VHC </option>
                </Field>
                <ErrorMessage name='video' render={msg => <div className="invalid-feedback error">{msg}</div>}/> 
                <br/> 
                <label>Quantity disks</label>
                <br/> 
                <Field name ="disk" type="number" placeholder="Disk"/>
                <ErrorMessage name='disk' render={msg => <div className="invalid-feedback error">{msg}</div>}/>
                <br/> 
                <button type='submit' className='button'>Send</button>
              </CardGroup> 
            </Container>  
        </Forms>
        )
      } 
      onSubmit = {(values) => {
        console.log(values)
      }}> 
      </Formik>
  );
}

export default App;
