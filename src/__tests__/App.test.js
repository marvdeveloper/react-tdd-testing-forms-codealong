import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

import App from "../App";

// Pepperoni checkbox
test("checkbox is initially unchecked", () => {
  render(<App />);

  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

  expect(addPepperoni).not.toBeChecked();
});

test("checkbox appears as checked when user clicks it", () => {
  render(<App />);

  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

  userEvent.click(addPepperoni);
  expect(addPepperoni).toBeChecked();
});

test("checkbox appears as unchecked when user clicks a second time", () => {
  render(<App />);

  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

  userEvent.click(addPepperoni);

  expect(addPepperoni).toBeChecked();

  userEvent.click(addPepperoni);

  expect(addPepperoni).not.toBeChecked();
});

// Size select element
test("size select element initially displays 'Small'", () => {
  render(<App />);

  const sizeSelect = screen.getByRole("combobox");
  expect(sizeSelect.value).toBe("small");
});

test("select Size dropdown displays the user's selected value", () => {
  render(<App />);

  const sizeSelect = screen.getByRole("combobox");
  userEvent.selectOptions(sizeSelect, "medium");
  expect(sizeSelect.value).toBe("medium");
});

// "Your Selection" text
test("your selection message initially displays 'small cheese'", () => {
  render(<App />);

  const message = screen.getByText(/your selection/i);
  expect(message).toHaveTextContent("small cheese");
});

test("selecting options updates the 'Your selection' message", () => {
  render(<App />);

  const sizeSelect = screen.getByRole("combobox");
  userEvent.selectOptions(sizeSelect, "large");

  const message = screen.getByText(/your selection/i);
  expect(message).toHaveTextContent("large cheese");
});

// "Contact Info" text box
test('Contact Info text box initially displays a placeholder value of "email address"', () => {
  render(<App />);

  const contact = screen.getByLabelText(/email address/i);
  expect(contact).toHaveAttribute('placeholder', 'email address');
});

// Submit Order button
test("form contains a 'Submit Order' button", () => {
  render(<App />);

  const submitButton = screen.getByRole("button", { name: /submit order/i });
  expect(submitButton).toBeInTheDocument();
});

// Submit order button triggers "Thanks for your order!" message
test("clicking the Submit Order button displays a thank you message", () => {
  render(<App />);

  const submitButton = screen.getByRole("button", { name: /submit order/i });
  
  userEvent.click(submitButton);

  expect(screen.getByText(/thanks for your order!/i)).toBeInTheDocument();
});

// Page shows information the user types into the contact form field
test("the page shows information the user types into the contact form field", () => {
  render(<App />);

  const contact = screen.getByLabelText(/email address/i);
  userEvent.type(contact, "pizzafan@email.com");

  expect(contact).toHaveValue("pizzafan@email.com");
});
