import React from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Chart from "./components/Chart/Chart.jsx";
import CountryPicker from "./components/CountryPicker/CountryPicker.jsx";
//import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./components/api/Index.js";

class App extends React.Component {
  state = {
    data: {}
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
    console.log("Data = ", fetchedData);
  }
  render() {
    return (
      <div className={styles.container}>
        <Cards data={this.state.data} />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
