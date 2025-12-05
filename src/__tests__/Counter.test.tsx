import { render, screen, fireEvent} from "@testing-library/react";
import Counter from "../Counter";

test("increments count when button is clicked", () => {
    render(<Counter />);
    // Add the test logic below

    // Find the button
    const button = screen.getByRole("button", { name: /count is 0/i });

    // Click once → should be 1
    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 1");

    // Click again → should be 2
    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 2");
});