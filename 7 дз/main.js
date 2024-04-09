let time = document.getElementById('time');
let count = document.getElementById('count');
let start = document.getElementById('start');
let countPerSecond = document.getElementById('count-per-second');
let restart = document.getElementById('restart');
let countPerMiliSecond = document.getElementById('count-per-mili-second')

let i = 0;
let interval;
let timeout;
let save = 0;
let timeValue = time.value;

function arr (){
    countPerSecond.textContent = i /timeValue
}

time.onchange = (event) =>{
    timeValue = event.target.value;

    if (timeValue < 5){
        timeValue = 5;
        time.value = 5;
    }else if (timeValue > 15){
        timeValue = 15;
        time.value = 15;
    }
    
}

start.onclick = () =>{
    i++;
    count.textContent = i;
    time.disabled = true;
    if (i == 1) {
        interval = setInterval(()=>{
            time.value--
        }, 1000)
        timeout = setTimeout(()=>{
            clearInterval(interval);
            start.disabled = true;
            arr()

        }, timeValue * 1000)
    }
        
}

restart.onclick = () =>{
    clearTimeout(timeout)
    clearInterval(interval)
    i = 0;
    count.textContent = 0;
    countPerSecond.textContent = save;
    time.value = 10;
    start.disabled = false;
    timeValue = 10;
    time.disabled = false;
}
restart.addEventListener('mousedown',()=>{
    save = parseFloat(countPerSecond.textContent)
})