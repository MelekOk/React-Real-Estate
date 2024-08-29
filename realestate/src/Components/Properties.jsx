import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProperties, selectFilteredProperties  } from '../store/propertiesSlice';
import PropertiesCard from './PropertiesCard';
import Hero from './Hero';
import SearchBar from './SearchBar'; 

export default function Properties() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.properties);
  const filteredProperties = useSelector(selectFilteredProperties) || []; 

  useEffect(() => {
    if (status === 'idle') {   
        dispatch(fetchProperties());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>{error}</p>;

  return (
    <>
      <Hero slug="ilanlar"></Hero>
      <SearchBar />
      <section id="real-estate" className="real-estate section">
        <div className="container">
        <div className="row gy-4">
        {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <PropertiesCard key={property.id} propertyId={property.id} />
              ))
            ) : (
              <p>Aradığınız kriterlere uygun ilan bulunamadı.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
