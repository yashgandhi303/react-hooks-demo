import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';

import AdminCP from '../components/AdminCP';

afterEach(cleanup);

describe("tests for ItemCardInput component", () => {
  const mockFn = jest.fn();
  const emptyStock = [];
  const stockItems = [
    {
      id: "id-1234",
      stock: 172,
      name: "fake item name",
    },
    {
      id: "id-5678",
      stock: 812,
      name: "mock item 2",
    }
  ];

  const { container, getByText, queryByText } = render(<AdminCP stock={emptyStock} getItemsInStock={mockFn} />);
  const h2 = getByText("Store stock:");
  const p = queryByText("No items in stock.");

  test("getItemsInStock prop function is called", () => {
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith();
  });

  test("h2 header is shown", () => {
    expect(h2.textContent).toBe("Store stock: ");
  });

  test("displays 'No items in stock.' when there are no stock items", () => {
    expect(p.textContent).toBe("No items in stock.");
  });

  test("displays bar chart with items when they exist as props", () => {
    const { container } = render(<AdminCP stock={stockItems} getItemsInStock={mockFn} />);
    const tooltip = container.querySelectorAll('recharts-tooltip-label');
    expect(tooltip.length).toBe(0);

    const bars = container.querySelectorAll('.recharts-bar-rectangle');
    expect(bars.length).toBe(stockItems.length);
  });

  test.skip("displays (correct) tooltip when hovering over a bar on bar chart", () => {
    // TODO
  });

  test("snapshot test with data (stock)", () => {
    const { container } = render(<AdminCP stock={stockItems} getItemsInStock={mockFn} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("snapshot test without data (no stock)", () => {
    const { container } = render(<AdminCP stock={emptyStock} getItemsInStock={mockFn} />);
    expect(container.firstChild).toMatchSnapshot();
  });

});
