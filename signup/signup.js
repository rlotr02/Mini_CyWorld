//문서 객체 스타일 변경
document.addEventListener("DOMContentLoaded", () => {
  const color = document.querySelectorAll("fieldset");
  color.forEach((div) => {
    div.style.backgroundColor = `#ffe0e3`;
  });
});

//글자 입력 양식 이벤트(radio)
document.addEventListener("DOMContentLoaded", () => {
  const output = document.querySelector("#output");
  const radios = document.querySelectorAll("[name=choice]");

  radios.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      const current = event.currentTarget;
      if (current.checked) {
        output.innerHTML = `<strong>가뿡이</strong>님께 ${current.value}를 신청합니다`;
      }
    });
  });
});

//글자 입력 양식 이벤트(select)
document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector("#city");
  const span = document.querySelector("#textCity");

  select.addEventListener("change", (event) => {
    const options = event.currentTarget.options;
    const index = event.currentTarget.options.selectedIndex;

    if (index === 0) {
      span.textContent = `저도 ${options[index].textContent}에 살아요!`;
    } else {
      span.textContent = `${options[index].textContent}에 사는구나~`;
    }
  });
});

//글자 입력 양식 이벤트(text, cm 단위 변환)
document.addEventListener("DOMContentLoaded", () => {
  let height;
  let constant = 10;

  const select = document.querySelector(".heights");
  const input = document.querySelector(".cmHeight");
  const span = document.querySelector(".textHeight");

  const calculate = () => {
    span.textContent = (height * constant).toFixed(2);
  };

  select.addEventListener("change", (event) => {
    const options = event.currentTarget.options;
    const index = event.currentTarget.options.selectedIndex;
    constant = Number(options[index].value);
    calculate();
  });

  input.addEventListener("keyup", (event) => {
    height = Number(event.currentTarget.value);
    calculate();
  });
});

//글자 입력 양식 이벤트(checkbox, 타이머)
document.addEventListener("DOMContentLoaded", () => {
  let [timer, timerId] = [0, 0];
  const time = document.querySelector(".timer");
  const checkbox = document.querySelector(".time");

  checkbox.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {
      timerId = setInterval(() => {
        timer += 0.1;
        time.textContent = `${timer}초`;
      }, 100);
    } else {
      clearInterval(timerId);
    }
  });
});

//글자 입력 양식 이벤트(text)
document.addEventListener("DOMContentLoaded", () => {
  const submit = document.querySelector("#submit");

  submit.addEventListener("click", (event) => {
    alert(document.getElementById("text").value + "님 등록해주셔서 감사해요!");
  });
});

//키보드 이벤트(keyup)
document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.querySelector("textarea");
  const count = document.querySelector(".countText");
  count.style.fontSize = "15px";
  count.style.display = "inline";

  textarea.addEventListener("keyup", (event) => {
    const length = textarea.value.length;
    count.textContent = `${length}`;
  });
});

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
