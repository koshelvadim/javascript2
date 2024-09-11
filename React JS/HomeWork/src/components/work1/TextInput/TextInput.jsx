import { useState } from "react";



function TextInput() {

    const [value, setValue] = useState('')

    const changeValue = (e) => {
        setValue(e.target.value)
    }

    return ( 
    <div>
        <input type="text" value={value} onChange={changeValue} />
        <span>{value}</span>
    </div> 
    );
}

export default TextInput;