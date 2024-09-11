import "./currentTime.css"

function CurrentTime() {
    const time = new Date().toLocaleTimeString();
    return ( 
    <h3 className="current__time">{time}</h3> 
    );
}

export default CurrentTime;