import React, { Component } from "react";
import axios from "axios";
import Search from "../Search";
import CurrentWeather from "../CurrentWeather";
import ForecastList from "../ForecastList";
import SubmitButton from "../SubmitButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "oakland",
      searchValue: ""
    };
    this.getWeatherData = this.getWeatherData.bind(this);
    this.updateSearchValue = this.updateSearchValue.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  componentDidMount() {
    this.getWeatherData();
  }

  getWeatherData() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const endpoint = `https://www.metaweather.com/api/location/search/?query=${this.state.location}`;
    axios
      .get(proxyurl + endpoint)
      .then(locationData => {
        let locationWoeid = locationData.data[0].woeid;
        let weatherEndpoint = `https://www.metaweather.com/api/location/${locationWoeid}/`;
        axios
          .get(proxyurl + weatherEndpoint)
          .then(weatherData => {
            this.setState({
              currWeather: weatherData.data.consolidated_weather[0],
              fiveDayForecast: weatherData.data.consolidated_weather.slice(1)
            });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateSearchValue(e) {
    this.setState({
      searchValue: e.target.value
    });
  }

  handleSearchClick(e) {
    e.preventDefault();
    this.setState({ location: this.state.searchValue }, this.getWeatherData);
  }

  render() {
    return (
      <div className="appContainer">
        <header>Trusty Weather</header>
        <Search
          updateSearchValue={this.updateSearchValue}
          searchValue={this.state.searchValue}
          placholder="Search by city name"
        />
        <SubmitButton value="Search" handleClick={this.handleSearchClick} />
        <CurrentWeather currWeather={this.state.currWeather} />
        <ForecastList fiveDayForecast={this.state.fiveDayForecast} />
      </div>
    );
  }
}

export default App;
