import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function House({ discrFlat, setDiscrFlat, authState }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [info, infoSet] = useState(discrFlat[id - 1]);
  useEffect(() => {
    fetch(`/houses/pulledit/${id}`).then((res) => res.json()).then((data) => infoSet(data));
  }, []);
  const changeHandler = (e) => {
    infoSet((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await fetch(`/houses/edit/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(info),
    });
    navigate('/');
  };
  return (
    <div className="row justify-content-center">
      <div className="col-5">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="loginName" className="form-label">Price</label>
            <input
              type="price"
              name="price"
              onChange={changeHandler}
              value={info.price}
              className="form-control"
              id="loginName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="loginName" className="form-label">Description</label>
            <input
              type="Description"
              name="descriptions"
              onChange={changeHandler}
              value={info.descriptions}
              className="form-control"
              id="loginName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="loginName" className="form-label">Adress</label>
            <input
              type="Adress"
              name="coordinate"
              onChange={changeHandler}
              value={info.coordinate}
              className="form-control"
              id="loginName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="loginName" className="form-label">Image</label>
            <input
              type="Adress"
              name="img"
              onChange={changeHandler}
              value={info.img}
              className="form-control"
              id="loginName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="loginName" className="form-label">Category</label>
            <input
              type="Adress"
              name="Category"
              onChange={changeHandler}
              value="Дом"
              className="form-control"
              id="loginName"
            />
          </div>
          <div className="row justify-content-center mt-3">
            <button type="submit" className="btn btn-outline-success">Edit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
