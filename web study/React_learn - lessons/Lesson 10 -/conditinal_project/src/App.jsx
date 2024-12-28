import UsersTable from "./components/userTable";
import users from "./data/users";

function App() {
  return <UsersTable users={users} />;
}

export default App;
