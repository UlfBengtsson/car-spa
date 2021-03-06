import React, { Component } from "react";
class CarCreate extends Component {
  createCar = (event) => {
    event.preventDefault();

    const car = {
      Brand: event.target["brand"].value,
      ModelName: event.target["model"].value,
      Price: Number(event.target["price"].value),
    };

    console.log("car to create:", car);

    this.props.addCar(car);
  };

  render() {
    const options = this.props.brandArray.map((brand) => {
      return (
        <option key={brand.id} value={brand.id}>
          {brand.name}
        </option>
      );
    });

    return (
      <div className="col-md-6">
        <div className="row">
          <h3 className="col-12">Add Car</h3>
        </div>

        <form onSubmit={this.createCar}>
          <div className="row mb-2">
            <label htmlFor="brand" className="col-2 mt-2">
              Brand:
            </label>
            <select id="brand" required className="form-control col-10">
              {options}
            </select>
          </div>
          <div className="row mb-2">
            <label htmlFor="model" className="col-2 mt-2">
              Model:
            </label>
            <input
              id="model"
              type="text"
              required
              className="form-control col-10"
              placeholder="Enter Model"
            />
          </div>
          <div className="row mb-2">
            <label htmlFor="price" className="col-2 mt-2">
              Price:
            </label>
            <input
              id="price"
              type="number"
              required
              step="1"
              min="1"
              className="form-control col-10"
              placeholder="Enter Price"
            />
          </div>

          <div className="row d-flex justify-content-center">
            <input
              type="reset"
              className="mr-2 btn btn-warning"
              value="Reset"
            />
            <input type="submit" className=" btn btn-success" value="Create" />
          </div>
        </form>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-secondary"
            onClick={this.props.closeCreate}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default CarCreate;
