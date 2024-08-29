import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { selectPropertyById } from '../store/propertiesSlice';
import { addFavorite, removeFavorite, isFavorite } from '../store/favoritesSlice';
import { Link } from "react-router-dom";

export default function PropertiesCard({ propertyId, slug }) {
  const dispatch = useDispatch();
  const property = useSelector((state) => selectPropertyById(state, propertyId, slug));
  const favorite = useSelector((state) => isFavorite(state, propertyId));

  if (!property) {
    return <p>Loading...</p>;
  }

  const handleFavoriteToggle = () => {
    if (favorite) {
      dispatch(removeFavorite(propertyId));
    } else {
      dispatch(addFavorite(propertyId));
    }
  };

  return (
    <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
      <div className="card">
    
      <button
          className="btn btn-outline-primary btn-favorite"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: "444",
            backgroundColor: "aliceblue",
            color: "blue"
          }}
          onClick={handleFavoriteToggle}
        >
          {favorite ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
        </button>

        <img src={property.imageUrl} alt={property.title} className="img-fluid" />
        <div className="card-body">
          <span className="sale-rent">{property.status} | ${property.price.toLocaleString()}</span>
          <h3><Link to={"/ilanlar/" + property.slug} className="stretched-link">{property.title}</Link></h3>
          <div className="card-content d-flex flex-column justify-content-center text-center">
            <div className="row property-info">
              <div className="col">Area</div>
              <div className="col">Beds</div>
              <div className="col">Baths</div>
              <div className="col">Garages</div>
            </div>
            <div className="row">
              <div className="col">{property.area}</div>
              <div className="col">{property.bed}</div>
              <div className="col">{property.bath}</div>
              <div className="col">{property.garage}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
