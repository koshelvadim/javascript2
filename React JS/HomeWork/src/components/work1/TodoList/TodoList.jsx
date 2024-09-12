import { useState } from "react";

function TodoList() {
    

    const [array, setArray] = useState([]);
    const [value, setValue] = useState('');

    const buttonClick = () => {
        if (value.trim() !== '') {
            const newArray = [...array, {value: value, id: crypto.randomUUID()}]; // Date.now()
            setValue('');
            setArray(newArray);
        }
        setValue('');
    }

    const inputHandler = (e) => {
        if (e.target.value.trim() === '') {
            return;
        }
        setValue(e.target.value);
    }

    return ( 
        <div>
            <input type="text" value={value} onChange={inputHandler} /> 
            <button onClick={buttonClick}>todo</button>

            <ol>
                {array.map((item) => <li key={item.id}>{item.value}</li>)}
            </ol>
        </div>
        );
}

export default TodoList;