const addTodoInput = document.getElementById('addTodo'); //add todo input
const plusButton = document.getElementById('plusButton'); //plusbutton press
const clockTarget = document.getElementById("clock-js"); //clock

function addTodo(){
    const todoText = addTodoInput.value.trim();
    if(todoText==""){
        alert("TODO를 입력하세요.");
        return;
    }
    else if(todoText.length > 60){
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
    const clickedElement = event.target; // click event element
    if(clickedElement.classList.contains("todoDelete")){
        deleteTodo(clickedElement);
    }
    else if(clickedElement.type==="checkbox"){
        handleCheckBoxClick(clickedElement);
    }
}
function deleteTodo(deleteButton){//Todo 지움
    const todoCard = deleteButton.parentElement;
    const todoCards = document.querySelector(".todoCards");
    todoCards.removeChild(todoCard);
}
function handleCheckBoxClick(checkedElement){
    const todoCard = checkedElement.parentElement;
    const todoElem = todoCard.querySelector(".todoElem");
    if(checkedElement.checked){ // checked opacity는 css
        todoCard.classList.add("checked");
        todoCard.style.order = "2"; //체크된 항목 아래로
        todoElem.style.textDecoration= "line-through"; //취소선 긋기
    }
    else{
        todoCard.classList.remove("checked");
        todoCard.style.order = "1"; //체크되지 않은 항목 위로
        todoElem.style.textDecoration= "none";
    }
    const todoList=Array.from(todoCards.children); // list를 통해 sort, checked와 아닌거 구분
    todoList.sort((a,b)=> a.style.order - b.style.order);
    todoList.forEach((todo)=>{
        todoCards.appendChild(todo);
    })
};
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