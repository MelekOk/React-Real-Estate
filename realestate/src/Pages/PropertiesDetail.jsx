import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProperties, selectPropertyBySlug } from '../store/propertiesSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';


export default function PropertiesDetail() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const property = useSelector((state) => selectPropertyBySlug(state, slug));
  const status = useSelector((state) => state.properties.status);
  const error = useSelector((state) => state.properties.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProperties());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>{error}</p>;

  if (!property) return <p>Property not found</p>;

  return (
    <>
      <section id="real-estate-2" className="real-estate-2 section">
     <div className="container" data-aos="fade-up">
        <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up">
              <div className="portfolio-description">
                <h2>{property.title}</h2>
                <Carousel>
        {property.images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Slide ${index}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <br/>
                <p>{property.description}</p>

                <ul className="nav nav-pills mb-3">
                  <li><a className="nav-link active" data-bs-toggle="pill" href="#real-estate-2-tab1">Video</a></li>
                  <li><a className="nav-link" data-bs-toggle="pill" href="#real-estate-2-tab2">Kat Planı</a></li>
                  <li><a className="nav-link" data-bs-toggle="pill" href="#real-estate-2-tab3">Lokasyon</a></li>
                </ul>

                <div className="tab-content">
                  <div className="tab-pane fade show active" id="real-estate-2-tab1">
                  <iframe 
                  style={{ width:"560", height:"315" }}
                  src={property.videoUrl}
                  title="YouTube video player" 
                  frameBorder="0" 
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowfullscreen>
                  </iframe>
                  </div>
                  <div className="tab-pane fade" id="real-estate-2-tab2">
                    <img src="/img/floor-plan.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="tab-pane fade" id="real-estate-2-tab3">
                    <iframe
                      style={{ border: "0", width: "100%", height: "400px" }}
                      src={property.mapUrl}
                      frameBorder="0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-info">
                <h3>Detay</h3>
                <ul>
                  <li><strong>Başlık:</strong> {property.title}</li>
                  <li><strong>Durum:</strong> {property.status}</li>
                  <li><strong>Alan:</strong> <span>{property.area} <sup>2</sup></span></li>
                  <li><strong>Yatak Odası:</strong> {property.bed}</li>
                  <li><strong>Banyo:</strong> {property.bath}</li>
                </ul>
              </div>
            </div>
        </div>
    </div>
      </section>
    </>
  );
}
