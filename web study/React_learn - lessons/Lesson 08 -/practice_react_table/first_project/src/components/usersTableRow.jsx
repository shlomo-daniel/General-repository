function UsersTableRow({
  rowNumber,
  user: {
    name: { first, last },
    emails,
    website,
    job: { title },
  },
}) {
  return (
    <>
      <tr>
        <th scope="row">{rowNumber}</th>
        <td>{first}</td>
        <td>{last}</td>
        <td>{emails}</td>
        <td>{title}</td>
        <td>{website}</td>
      </tr>
    </>
  );
}

export default UsersTableRow;
