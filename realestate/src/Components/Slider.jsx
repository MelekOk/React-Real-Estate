import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

export default function Slider() {
  return (
   <>
     <Carousel interval={5000} controls={true} indicators={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/hero-carousel/hero-carousel-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Bebek, İstanbul</p>
          <h2><span>5+2</span> Villa</h2>
          <span className="btn-get-started">Satılık | $ 12.000</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/hero-carousel/hero-carousel-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>Çankaya, Ankara</p>
          <h2><span>2+1</span> Modern Daire</h2>
          <span className="btn-get-started">Kiralık | $ 356.000</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/hero-carousel/hero-carousel-3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>Bornova, İzmir</p>
          <h2><span>5+2</span> Villa</h2>
          <span className="btn-get-started">Satılık | $ 3.000</span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </>
  );
}
