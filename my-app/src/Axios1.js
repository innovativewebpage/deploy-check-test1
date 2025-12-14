import React, { useState } from "react";
export default function Axios() {
    const [empName, setName] = useState("");

    const handleSubmit = async (e) => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/employee/create1",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ empName }),
                }
            );
            const data = await response.json();
            if (!response.ok) {
                throw new Error("internal server Error");
            }
            console.log(data);
            //setName(data);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <input
                type="text"
                value={empName}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
}
