import React from "react";
import { render, cleanup } from "@testing-library/react";
import ForecastList from "./index.js";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<ForecastList />);
  expect(asFragment()).toMatchSnapshot();
});
