import React, { useEffect, useState } from 'react';

export default function MainPage({ authState }) {
  const [discrFlat, setDiscrFlat] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/qwerty')
      .then((res) => res.json())
      .then((data) => setDiscrFlat(data));
  }, []);

  return (
    <div>
      <h1 />
      <p>
        Добро пожаловавть,
        {' '}
        {authState ? `${authState.email}` : 'гость!'}
      </p>
      <ul className="list-group list-group-horizontal">
        {discrFlat && discrFlat.map((el) => (
          <li className="list-group-item">
            <div className="card" style={{ width: '18rem', height: '30rem' }}>
              <img src={el.img} className="img-thumbnail" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  Цена:
                  {' '}
                  {el.price }
                  ₽
                </h5>
                <p className="card-text">{el.descriptions}</p>
                <p className="card-text">{el.coordinate}</p>
                <a href="/" className="btn btn-primary">Подробнее</a>
              </div>
            </div>
          </li>

        ))}
      </ul>
    </div>
  );
}
