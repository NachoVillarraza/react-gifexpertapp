import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ Category }) => {
  const { data: images, loading } = useFetchGifs(Category);
  return (
    <>
      <h2>{Category}</h2>
      {loading && (
        <p className="animate__animated animate__flash">{'Cargando...'}</p>
      )}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
