import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Login from './Login';

export default function Favorite({ dataState, authState, setDataState }) {
  const { id } = useParams();
  const [favState, setFavState] = useState(dataState || null);
  useEffect(() => {
    fetch(`/favorite/${id}`, {
      method: 'POST',
    }).then((res) => res.json()).then((data) => setFavState(data));
  }, []);
  console.log(favState);
  return (
    <ul className="list-group list-group-horizontal">
      {favState && favState.map((el) => (
        <li className="list-group-item">
          <div className="card" style={{ width: '18rem', height: '30rem' }}>
            <img src={el.flat.img} className="img-thumbnail" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                Цена:
                {' '}
                {el.flat.price}
                ₽
              </h5>
              <p className="card-text">{el.flat.descriptions}</p>
              <p className="card-text">{el.flat.coordinate}</p>
              <a href="/" className="btn btn-primary">Подробнее</a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
