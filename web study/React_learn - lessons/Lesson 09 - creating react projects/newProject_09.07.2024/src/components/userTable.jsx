import users from "../data/users";
import UsersTableRow from "./usersTableRow";

function UsersTable() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Status</th>
          <th scope="col">Name</th>
          <th scope="col">User Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Location</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, i) => (
          <UsersTableRow key={user.objectId} user={user} userRow={i + 1} />
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
