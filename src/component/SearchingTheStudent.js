import React from 'react'

// export default 
function SearchingTheStudent() {
    const oneStudent = {
        firstName: "Divine",
        lastName: "Alex",
        Age: 22,
    };
    
    const studentList = [
        {
            firstName: "Eric",
            lastName: "Munezero",
            id: 25287
        },
        {
            firstName: "Gigi",
            lastName: "Teta", 
            id: 26325
        },
    ];

    return (
    <div>
        <h1>
            The name of one student is {oneStudent.firstName} <br />
            as first Name and {oneStudent.lastName} as Last Name
        </h1>
        
        <h2>Student List:</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
            {studentList.map((student, index) => (
                <div key={student.id || index} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                    <h3>{student.firstName} {student.lastName}</h3>
                    <p>ID: {student.id}</p>
                </div>
            ))}
        </div>
    </div>
)
    
}