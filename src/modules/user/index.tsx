import { SearchIcon } from "@heroicons/react/outline";
import Paginate from "@src/components/Paginate";
import {
  GENDER_OPTIONS,
  PAGE_SIZE_OPTIONS,
  TOTAL_USERS,
} from "@src/lib/constants/initialLoad";
import { useAppDispatch, useAppSelector } from "@src/lib/hooks/useRedux";
import { handleFetchUsers } from "@src/modules/user/store/actions/userAction";
import React, { useEffect } from "react";
import useFilterUserState from "@src/lib/hooks/useFilterUserState";
import InputWithLabel from "@src/components/InputWithLabel";
import SelectWithLabel from "@src/components/SelectWithLabel";
import Button from "@src/components/Button";
import DataTable from "@src/components/DataTable";
import columns from "./columns";
import { User } from "@src/typings/user/user";
import Breadcrumbs from "@src/components/Breadcrumbs";

const UserPage: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const { errorUsers, loadingUsers, users } = useAppSelector(
    (state) => state.user
  );

  const {
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
  } = useFilterUserState();

  const hanldeDispatchFetchUsers = () => {
    dispatch(
      handleFetchUsers({
        page: page,
        pageSize: pageSize,
        results: pageSize,
        gender: gender,
        keyword: usedSearch,
        sortBy,
        sortOrder,
      })
    );
  };

  useEffect(() => {
    hanldeDispatchFetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, pageSize, usedSearch, gender]);

  useEffect(() => {
    if (!sortOrder) return;
    hanldeDispatchFetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy, sortOrder]);

  return (
    <>
      <Breadcrumbs currentPage="Users" />
      <div className="grid lg:grid-rows-1 mt-2  lg:grid-cols-8 gap-2 lg:gap-5 items-center flex-col">
        <SelectWithLabel
          options={PAGE_SIZE_OPTIONS}
          name="Show"
          value={pageSize}
          onChange={(e) => setPageSize(parseInt(e.target.value))}
        />
        <InputWithLabel
          className="lg:col-span-3"
          name="Search"
          value={realTimeSearch.value}
          onChange={(e) =>
            setRealTimeSearch({
              ...realTimeSearch,
              value: e.target.value,
              isValueTimeout: true,
            })
          }
          placeholder="Search..."
          SuffixElement={<SearchIcon className="text-white w-5 h-5" />}
        />
        <SelectWithLabel
          name="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          options={GENDER_OPTIONS}
        />

        <Button className="lg:col-span-2" onClick={handleResetFilter}>
          Reset Filter
        </Button>
      </div>
      <div className="overflow-auto w-full mx-auto mt-8 lg:mt-3 h-[58vh] lg:h-[50vh] scrollbar-custom">
        <DataTable
          columns={columns}
          dataRender={users}
          loadingData={loadingUsers}
          errorData={errorUsers}
          setSortBy={setSortBy}
          setSortOrder={setSortOrder}
          rowKey={(row: User) => row.login.uuid}
          handlingError={
            <Button onClick={hanldeDispatchFetchUsers} className="mt-1">
              Refresh
            </Button>
          }
        />
      </div>

      <Paginate
        className="float-right mt-2"
        onChangePage={(selectedPage: number) => setPage(selectedPage)}
        page={page}
        pageSize={pageSize}
        totalItem={TOTAL_USERS}
      />
    </>
  );
};
export default UserPage;
