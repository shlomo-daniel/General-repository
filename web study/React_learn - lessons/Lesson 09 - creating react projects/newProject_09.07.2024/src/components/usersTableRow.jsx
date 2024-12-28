function UsersTableRow({
  user: { status, name, username, emails, phoneNumber, location },
  userRow,
}) {
  return (
    <tr>
      <th scope="row">{userRow}</th>
      <td>{status === "active" ? "🟢" : "🔴"}</td>
      <td>{`${name.first} ${name.last}`}</td>
      <td>{username}</td>
      <td>{emails}</td>
      <td>{phoneNumber[0]}</td>
      <td>{`${location.street}, ${location.city}`}</td>
    </tr>
  );
}

export default UsersTableRow;
