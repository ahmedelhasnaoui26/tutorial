import React, { useState } from 'react';


const Counter = () => {
    const [count, setCount] = useState(0);

    const ClickDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <div>
            <h2>welcome to my counter</h2>
            <p>My Count is : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={ClickDecrement}>decrement</button>
        </div>
    )
}
export default Counter;