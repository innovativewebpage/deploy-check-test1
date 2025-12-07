export default function UserChild1({ Users }) {
    return (
        <>
            <div Style={{ margin: "0 auto" }}>
                <table border="1" cellPadding={10} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.address.street},{user.address.city},{user.address.zipcode}
                                </td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        </>
    );
}
