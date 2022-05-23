import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { getColorFromCount } from "./App";

describe("Counter tests", () => {
  it("renders a button", () => {
    render(<App />);
    const button = screen.getByRole("button");
    expect(button.innerHTML).toBe("0");
  });

  it("increments the button", () => {
    render(<App />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button.innerHTML).toBe("1");
    fireEvent.click(button);
    expect(button.innerHTML).toBe("2");
    fireEvent.click(button);
    expect(button.innerHTML).toBe("3");
    fireEvent.click(button);
    expect(button.innerHTML).toBe("4");
  });

  it("Has a green background when count is even", () => {
    render(<App />);
    const button = screen.getByRole("button");
    expect(button.innerHTML).toBe("0");
    expect(button.style.backgroundColor).toBe("green");
    fireEvent.click(button);
    expect(button.innerHTML).toBe("1");
    expect(button.style.backgroundColor).toBe("darkred");
  });
});

describe("Color based off count", () => {
  it("is green when even", () => {
    const myString = getColorFromCount(0);
    expect(myString).toBe("green");
  });

  it("is darkred when odd", () => {
    const myString = getColorFromCount(1);
    expect(myString).toBe("darkred");
  });
});
