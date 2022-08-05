import { render, screen, fireEvent } from "@testing-library/react";
import DataTable from "../DataTable";
import { Column } from "@src/components/DataTable";

const MOCK_DATA = [
  {
    id: 1,
    name: "Alex",
  },
  {
    id: 2,
    name: "Leo",
  },
  {
    id: 3,
    name: "Kurniawan",
  },
];

const MOCK_COLUMNS: Column[] = [
  {
    id: "id",
    header: "id",
    isSortable: true,
    sortKey: "username",
    cell: (row: any) => <>{row.id}</>,
  },
  {
    id: "name",
    header: "name",
    cell: (row: any) => <>{row.name}</>,
  },
];

describe("DataTable", () => {
  test("render datatable with mandatory props only", () => {
    render(<DataTable columns={MOCK_COLUMNS} dataRender={MOCK_DATA} />);
    const tableElement = screen.getByRole("table");
    expect(tableElement).toBeInTheDocument();
  });

  describe("DataTable Loading State", () => {
    test("render loading table screen", () => {
      render(
        <DataTable
          columns={MOCK_COLUMNS}
          dataRender={MOCK_DATA}
          loadingData={true}
        />
      );
      const loadingElements = screen.getAllByRole("table-loading");
      expect(loadingElements.length > 0).toBe(true);
    });

    test("not render loading table screen", () => {
      render(
        <DataTable
          columns={MOCK_COLUMNS}
          dataRender={MOCK_DATA}
          loadingData={false}
        />
      );
      const loadingElements = screen.queryAllByRole("table-loading");
      expect(loadingElements.length).toBe(0);
    });
  });

  describe("Datatable Error State", () => {
    test("render error text", () => {
      const ERROR_TEXT = "TEST ERROR";
      render(
        <DataTable
          columns={MOCK_COLUMNS}
          dataRender={MOCK_DATA}
          errorData={ERROR_TEXT}
        />
      );
      const errorElement = screen.getByText(ERROR_TEXT);
      expect(errorElement).toBeInTheDocument();
    });

    test("render error handler element", () => {
      const ERROR_TEXT = "TEST ERROR";
      const ERROR_ELEMENT_TEXT = "ERROR ELEMENT";
      render(
        <DataTable
          columns={MOCK_COLUMNS}
          dataRender={MOCK_DATA}
          errorData={ERROR_TEXT}
          handlingError={<>{ERROR_ELEMENT_TEXT}</>}
        />
      );
      const errorElement = screen.getByText(ERROR_ELEMENT_TEXT);
      expect(errorElement).toBeInTheDocument();
    });
  });

  describe("Datatable sort funciton", () => {
    test("render header without sort element", () => {
      render(<DataTable columns={MOCK_COLUMNS} dataRender={MOCK_DATA} />);
      const tableSortElements = screen.queryAllByRole("table-sort");
      expect(tableSortElements.length).toBe(0);

      const tableBasicThElements = screen.queryAllByRole(/table-header/i);
      screen.debug();
      expect(tableBasicThElements.length).toBe(2);
    });

    test("render and test header with or without sort based of columns input", () => {
      const mockFn = jest.fn();
      render(
        <DataTable
          columns={MOCK_COLUMNS} //1 setting for sort & 1 setting for not sort
          dataRender={MOCK_DATA}
          setSortBy={mockFn}
          setSortOrder={mockFn}
        />
      );
      const tableSortElements = screen.queryAllByRole("table-sort");
      expect(tableSortElements.length).toBe(1);

      fireEvent.click(tableSortElements[0]);
      expect(mockFn.mock.calls.length).toEqual(4);

      const tableBasicThElements = screen.queryAllByRole(/table-header/i);
      expect(tableBasicThElements.length).toBe(1);
    });
  });
});
