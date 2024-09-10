import { useState, useEffect } from "react";
import Button from '@mui/material/Button';

function Counter() {

    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if(count > 0) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [count, disabled])
    

    const upCount = () => setCount((prevCount) => prevCount + 1);
    

    const downCount = () => {
        if(count > 0) {
            setCount((prevCount) => prevCount - 1);
        } else {
            return; 
        }
    }

    const resetCount = () => {
        setCount(0);
    }

    return ( 
        <div>
            <Button onClick={upCount} variant="outlined" color="success">+</Button>
            <Button onClick={downCount} variant="outlined" color="error" disabled={disabled}>-</Button>
            <Button onClick={resetCount} variant="outlined">reset</Button>
            <h2>{count}</h2>
        </div>
     );
}

export default Counter;