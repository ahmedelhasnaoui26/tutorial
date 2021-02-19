import React from 'react';
//import StudentName from '../props/StudentName'

export const Render = () => {
    const StudentName = [];
    return (
        <div>
            {
                (StudentName.map((student) => {
                    return (
                        <ul>
                            <li>{student.name}</li>
                        </ul>
                    )
                }))
            }
        </div>
    )
}

