
function UserTableRow({ userName, email, address, bio, nickName }) {
    return <tr>
        <th scope="row">1</th>
        <td>{userName}</td>
        <td>{email}</td>
        <td>{address}</td>
        <td>{bio}</td>
        <td>{nickName}</td>
    </tr>
}

export default UserTableRow;
