import UsersTable from "./userTable";

function UsersCheck({ users }) {
  if (!users) {
    return <div className="text-danger fs-2">No users right now</div>;
  }

  return <UsersTable users={users} />;
}

export default UsersCheck;
