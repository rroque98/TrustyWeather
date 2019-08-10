import React from "react";
import { render, cleanup } from "@testing-library/react";
import SubmitButton from "./index.js";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<SubmitButton />);
  expect(asFragment()).toMatchSnapshot();
});
