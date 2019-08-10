# TrustyWeather

> This is a simple weather forecast app that uses data from https://www.metaweather.com/api/ to display the weather for today and the next five day forecast based on location.

## Technology stack

- React.js
- Parcel.js
- CSS
- HTML5
- Prettier
- Eslint
- Babel
- axios
- Jest
- testing-library/react

## Trello

[Link to my Trello board for this project](https://trello.com/b/98lyMG9v/trustyweather)

## Development

### Setup Instructions

From within the root directory:

```sh
1. Clone repo locally
2. Install dependencies: `npm install`
3. To compile and run localhost server: `npm run dev`
4. Open browser: http://localhost:1234/
5. To run tests: `npm test`
6. To run test coverage report: 'npm run coverage'
```

## Reflection

This is a weather forecast app that I completed within a 24-hour time period. Thankfully, the MetaWeather API available at: https://www.metaweather.com/api/ provided me with all of the data including the icons that I need to accomplish my goal. Still, using the MetaWeather API was not a completely smooth process. One problem that I ran into initially is that the MetaWeather API continued to throw a Cross-Origin Resource Sharing (CORS) error everytime I tried to access the API. Due to time constraints, I decided to go around this issue with a proxy api that enables cross-origin requests ("https://cors-anywhere.herokuapp.com/"). However, I believe that by having to go through this additional API evertime I make a GET request, the performance of my app is significantly impacted. If given more time, I would also like to continue improving my CSS styling or possibly refactor the CSS to Styled-Components as I focussed on the app functionality initially and only had enough time to apply basic styling. I would also add a more comprehensive test suite and possibly more interactivity. Overall, it was a fun experience getting to build a useful app within a 24-hour time period that displays weather information based on location.
