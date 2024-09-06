import {useState} from "react";

function GetCount({data}) {
    
    const [count, setCount] = useState(0);

    const updateCountUp = () => {
        setCount(count + 1);
    }
    const updateCountDown = () => {
        setCount(count - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return ( 
        <div>
            <p>Счетчик №{data}, значение:{count}</p>
            <button onClick={updateCountUp}>+</button>
            <button onClick={updateCountDown}>-</button>
            <button onClick={resetCount}>сброс</button>
        </div>
     );
}

export default GetCount;