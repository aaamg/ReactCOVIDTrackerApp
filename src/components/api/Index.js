import axios from "axios";
import CountryPicker from "../CountryPicker/CountryPicker";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(url);

    const modifiedData = {
      confirmed: confirmed,
      recovered: recovered,
      deaths: deaths,
      lastUpdate: lastUpdate
    };

    return modifiedData;
  } catch (error) {
    console.log("fetchData error", error)
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`)

    //console.log("Fetch Daily Data", data)
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }))

    return modifiedData
  } catch(error) {
    console.log("Daily data error", error)
  }
}

export const fetchCountries = async () => {
  try {
    const { data: { countries }} = await axios.get(`${url}/countries`)

    return countries.map((country) => {
      return country.name
    })

  } catch(error) {
    console.log("Countries error", error)
  }
}
