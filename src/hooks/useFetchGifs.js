import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (Category) => {
  const [state, setstate] = useState({ data: [], loading: true });

  useEffect(() => {
    getGifs(Category).then((img) => {
      setstate({ data: img, loading: false });
    });
  }, [Category]);

  return state;
};
