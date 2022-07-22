// for alerting for empty input
document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("please enter the task...");
  }
  // adding a new task
  else {
    document.querySelector("#tasks").innerHTML += `
        <div class="taskContainer"> 
        <div class="task" id='input'>
${(inputText = document.querySelector("#inputField").value)} 
</div>
<button class= "complete-btn">Completed</button>
<button class=" delete-btn">delete</button>
</div>
`;

    // deleting the item
    var current_tasks = document.querySelectorAll(".delete-btn");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    //completed or line through

    document.addEventListener("click", function (event) {
      if (event.target.className === "complete-btn") {
        const removeItem = event.target.parentNode.childNodes[1];
        console.log(removeItem);
        if (removeItem.classList.contains("strikeh")) {
          removeItem.classList.remove("strikeh");
        } else {
          removeItem.classList.add("strikeh");
        }
      }
    });

    // var complete = document.querySelectorAll(".complete-btn");
    // for (var i = 0; i < complete.length; i++) {
    //     complete[i].onclick = function () {
    //  const node = this.parentNode.childNodes[1];
    //  console.log(node);
    //     node.style.textDecoration =('line-through solid 5px black');
    //   };
    // }
  }
};
