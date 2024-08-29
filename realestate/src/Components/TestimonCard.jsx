import React from "react";
import { useSelector } from 'react-redux';
import { selectTestimonById } from '../store/testimonSlice';

export default function TestimonCard({testimonId}){
    const testimon = useSelector((state) => selectTestimonById(state, testimonId));

    if (!testimon) {
      return <p>Loading...</p>;
    }

  return (
 <>
<div className="testimonial-item">
  <div className="stars">
    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
  </div>
  <p>
    {testimon.description}
  </p>
  <div className="profile mt-auto">
    <img src={testimon.img} className="testimonial-img" alt=""/>
    <h3>{testimon.name}</h3>
    <h4>{testimon.job}</h4>
  </div>
</div>
 </>
  );
}



