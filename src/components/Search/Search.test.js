import React from "react";
import { render, cleanup } from "@testing-library/react";
import Search from "./index.js";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Search />);
  expect(asFragment()).toMatchSnapshot();
});
