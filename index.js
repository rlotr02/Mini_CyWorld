/*
document.addEventListener("DOMContentLoaded", () => {
  //문서 객체 생성
  const p1 = document.querySelector(".p1");
  const p2 = document.querySelector(".p2");
  const newButton = document.createElement("button");

  //생성한 태그 변경
  newButton.textContent = "N";
  newButton.style.fontWeight = "bold";
  newButton.style.color = "white";
  newButton.style.backgroundColor = "pink";
  newButton.style.border = "none";
  newButton.style.borderRadius = "5px";
  newButton.style.width = "19px";
  newButton.style.height = "19px";

  //문서 객체 이동
  const toFirst = () => {
    //newButton 태그를 p1 태그 아래에 추가
    p1.appendChild(newButton);
    setTimeout(toSecond, 1200);
  };
  const toSecond = () => {
    //newButton 태그를 p2 태그 아래에 추가
    p2.appendChild(newButton);
    //문서 객체 제거
    p2.removeChild(newButton);
    setTimeout(toFirst, 1200);
  };
  toFirst();
});
*/
