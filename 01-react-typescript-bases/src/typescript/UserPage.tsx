import { Fragment } from "react";
import { UserRow } from "./UserRow";
import { useUsers } from "../hooks/useUsers";

export const UserPage = () => {
  const { users, nextPage, previousPage } = useUsers();

  return (
    <Fragment>
      <h3>Usuarios:</h3>

      <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Avatar</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user) => <UserRow key={user.id} user={user} />)}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => previousPage()}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Previous Page
        </button>
        <button
          onClick={() => nextPage()}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next Page
        </button>
      </div>
    </Fragment>
  );
};
