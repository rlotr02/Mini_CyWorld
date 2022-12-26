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

//맨 위로 스크롤
const ScrollUp = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
