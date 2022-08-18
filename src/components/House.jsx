import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function House({ authState }) {
  const { id } = useParams();
  const [info, infoSet] = useState(null);
  useEffect(() => {
    fetch(`/houses/edit/${id}`).then((res) => res.json()).then((data) => infoSet(data));
  }, []);
  console.log(info);
  return (
    <div className="row justify-content-center">
      <div className="col-5">
        <form>
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
            <button type="submit" className="btn btn-outline-success">Edit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
