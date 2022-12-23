import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("Should render same text passed into prop", async () => {
  render(<Header title="Header" />);
  const headingElement = screen.getByText(/header/i);
  expect(headingElement).toBeInTheDocument();
});

test("Should render heading", async () => {
  render(<Header title="Header" />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
});
 