import React from 'react'
import { Col, Container, Form, FormGroup } from "reactstrap";
import {Link} from 'react-router-dom';
import './CarInsurance.css';
import { Row } from 'react-bootstrap';


const CarInsurance = () => {
  return (
    <div>
    <Form className='main-section-content'>
    <Container className='left-section'> 
      <h2 className='left-section-title'>Car insurance quick quote</h2>
      <p className="left-section-p">Get a quick quote and get covered in 5</p>
      
      <Col className='left-column'>
      <FormGroup className="formgroup">       
        <h5 className='input-title'>Enter your car's registration?</h5>
        <div className='input-section'>
         <input
           className='search-input'
           type="text"
           placeholder='e.g ABC123'/>
         <button className='search-butt'>Search</button>
        </div>
        <p>Don't know your registration?  <Link to="/home">  Choose car make/model
        </Link></p> 
      </FormGroup >   
         
      <hr className='breakLine'       
       />
       <FormGroup className="formgroup">
        <h5 className='input-title'>Do you use your car for business?</h5>
        <div className='input-section'>
            
            <button className='yesno-butt' >Yes</button>
             <button className='yesno-butt' >No</button>
        </div>
       </FormGroup >
       <hr className='breakLine'       
       />
       <FormGroup className="formgroup">
        <h5 className='input-title'>What address is your car usually kept at ?</h5>
        <p>Start typing the address and select from the drop down</p>
       
        <input
          className="address-section"
          type="text"
          placeholder='e.g 123 Sample st'
          />

        <p>Address not appearing?  <Link to="/home">Enter it manually</Link></p>
       </FormGroup>
       <hr className='breakLine'       
       />
       <FormGroup className="formgroup">
        <h5 className='input-title'>When would you like your policy to start?</h5>
        <div className='input-section'>
        <input
           className='date-policy' 
           type="date"
           placeholder='01 September 2022'/>
        </div>
       </FormGroup>
       </Col>
      </Container>
        <Container className='right-section'>
        <h2 className='right-section-title'>Driver Details</h2>
        <p className="right-section-p">Main driver and owner of the car (you)</p>
       
        <Col className="right-column"> 
        <FormGroup className="formgroup">
            <h5 className='input-title'>Date of Birth</h5>
            <div className='input-section'>
                <Row className="dob-column">
                  <input 
                    type="text"
                    placeholder='dd'
                    />
                    <input 
                      type="text"
                      placeholder='mm'
                      />
                      <input 
                      typer='text'
                      placeholder='yyyy'
                      />                
                </Row>
                </div>
                <hr className='breakLine'       
       />
        </FormGroup>
        <FormGroup className="formgroup">
            <h5 className='input-title'>Are you</h5>
            <div className='input-section'>
                 <button className='gender-butt' >Female</button>
                 <button className='gender-butt' >Male</button>
                 <button className='gender-butt'>Other</button>
            </div>
         </FormGroup>
         <hr className='breakLine'       
       />
         <FormGroup className="formgroup">
            <h5 className='input-title'>What license do you hold?</h5>
            <div className='input-section'>
           <select className="custom-select" id="inputGroupSelect01">
             <option >Please select</option>
             <option >Car license</option>
             <option >Medium rigid vehicle licence</option>
             <option >Medium combination vehicle licence</option>
             <option >Heavy combination vehicle licence</option>
             <option >Motorcycle licence</option>
          </select>
          </div>
         </FormGroup>
         <hr className='breakLine'       
       />
          <FormGroup className="formgroup">
            <h5 className='input-title'>In the last 5 years have you had any incidents involving damage or theft of a vehicle</h5>
            <div className='input-section'>
            <button className='yesno-butt'>Yes</button>
            <button className='yesno-butt'>No</button>
            </div>
         </FormGroup>
         <hr className='breakLine'       
       />
         <Container className='small-section'>
            <Col className='small-content'>
            <h6>Drivers under 25?</h6>
            <p>tell us who they are. We'll add them to your policy and let you know about the excesses that apply. Please remember there's <strong>no cover for drivers aged 25 who arent listed</strong> on your policy</p>
            <h6>Other drivers over 25? </h6>
            <p>There's no need to add other licensed drivers over 25 who use the car with your permission. They'll enjoy the same cover as you
            </p>
            </Col>
         </Container>
         <div className='submit-butt'>
          <button className='add-butt'>Add another Driver</button>
          <button className='add-butt'>View your quote</button>
          </div>
        </Col>
      </Container>
    </Form>
    
    </div>
  )
}

export default CarInsurance
