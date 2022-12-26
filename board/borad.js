//To Do List
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".writeCreate");
  const writelist = document.querySelector(".writelist");

  let keyCount = 0;

  const addTodo = () => {
    if (input.value.trim() === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    const item = document.createElement("tr");
    const heart = document.createElement("td");
    const text = document.createElement("td");
    const name = document.createElement("td");
    const date = document.createElement("td");

    //문서 객체 식별 키 생성
    const key = keyCount;
    keyCount += 1;

    item.setAttribute("datakey", key);
    item.appendChild(heart);
    item.appendChild(text);
    item.appendChild(name);
    item.appendChild(date);
    writelist.appendChild(item);

    heart.innerHTML = `<input type="checkbox" />`;
    text.textContent = input.value;
    name.textContent = `가뿡보스`;

    const today = new Date();
    const year = ("0" + today.getFullYear()).slice(-2);
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const day = ("0" + today.getDate()).slice(-2);
    date.textContent = `${year}.${month}.${day}`;

    input.value = "";

    if (myName) {
      login.value = myName;
      login.innerHTML = `<strong>${myName}</strong>`;
      if (nickname) {
        nickname.textContent = `${myName}`;
      }
    }
  };

  input.addEventListener("keyup", (event) => {
    //입력 양식에서 Enter 키를 누르면 addTodo() 함수 호출
    const ENTER = 13;
    if (event.keyCode === ENTER) {
      addTodo();
    }
  });
});
