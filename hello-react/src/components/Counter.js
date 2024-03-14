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
  return (
    <div>
        <div>
            <h2>Counter</h2>
            <div>
                <div>
                    Değer: {count}
                </div>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </div>
        </div>
    </div>
  )
}

export default Counter