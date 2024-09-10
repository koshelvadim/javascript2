function Greeting({name, age, flag}) {
    return ( 
        <>
            <p>Привет, {name}!</p>
            <p>Тебе {age} лет?</p>
            <p>{flag ? "Petr" : "Ivan"}</p>
        </>
     );
}

export default Greeting;