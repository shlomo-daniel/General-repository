import UsersTableRow from "./usersTableRow";

function UsersTable({ users }) {
  return (
    <table className="table table-dark table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Job</th>
          <th scope="col">Website</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, i) => (
          <UsersTableRow key={user.objectId} rowNumber={i + 1} user={user} />
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
