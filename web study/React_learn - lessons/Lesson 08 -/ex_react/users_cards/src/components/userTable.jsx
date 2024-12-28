import UserTableRow from "./userTableRow";


function UserTable() {
    return <table className="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Bio</th>
                <th scope="col">Nickname</th>
            </tr>
        </thead>
        <tbody>
            <UserTableRow userName={"gorge"} email="ghjj@jg.com" address="kfar chabad" bio="learner" nickName="Gogi" />

        </tbody>
    </table>


}
export default UserTable;