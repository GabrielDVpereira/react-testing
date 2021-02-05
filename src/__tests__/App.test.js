import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Testing App.jsx", () => {
  it("Should be able to show the h1 element", () => {
    render(<App />);
    const h1Element = screen.getByText(/bem vindo ao teste/i);

    expect(h1Element).toBeInTheDocument();
  });
});
