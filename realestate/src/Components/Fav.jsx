import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../store/favoritesSlice';
import { selectPropertyById } from '../store/propertiesSlice';
import PropertiesCard from './PropertiesCard';
import Hero from './Hero';

export default function FavoritesPage() {
  const favoriteIds = useSelector(selectFavorites);
  const favoriteProperties = useSelector((state) =>
    favoriteIds.map(id => selectPropertyById(state, id))
  );

  if (favoriteProperties.length === 0) {
    return (
      <>
        <Hero slug="favorilerim"></Hero>
        <section id="real-estate" className="real-estate section">
        <div className="container">
          <p>Hiç favori gayrimenkulünüz yok.</p>
        </div>
        </section>
      </>
    );
  }

  return (
    <>
   <Hero slug="favorilerim"></Hero>
    <section id="real-estate" className="real-estate section">
    <div className="container">
    <div className="row gy-4">
        {favoriteProperties.map(property => (
          <PropertiesCard key={property.id} propertyId={property.id} slug={property.slug} />
        ))}
      </div>
    </div>
    </section>
    </>
  );
}
