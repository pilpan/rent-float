import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Favorite({ dataState, authState, setDataState }) {
  const { id } = useParams();
  const [favState, setFavState] = useState(dataState || null);
  useEffect(() => {
    fetch(`/favorite/${id}`).then((res) => res.json()).then((data) => setFavState(data));
  }, []);

  console.log(favState);
  return (
    <div>favorite</div>
  );
}
