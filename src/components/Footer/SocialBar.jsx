import React from'react';
import { Container, Row, Col } from "reactstrap";
import {Link} from "react-router-dom";
import './SocialBar.css'




const SocialBar = () => {
  return (
    <div className='social_bar'>
        <Container>
            <Row className='bottom_bar'>
                <Col  lg='2' md='2' sm='2'>
                   <div className='social_bar_right'>
                    <p className='Section_description d-flex align-items-center  gap-1 pt-2'>
                    <i className="ri-copyright-line"></i> 2021 Turners
                    </p>
                   </div>
                </Col>
              
                <Col className='social_items' lg='10' md='10' sm='10'>
                    <button className='bottom_right d-flex align-items-center  gap-2 '>
                
                        <Link to="#" className='link-social d-flex align-items-center  gap-2'>
                        <i className="ri-home-3-line social_icon"></i>
                        <span className='social_title'>Branch Details</span>
                        </Link>
                       
                     </button>
                     <button className='bottom_right d-flex align-items-center  gap-1'>
                        <Link to="#" className='link-social d-flex align-items-center  gap-2'>
                        <i className="ri-facebook-box-line social_icon "></i>
                        <span className='social_title'>Facebook</span>
                       </Link>
                     </button>
                     <button className='bottom_right d-flex align-items-center r gap-1 '>
                        <Link to="#" className='link-social d-flex align-items-center  gap-2'>
                 
                        <i className="ri-mail-line social_icon"></i>
                        <span className='social_title'>Newsletter</span>
                       </Link>
                     </button>
                     <button className='bottom_right d-flex align-items-center  gap-1 '>
                        <Link to="#" className='link-social d-flex align-items-center  gap-2'>
                 
                        <i className="ri-mail-unread-line social_icon"></i>
                        <span className='social_title'>Email Alerts</span>
                       </Link>
                     </button>
                     <button className='bottom_right d-flex align-items-center gap-1 '>
                        <Link to="#" className='link-social d-flex align-items-center  gap-2'>
                 
                        <i className="ri-instagram-line social_icon"></i>
                        <span className='social_title'>Instagram</span>
                       </Link>
                     </button>
                </Col>
               
            </Row>
        </Container>
      
    </div>
  )
}

export default SocialBar
