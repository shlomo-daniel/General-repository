import UsersTable from "./components/usersTable";
import users from "./data/users";

function App() {
  return <UsersTable users={users} />;
}

export default App;
