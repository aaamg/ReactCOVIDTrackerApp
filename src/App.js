import React from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Chart from "./components/Chart/Chart.jsx";
import CountryPicker from "./components/CountryPicker/CountryPicker.jsx";
//import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./components/api/Index.js";

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
    // console.log("Data = ", fetchedData);
  }

  handleCountryChange = async (country) => {
    console.log(country)

  }

  render() {
    return (
      <div className={styles.container}>
        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart />
      </div>
    );
  }
}

export default App;
