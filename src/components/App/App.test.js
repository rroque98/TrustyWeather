import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./index.js";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
