//마우스 이벤트
document.addEventListener("DOMContentLoaded", () => {
  const login = document.querySelector(".navLogin");
  const nickname = document.querySelector(".nameSection span");

  const myName = window.name;

  if (myName) {
    login.value = myName;
    login.innerHTML = `<strong>${myName}</strong>`;
    if (nickname) {
      nickname.textContent = `${myName}`;
    }
  }

  login.addEventListener("click", (event) => {
    const name = prompt("이름을 입력하세요", "가뿡보스");
    alert(`${name}님 안녕하세요`);
    login.innerHTML = `<strong>${name}</strong>`;
    window.name = `${name}`;
  });
});

//현재 날짜 변경
document.addEventListener("DOMContentLoaded", () => {
  const date = document.querySelector(".todayDate");
  const dateWeek = document.querySelector(".todayWeek");

  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  const weekday = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const week = weekday[today.getDay()];

  date.textContent = `${year}년 ${month}월 ${day}일`;
  dateWeek.textContent = `${week}`;
});

//To Do List
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".todoCreate");
  const todoList = document.querySelector(".todolist");

  let keyCount = 0;

  const addTodo = () => {
    if (input.value.trim() === "") {
      alert("할 일을 입력해주세요.");
      return;
    }

    const item = document.createElement("div");
    const checkbox = document.createElement("input");
    const text = document.createElement("span");
    const button = document.createElement("button");

    //문서 객체 식별 키 생성
    const key = keyCount;
    keyCount += 1;

    item.setAttribute("datakey", key);
    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(button);
    todoList.appendChild(item);

    checkbox.type = "checkbox";
    checkbox.addEventListener("change", (event) => {
      item.style.color = event.target.checked ? "#B9B9B9" : "rgb(80, 79, 79)";
    });

    text.textContent = input.value;

    button.innerHTML = "<img src='../img/trash.svg'>&nbsp;";
    button.addEventListener("click", () => {
      removeTodo(key);
    });

    input.value = "";
  };

  const removeTodo = (key) => {
    //식별 키로 문서 객체 제거
    const item = document.querySelector(`[datakey="${key}"]`);
    todoList.removeChild(item);
  };

  input.addEventListener("keyup", (event) => {
    //입력 양식에서 Enter 키를 누르면 addTodo() 함수 호출
    const ENTER = 13;
    if (event.keyCode === ENTER) {
      addTodo();
    }
  });
});

//플러스 버튼 눌렀을 때 입력창 띄우기
document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector(".addBtn");
  const todoDiv = document.querySelector(".todoDiv");

  addButton.addEventListener("click", (event) => {
    if (todoDiv.style.display === "none") {
      todoDiv.style.display = `flex`;
      addButton.style.transform = `rotate(44deg)`;
    } else {
      todoDiv.style.display = `none`;
      addButton.style.transform = `rotate(90deg)`;
    }
  });
});
