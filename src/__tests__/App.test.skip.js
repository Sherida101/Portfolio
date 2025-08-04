import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import App from "../App";

test("renders home section", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
});
test("renders experience section", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByText(/Experience/i)).toBeInTheDocument();
});
test("renders education section", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByText(/Education/i)).toBeInTheDocument();
});
test("renders projects section", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByText(/Projects/i)).toBeInTheDocument();
});
test("renders open source section", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByText(/Open Source/i)).toBeInTheDocument();
});
test("renders contact section", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByText(/Contact/i)).toBeInTheDocument();
});
test("renders header", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByText(/Sherida101/i)).toBeInTheDocument();
});
test("renders footer", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByText(/© Sherida101/i)).toBeInTheDocument();
});
test("renders splash screen", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
});
test("renders error page", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByText(/404/i)).toBeInTheDocument();
});
