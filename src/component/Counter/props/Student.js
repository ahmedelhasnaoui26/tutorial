import React from 'react';

const Student = (props) => {
    const { name, age, children } = props;
    return (
        <div>
            <h4>hello I'm {name} i'm {age} years old</h4>
            <p>{children}</p>
        </div>
    )
}
export default Student;