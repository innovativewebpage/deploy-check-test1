import React, { useState } from "react";
import SimpleChild1 from "./simpleChild1";



const studentData = [
    { id: "1", name: "omar", email: "omar88@gmail.com", status: true },
    { id: "2", name: "rizwan", email: "rizwan88@gmail.com", status: false },
];

function Student() {


    const [student, setStudent] = useState(studentData);

    const toggleProduct = (product) => {
        setStudent(
            student.map((std) =>
                std.id === product.id ? { ...std, status: !std.status } : std
            )
        );
    };

    return (
        <>
            <SimpleChild1 student={student} toggleProduct={toggleProduct} />
        </>
    );
}

export default Student;
