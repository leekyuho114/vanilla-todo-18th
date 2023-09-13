const addTodo = document.getElementById('addTodo');
const plusButton = document.getElementById('plusButton');

plusButton.addEventListener('click',()=>{
    console.log("clicked");
})

// clock 출력
const clockTarget = document.getElementById("clock-js");
function clock(){
    const date = new Date();
    const month = date.getMonth();
    const clockDate = date.getDate();
    const day = date.getDay();
    const week = ['일','월','화','수','목','금','토'];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTarget.innerText=`${month+1}/${clockDate} ${week[day]}요일 ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ?  `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;//두자릿수 유지를 위한 삼항연산자
}

function init(){
    clock();
    setInterval(clock,1000);
}

init();