import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Nav from "../components/Nav";

test("should display all expected links in the navigation bar", () => {
  render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  );

  expect(screen.getByText(/home/i)).toBeInTheDocument();
  expect(screen.getByText(/leaderboard/i)).toBeInTheDocument();
  expect(screen.getByText(/new poll/i)).toBeInTheDocument();
});
