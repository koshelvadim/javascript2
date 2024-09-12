function Greeting() {
    const currentTime = new Date().getHours();
    let message;
    console.log(currentTime);
    
    if (currentTime >= 18) {
        message = 'Добрый вечер'
    } else {
        message = 'Доброе утро'
    }
    return ( <div>{message}</div> );
}

export default Greeting;