import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Edithouse({ authState, setDiscrFlat }) {
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(authState);
    const response = await fetch(`/houses/add/${authState.id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    const data = await response.json();
    setDiscrFlat((prev) => [...prev, data]);
    navigate('/');
  };
  return (
    <div className="row justify-content-center">
      <div className="col-5">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="loginName" className="form-label">Price</label>
            <input
              type="Price"
              name="Price"
              className="form-control"
              id="loginName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="loginName" className="form-label">Description</label>
            <input
              type="Description"
              name="Description"
              className="form-control"
              id="loginName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="loginName" className="form-label">Adress</label>
            <input
              type="Adress"
              name="Adress"
              className="form-control"
              id="loginName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="loginName" className="form-label">Image</label>
            <input
              type="Adress"
              name="Image"
              className="form-control"
              id="loginName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="loginName" className="form-label">Category</label>
            <input
              type="Adress"
              name="Category"
              className="form-control"
              id="loginName"
            />
          </div>
          <div className="row justify-content-center mt-3">
            <button type="submit" className="btn btn-outline-success">AddHouse</button>
          </div>
        </form>
      </div>
    </div>
  );
}
