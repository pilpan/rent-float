import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function MainPage({ setDiscrFlat, discrFlat, authState }) {
  const [buttonState, buttonSetState] = useState(true);
  const filtration = -1;
  useEffect(() => {
    fetch('http://localhost:3000/qwerty')
      .then((res) => res.json())
      .then((data) => setDiscrFlat(data));
  }, []);

  const addHandler = async (e, id) => {
    e.preventDefault();
    const response = await fetch(`/favorite/add/${id}`, { method: 'PUT' });
    if (response.ok) buttonSetState(false);
  };
  return (
    <div>
      <p>
        Добро пожаловать,
        {' '}
        {authState ? `${authState.email}` : 'гость!'}
      </p>
      <ul className="d-flex flex-wrap justify-content-around">
        {discrFlat && discrFlat.map((el) => (
          <li className="list-group-item">
            <div
              className="card"
              style={{
                width: '18rem', height: '30rem', borderWidth: '0.5', borderColor: 'darkgrey', boxShadow: '11px 14px 9px 1px  silver'
              }}
            >
              <img src={el.img} className="img-thumbnail" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  Цена:
                  {' '}
                  {el.price}
                  ₽ /мес
                </h5>
                <p className="card-text">{el.descriptions}</p>
                <p className="card-text">{el.coordinate}</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-right">
                  <Link to={`/houses/edit/${el.id}`} className="btn btn-secondary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Подробнее</Link>
                  <button style={{ disabled: !buttonState }} onClick={(e) => addHandler(e, el.id)} to={`/favorite/add/${el.id}`} type="submit" className="btn btn-success">Добавить в избранное</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}
