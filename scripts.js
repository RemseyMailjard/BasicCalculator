"use strict";

window.onload = init();

function init() {
  const addBtn = document.getElementById("btnAdd");
  addBtn.onclick = onAddBtnClicked;
}

function onAddBtnClicked() {
  const number1 = Number(document.getElementById("number1Field").value);
  const number2 = Number(document.getElementById("number2Field").value);
  const result = number1 + number2;
  document.getElementById("answerField").value = result;
  //alert("Hi there, you clicked on add!");
}
