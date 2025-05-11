// inputBox：通过 getElementById("input-box") 
  // 获取具有 id="input-box" 的元素，通常是一个输入框.
// listContainer：通过 getElementById("list-container") 
  // 获取具有 id="list-container" 的元素.
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
console.log(listContainer.innerHTML);

function addTask() {
  if(inputBox.value === '') {
    alert("You must write something!");
  }
  // addTask()：这是一个函数，目的是在用户输入任务并点击按钮后，检查输入框是否为空。
  // 如果不为空，则创建一个新的任务列表项并将其添加到页面中。

  else {
    // 如果输入框中有内容，创建一个新的列表项元素（<li>）：
    let li = document.createElement("li");
    // 将输入框的内容（inputBox.value）作为该列表项的文本：
    li.innerHTML = inputBox.value;
    // 将新创建的列表项添加到 listContainer 中：
    listContainer.appendChild(li);

    // 这段代码用来在每个任务项后添加一个 删除按钮。
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  // 最后，清空输入框，以便用户可以输入新的任务：
  inputBox.value = "";
  saveData();
  console.log(listContainer.innerHTML);
}

listContainer.addEventListener("click", function(e){
  // e.target 是事件的目标元素，即被点击的元素。
  if(e.target.tagName === "LI") {
    // classList.toggle("checked") 方法
    // 会检查该列表项（<li>）是否已经包含 checked 类。
    // 如果有，就移除它；如果没有，就添加它。
    e.target.classList.toggle("checked");
    saveData();
    console.log(listContainer.innerHTML);
  }
  else if(e.target.tagName === "SPAN") {
    // e.target.parentElement 获取的是
    // 该 span 元素的父元素，也就是包含删除按钮的 li 列表项。
    e.target.parentElement.remove();
    saveData();
    console.log(listContainer.innerHTML);
  }
},false);

function saveData() {
  // localStorage.setItem() 方法
  // 将数据存储在浏览器中，以便在浏览器关闭后重新打开时仍然存在。
  localStorage.setItem("data", listContainer.innerHTML);

  // "data" 是一个键（key），用来存储和访问 localStorage 中的数据。
  // 在这段代码中，它存储了任务列表的 HTML 内容（即 listContainer.innerHTML）。
}

// localStorage 是浏览器提供的一个 Web 存储接口，用于在用户的浏览器中存储数据。
// 数据是持久存储的，即使浏览器关闭，数据也会保留。
function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showList();
// 这意味着每当页面加载时，都会尝试恢复之前存储在 localStorage 中的任务列表。