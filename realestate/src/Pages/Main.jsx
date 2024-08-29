

import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Slider from "../Components/Slider";
import { fetchTestimons } from '../store/testimonSlice';
import TestimonCard from "../Components/TestimonCard";

export default function Main() {
  const dispatch = useDispatch();
  const { testimons, status, error } = useSelector((state) => state.testimons);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTestimons());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>{error}</p>;

  return (
  <>
  <Slider></Slider>

  <section id="testimonials" className="testimonials section">    
        <div className="container section-title" data-aos="fade-up">
          <h2>Sizden Gelenler!</h2>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Carousel interval={3000} controls indicators pause="hover">
            {testimons.map((testimon) => (
              <Carousel.Item key={testimon.id}>
                <TestimonCard testimonId={testimon.id} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
  </>
  );
}