import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

const MockChildren = "Test Button";

describe("Button", () => {
  test("render button with children props only", () => {
    render(<Button>{MockChildren}</Button>);
    const btnElement = screen.getByRole("button");
    expect(btnElement).toBeInTheDocument();
  });

  test("render button with className", () => {
    const testClass = "test-class";
    render(<Button className={testClass}>{MockChildren}</Button>);
    const btnElement = screen.getByRole("button");
    expect(btnElement.classList.contains(testClass)).toBe(true);
  });

  test("handle On Click", () => {
    const mockFn = jest.fn();
    render(<Button onClick={mockFn}>{MockChildren}</Button>);
    const btnElement = screen.getByRole("button");
    fireEvent.click(btnElement);
    expect(mockFn.mock.calls.length).toEqual(1);
  });
});
