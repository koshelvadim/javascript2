import { useState } from "react";

function Show() {
    const [block, setBlock] = useState()

    const toggleShow = () => {
      setBlock(!block);
    };

    return ( 
        <div>
            <button onClick={toggleShow}>нажми меня</button>
            <p style={{display: block ? 'block' : 'none'}}>скрываемый текст</p>
        </div>
     );
}

export default Show;