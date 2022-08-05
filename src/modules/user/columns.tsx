import { Column } from "@src/components/DataTable";
import { User } from "@src/typings/user/user";
import { formatISOStringDate } from "@src/lib/utils/formatDate";

const columns: Column[] = [
  {
    id: "username",
    header: "Username",
    isSortable: true,
    sortKey: "username",
    cell: (row: User) => <>{row.login.username}</>,
  },
  {
    id: "name",
    header: "Name",
    isSortable: true,
    sortKey: "name",
    cell: (row: User) => (
      <>
        {row.name.first} {row.name.last}
      </>
    ),
  },
  {
    id: "email",
    header: "Email",
    isSortable: true,
    sortKey: "email",
    cell: (row: User) => <>{row.email}</>,
  },
  {
    id: "gender",
    header: "Gender",
    isSortable: true,
    sortKey: "gender",
    cell: (row: User) => <>{row.gender}</>,
  },
  {
    id: "registered-date",
    header: "Registered Date",
    isSortable: true,
    sortKey: "registeredDate",
    cell: (row: User) => <>{formatISOStringDate(row.registered.date)}</>,
  },
];

export default columns;
