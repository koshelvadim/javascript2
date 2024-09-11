import PropTypes from "prop-types";

function Greeting({name, age, flag}) {
    return ( 
        <>
            <p>Привет, {name}!</p>
            <p>Тебе {age} лет?</p>
            <p>{flag ? "Petr" : "Ivan"}</p>
        </>
     );
}

Greeting.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    flag: PropTypes.bool.isRequired
}

export default Greeting;