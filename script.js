const addTodoInput = document.getElementById('addTodo'); //add todo input
const plusButton = document.getElementById('plusButton'); //plusbutton press
const clockTarget = document.getElementById("clock-js"); //clock

function addTodo(){
    const todoText = addTodoInput.value.trim();
    if(todoText==""){
        alert("TODO를 입력하세요.");
        return;
    }
    else if(todoText.length > 80){
        alert("80자 이하로 입력해주세요.");
        return;
    }
    //todo card 추가
    const todoCards= document.querySelector(".todoCards");
    const todoCard = document.createElement("div");
    todoCard.classList.add("todoCard");

    const todoElem = document.createElement("div");
    todoElem.classList.add("todoElem");
    todoElem.textContent = todoText;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const todoDelete = document.createElement("button");
    todoDelete.classList.add("todoDelete");
    todoDelete.textContent = "X";

    todoCard.appendChild(todoElem);
    todoCard.appendChild(checkbox);
    todoCard.appendChild(todoDelete);

    todoCards.appendChild(todoCard);

    addTodoInput.value="";
}
function handleClick(event){//click 핸들러
    const clickedElement = event.target;
    if(clickedElement.classList.contains("todoDelete")){
        deleteTodo(clickedElement);
    }
    else if(clickedElement.classList.contains("checkbox")){
        //체크박스 시 밑으로 내리기(local로 처리하든 정렬해야될듯)
    }
}
function deleteTodo(deleteButton){//Todo 지움
    const todoCard = deleteButton.parentElement;
    const todoCards = document.querySelector(".todoCards");
    todoCards.removeChild(todoCard);
}
//plusButton과 add Todo enter 클릭 이벤트 핸들러
plusButton.addEventListener('click',addTodo);
addTodoInput.addEventListener("keyup", (e)=>{
    if(e.key === "Enter"){
        addTodo();
    }
})
//deleteButton 이벤트핸들러
const todoCards = document.querySelector(".todoCards");
todoCards.addEventListener("click",handleClick);
// clock 출력
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