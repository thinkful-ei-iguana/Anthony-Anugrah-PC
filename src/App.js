import React, { Component } from "react";
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import Header from "./components/Header";
import PartPicker from "./components/PartPicker";
import "./App.css";
import ShoppingCart from "./components/ShoppingCart";

// This object will allow us to
// easily convert numbers into US dollar values

//added to shopping cart
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700
      },
      "Operating System": {
        name: "Ubuntu Linux 16.04",
        cost: 200
      },
      "Video Card": {
        name: "Toyota Corolla 1.5v",
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  //added to part picker

  //items
  render() {
    // shopping cart
    // parent
    return (
      <div className="App">
        <Header />
        <main>
          <PartPicker
            {...this.state}
            currency={USCurrencyFormat}
            features={this.props.features}
          />
          <section className="main__summary">
            <ShoppingCart
              {...this.state}
              currency={USCurrencyFormat}
              features={this.props.features}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
