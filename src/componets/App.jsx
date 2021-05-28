import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CarTable from "./CarTable";
import CarDetails from "./CarDetails";

import "../css/App.css";

class App extends Component {
  state = {
    detailsCar: null,
    carList: [
      {
        id: 1,
        brand: "Saab",
        model: "900 Turbo",
        year: "1989",
        mileage: 65000,
        color: "dark blue",
      },
      {
        id: 2,
        brand: "BMW",
        model: "525i",
        year: "2001",
        mileage: 25000,
        color: "dark blue",
      },
      {
        id: 3,
        brand: "Volvo",
        model: "740",
        year: "1987",
        mileage: 71000,
        color: "green",
      },
      {
        id: 4,
        brand: "Opel",
        model: "Kadett",
        year: "1982",
        mileage: 88000,
        color: "red",
      },
      {
        id: 5,
        brand: "Golf",
        model: "GTi",
        year: "1995",
        mileage: 15000,
        color: "black",
      },
    ],
  };

  findCar = (id) => {
    const cars = this.state.carList;
    let foundCar = null;
    cars.forEach((element) => {
      if (element.id === id) {
        foundCar = element;
      }
    });
    return foundCar;
  };

  showCar = (id) => {
    const car = this.findCar(id);
    if (car != null) {
      this.setState({
        detailsCar: car,
      });
    }
  };

  closeDetails = () => {
    this.setState({
      detailsCar: null,
    });
  };

  deleteCar = (id) => {
    const car = this.findCar(id);
    if (car != null) {
      const cars = this.state.carList;
      cars.splice(cars.indexOf(car), 1);
      this.setState({
        carList: cars,
      });
    }
  };

  render() {
    const sideElement =
      this.state.detailsCar != null ? (
        <CarDetails
          car={this.state.detailsCar}
          closeDetails={this.closeDetails}
          deleteCar={this.deleteCar}
        />
      ) : (
        <p>Click on Details button to see more information here.</p>
      );

    return (
      <div>
        <Header />

        <div className="container stay-clear">
          <h3>Car SPA</h3>
          <hr />
          <div className="row">
            <CarTable cars={this.state.carList} showCar={this.showCar} />
            {sideElement}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
