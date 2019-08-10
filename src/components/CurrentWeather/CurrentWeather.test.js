import React from "react";
import { render, cleanup } from "@testing-library/react";
import CurrentWeather from "./index.js";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<CurrentWeather />);
  expect(asFragment()).toMatchSnapshot();
});
