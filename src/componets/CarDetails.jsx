import React from "react";

const CarDetails = (props) => {
  return (
    <div className="col-md-6">
      <ul className="list-group">
        <li className="list-group-item">
          <b>Brand:</b>
          <p>{props.car.brand}</p>
        </li>
        <li className="list-group-item">
          <b>Model:</b>
          <p>{props.car.model}</p>
        </li>
        <li className="list-group-item">
          <b>Year:</b>
          <p>{props.car.year}</p>
        </li>
        <li className="list-group-item">
          <b>Mileage:</b>
          <p>{props.car.mileage}</p>
        </li>
        <li className="list-group-item">
          <b>Color:</b>
          <p>{props.car.color}</p>
        </li>
        <li className="list-group-item">
          <b>Actions:</b>
          <button className="btn btn-secondary" onClick={props.closeDetails}>
            Close
          </button>
          <button
            className="btn btn-danger"
            onClick={() => props.deleteCar(props.car.id)}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CarDetails;
