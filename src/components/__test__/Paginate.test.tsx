import {
  INIITAL_PAGE,
  INITIAL_PAGE_SIZE,
  TOTAL_USERS,
} from "@src/lib/constants/initialLoad";
import { getRandomInt } from "@src/lib/utils/helper";
import { render, screen } from "@testing-library/react";
import Paginate from "../Paginate";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface MOCK_PAGINATE_TEST {
  MOCK_PAGE_SIZE: number;
  MOCK_TOTAL_ITEMS: number;
}

const mockFn = jest.fn();

const MultipleRenderPageButtonsTest = (array: MOCK_PAGINATE_TEST[]) => {
  array.forEach(({ MOCK_PAGE_SIZE, MOCK_TOTAL_ITEMS }) => {
    test(`CASE; TOTAL = ${MOCK_TOTAL_ITEMS} & PAGE_SIZE = ${MOCK_PAGE_SIZE}`, () => {
      const ceil = Math.ceil(MOCK_TOTAL_ITEMS / MOCK_PAGE_SIZE);

      let supposedToBeRendered = ceil;
      if (ceil > 8) supposedToBeRendered = 4;
      render(
        <Paginate
          page={1}
          pageSize={MOCK_PAGE_SIZE}
          onChangePage={mockFn}
          totalItem={MOCK_TOTAL_ITEMS}
        />
      );

      const paginationNumbersElement = screen.getAllByRole(
        "pagination-page-btn"
      );
      expect(paginationNumbersElement.length).toBe(supposedToBeRendered);
    });
  });
};

const generateRandomMockTest = (TOTAL_TEST_CASE: number) => {
  const MIN = 1,
    MAX = 1000;

  const MOCKS: MOCK_PAGINATE_TEST[] = [];
  for (let i = 0; i < TOTAL_TEST_CASE; i++) {
    MOCKS.push({
      MOCK_PAGE_SIZE: getRandomInt(MIN, MAX),
      MOCK_TOTAL_ITEMS: getRandomInt(MIN, MAX),
    });
  }
  return MOCKS;
};

describe("Paginate", () => {
  test("render paginate with mandatory props", () => {
    render(
      <Paginate
        page={INIITAL_PAGE}
        pageSize={INITIAL_PAGE_SIZE}
        onChangePage={mockFn}
        totalItem={TOTAL_USERS}
      />
    );
    const paginationElement = screen.getByTestId("pagination-container");
    expect(paginationElement).toBeInTheDocument();
  });

  describe("render total page buttons based of total items and page size", () => {
    MultipleRenderPageButtonsTest(generateRandomMockTest(10));
  });

  describe("Left & Right Arrow Buttons", () => {
    test("disable left arrow button when page is 1", () => {
      render(
        <Paginate
          page={1}
          pageSize={INITIAL_PAGE_SIZE}
          onChangePage={mockFn}
          totalItem={TOTAL_USERS}
        />
      );
      const paginationLeftArrowElement = screen.getByRole(
        "pagination-left-btn"
      );
      expect(paginationLeftArrowElement).toBeDisabled();
    });

    test("enable left arrow button when page > 1", () => {
      render(
        <Paginate
          page={2}
          pageSize={INITIAL_PAGE_SIZE}
          onChangePage={mockFn}
          totalItem={TOTAL_USERS}
        />
      );
      const paginationLeftArrowElement = screen.getByRole(
        "pagination-left-btn"
      );
      expect(paginationLeftArrowElement).not.toBeDisabled();
    });

    test("disable right arrow button when reach last page", () => {
      const totalPage = Math.ceil(TOTAL_USERS / INITIAL_PAGE_SIZE);

      render(
        <Paginate
          page={totalPage}
          pageSize={INITIAL_PAGE_SIZE}
          onChangePage={mockFn}
          totalItem={TOTAL_USERS}
        />
      );
      const paginationRightArrowElement = screen.getByRole(
        "pagination-right-btn"
      );
      expect(paginationRightArrowElement).toBeDisabled();
    });

    test("enable right arrow button when page is not the last", () => {
      const totalPage = Math.ceil(TOTAL_USERS / INITIAL_PAGE_SIZE);

      render(
        <Paginate
          page={totalPage - 1}
          pageSize={INITIAL_PAGE_SIZE}
          onChangePage={mockFn}
          totalItem={TOTAL_USERS}
        />
      );
      const paginationRightArrowElement = screen.getByRole(
        "pagination-right-btn"
      );
      expect(paginationRightArrowElement).not.toBeDisabled();
    });
  });
});
