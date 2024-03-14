import React, {useState}  from 'react'
// Counter component
function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
      };
    const decrement = () => {
        setCount(count - 1);
      };
    const reset = () => {
        setCount(0);
      };
  return (
    <div>
        <div>
            <h2>Counter</h2>
            <div>
                <div>
                    Değer: {count}
                </div>
                <br></br>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
        <hr></hr>
    </div>
  )
}

export default Counter