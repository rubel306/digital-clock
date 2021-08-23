function digitalClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeFormat = 'AM';
    if(hours == 0){
        hours = 12
    }
    if(hours > 12){
        hours = hours - 12;
        timeFormat = "PM"
    }

    //using ternary operator 
    hours = hours < 10 ? '0' + hours : hours; 
    // if( hours < 10 || minutes  < 10 || seconds < 10 ){
    //     hours = '0' + hours;
    // }

    minutes = minutes < 10 ? '0' + minutes : minutes;
    // if( minutes  < 10){
    //     minutes = '0' + minutes;
    // }
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // if( seconds < 10 ){
    //     seconds = '0' + seconds;
    // }
    
    let finalTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').innerText = finalTime;
    document.getElementById('format').innerText = timeFormat;

    setInterval(digitalClock, 1000);
}

digitalClock();