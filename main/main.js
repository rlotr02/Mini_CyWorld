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

//색상 변경
const changeColor = (target) => {
  const bgColor = document.querySelectorAll(".backgroundSection");
  const markColor = document.querySelectorAll(".menu");
  const homeColor = document.querySelectorAll("aside input");
  const heartColor = document.querySelectorAll(".heartColor");

  bgColor.forEach((section) => {
    const val = target.value;
    section.style.backgroundColor = `${val}`;
  });

  markColor.forEach((div) => {
    const val =
      target.options[target.selectedIndex].getAttribute("data-color1");
    div.style.backgroundColor = `${val}`;
  });

  homeColor.forEach((div) => {
    const val =
      target.options[target.selectedIndex].getAttribute("data-color2");
    div.style.backgroundColor = `${val}`;
    const val2 =
      target.options[target.selectedIndex].getAttribute("data-color3");
    div.style.border = `2px solid ${val2}`;
  });

  heartColor.forEach((span) => {
    const val =
      target.options[target.selectedIndex].getAttribute("data-color4");
    span.textContent = `${val}`;
  });
};

//현재 날짜 변경
document.addEventListener("DOMContentLoaded", () => {
  const date = document.querySelector(".date");

  const today = new Date();
  const year = ("0" + today.getFullYear()).slice(-2);
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);

  date.textContent = `${year}.${month}.${day}`;
});

//키보드 이벤트(keydown)
document.addEventListener("DOMContentLoaded", () => {
  //그림 초기 설정
  const img = document.querySelector(".quokkaImg");
  img.style.position = "absolute";

  //그림의 이동을 출력하는 기능
  let [x, y] = [19, 9.8];
  const block = 20;
  const print = () => {
    img.style.left = `${x * block}px`;
    img.style.top = `${y * block}px`;
  };
  print();

  // 그림을 이동하는 기능
  const [left, right] = [37, 39];
  document.body.addEventListener("keydown", (event) => {
    switch (event.keyCode) {
      case left:
        x -= 1;
        break;
      case right:
        x += 1;
        break;
    }
    print();
  });
});

//맨 위로 스크롤
const ScrollUp = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
