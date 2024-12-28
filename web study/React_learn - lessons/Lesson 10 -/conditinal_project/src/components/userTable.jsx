import users from "../data/users";
import UsersTableRow from "./usersTableRow";

function UsersTable() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">name</th>
          <th scope="col">User Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Location</th>
        </tr>
      </thead>

      <tbody>
       {users.map(user=> <UsersTableRow />)}
      </tbody>
    </table>
  );
}

export default UsersTable;
