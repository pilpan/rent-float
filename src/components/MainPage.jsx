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
    await fetch(`/favorite/add/${id}`, { method: 'PUT' });
  };
  return (
    <div>
      <p>
        Добро пожаловавть,
        {' '}
        {authState ? `${authState.email}` : 'гость!'}
      </p>
      <ul className="d-flex flex-wrap justify-content-around">
        {discrFlat && discrFlat.map((el) => (
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
                <button style={{ disabled: !buttonState }} onClick={(e) => addHandler(e, el.id)} to={`/favorite/add/${el.id}`} type="submit" className="btn btn-success">Добавить в избранное</button>
              </div>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}
