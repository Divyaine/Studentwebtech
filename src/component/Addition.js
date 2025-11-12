

import React from 'react'

function Addition() {
    let studentMarks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let totalSum = studentMarks.map((a) => a * a).reduce((sum, curr) => sum + curr, 0);

    return (
        <div>
            <h1>This is the page to add numbers</h1>
            <p>This is the total doubled marks {totalSum}</p>
            <h2></h2>
            <ul>
            {
                studentMarks.map((oneStudent) =>(
                    <li key={oneStudent}>{oneStudent}</li>
                ))
            }
                <li>

                </li>
            </ul>
        </div>
    )
}

export default Addition