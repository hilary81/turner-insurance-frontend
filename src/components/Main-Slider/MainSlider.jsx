import Carousel from 'react-bootstrap/Carousel';
import mechanic from "../images/mechanic.jpg";
import finance from "../images/finance.jpg";
import insurance from "../images/insurance.jpg";
import './MainSlider.css';
import { Container } from 'react-bootstrap';

function UncontrolledExample() {
  return (
    <Container className="slider-container">

    <Carousel className="slider-box">
      <Carousel.Item>
        <img
          className="d-block"
          src={mechanic}
          alt="First slide"
        />
        <Carousel.Caption className="inner-section">

          <h3>Mechanical Breakdown Insurance</h3>
          <h6>Protect yourself against unexpected cost</h6>
          <p>If your own or buy a second hand car, make sure you're covered for unforeseen and sudden mechanica breakdowns.</p>
          <button className='slider-button'>Find out more</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={finance}
          alt="Second slide"
        />

        <Carousel.Caption className="inner-section">
          <h3>Want finance? we can help with that too</h3>
          <p>Turners organises car and personcal finance through a range of lenders. We'll work with you to get the best deal to suit your particular circumstances.</p>
          <button className='slider-button' >Apply online</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={insurance}
          alt="Third slide"
        />

        <Carousel.Caption className="inner-section">
          <h3>Car insurance</h3>
          <h6>Protect yourself against unexpected cost</h6>
          <p>If your own or buy a second hand car, make sure you're covered for unforeseen and sudden mechanical and electrical breakdowns.</p>
          <button className='slider-button' >Find out more</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default UncontrolledExample;