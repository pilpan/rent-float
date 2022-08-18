import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function MainPage({
  setDiscrFlat, discrFlat, authState, flat, setFlat
}) {
  const filtration = 1;
  useEffect(() => {
    fetch('http://localhost:3000/qwerty')
      .then((res) => res.json())
      .then((data) => setDiscrFlat(data));
  }, []);

  return (
    <div>
      <p>
        Добро пожаловавть,
        {' '}
        {authState ? `${authState.email}` : 'гость!'}
      </p>
      <ul className="list-group list-group-horizontal">
        {discrFlat && discrFlat.map((el) => el.id_category === `${flat}`
          && (
            <li className="list-group-item">
              <div className="card" style={{ width: '18rem', height: '30rem' }}>
                <img src={el.img} className="img-thumbnail" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    Цена:
                    {' '}
                    {el.price}
                    ₽
                  </h5>
                  <p className="card-text">{el.descriptions}</p>
                  <p className="card-text">{el.coordinate}</p>
                  <Link to={`/houses/edit/${el.id}`} className="btn btn-primary">Подробнее</Link>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
