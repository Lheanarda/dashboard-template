import {
  INIITAL_PAGE,
  INITIAL_GENDER,
  INITIAL_PAGE_SIZE,
} from "@src/lib/constants/initialLoad";
import { SortOrderType } from "@src/typings/filter";
import { UserSortOptions } from "@src/typings/user/user-service";
import { useEffect, useState } from "react";

const useFilterUserState = () => {
  const [realTimeSearch, setRealTimeSearch] = useState<{
    value: string;
    isValueTimeout: boolean;
  }>({
    value: "",
    isValueTimeout: true,
  });
  const [usedSearch, setUsedSearch] = useState<string>("");
  const [pageSize, setPageSize] = useState<number>(INITIAL_PAGE_SIZE);
  const [gender, setGender] = useState<string>(INITIAL_GENDER);
  const [page, setPage] = useState<number>(INIITAL_PAGE);
  const [sortBy, setSortBy] = useState<UserSortOptions | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrderType | null>(null);

  useEffect(() => {
    if (gender || pageSize || usedSearch) {
      setPage(INIITAL_PAGE);
    }
  }, [gender, pageSize, usedSearch]);

  useEffect(() => {
    if (!realTimeSearch.isValueTimeout) return;
    const timeout = setTimeout(() => {
      setUsedSearch(realTimeSearch.value);
    }, 500);
    return () => clearTimeout(timeout);
  }, [realTimeSearch]);

  const handleResetFilter = () => {
    setUsedSearch("");
    setRealTimeSearch({ value: "", isValueTimeout: false });
    setPageSize(INITIAL_PAGE_SIZE);
    setGender(INITIAL_GENDER);
    setPage(INIITAL_PAGE);
  };

  return {
    page,
    setPage,
    realTimeSearch,
    setRealTimeSearch,
    usedSearch,
    pageSize,
    setPageSize,
    gender,
    setGender,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    handleResetFilter,
  };
};

export default useFilterUserState;
