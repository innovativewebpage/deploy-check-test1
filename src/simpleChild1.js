function SimpleChild1({ student, toggleProduct }) {
    console.log(student);
    return (
        <div style={{ border: "1px solid brown", padding: "20px" }}>
            <pre>{JSON.stringify(student, null, 2)}</pre>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((stud, index) => (
                        <tr key={stud.id}>
                            <td>{stud.id}</td>
                            <td>{stud.name}</td>
                            <td>{stud.email}</td>
                            <td>
                                <button
                                    onClick={() => toggleProduct(stud)}
                                    type="button"
                                    style={{
                                        background: stud.status ? "green" : "red",
                                        color: "white",
                                        border: "none",
                                        padding: "8px 12px",
                                        borderRadius: "6px",
                                    }}
                                >
                                    {stud.status ? "available" : "unavailable"}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default SimpleChild1;
