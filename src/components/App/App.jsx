import "./App.css";
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
      location: "boston",
      searchValue: ""
    };
    this.getWeatherData = this.getWeatherData.bind(this);
    this.updateSearchValue = this.updateSearchValue.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.convertCelsiusToFaren = this.convertCelsiusToFaren.bind(this);
    this.determineDayOfWeek = this.determineDayOfWeek.bind(this);
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
              fiveDayForecast: weatherData.data.consolidated_weather.slice(1),
              locationDisplayed: `${weatherData.data.title}, ${weatherData.data.parent.title}`
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

  convertCelsiusToFaren(cel) {
    return cel * (9 / 5) + 32;
  }

  determineDayOfWeek(dateStr) {
    const dateObj = new Date(dateStr);
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "WednesDay",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    return daysOfWeek[dateObj.getDay()];
  }

  render() {
    return (
      <div className="appWrapper">
        <header className="appTitle">Trusty Weather</header>
        <header className="locationContainer">
          {this.state.locationDisplayed}
        </header>
        <Search
          updateSearchValue={this.updateSearchValue}
          searchValue={this.state.searchValue}
          placeholderText="Search by city name"
        />
        <SubmitButton value="Search" handleClick={this.handleSearchClick} />
        <CurrentWeather
          currWeather={this.state.currWeather}
          convertCelsiusToFaren={this.convertCelsiusToFaren}
          determineDayOfWeek={this.determineDayOfWeek}
        />
        <ForecastList
          fiveDayForecast={this.state.fiveDayForecast}
          convertCelsiusToFaren={this.convertCelsiusToFaren}
          determineDayOfWeek={this.determineDayOfWeek}
        />
      </div>
    );
  }
}

export default App;
