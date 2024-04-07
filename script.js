let add = document.querySelector(".add");
add.addEventListener("click", addtask)


let h3 = document.createElement("h3");
h3.className = "notask";
let h3text = document.createTextNode("No Task");
h3.appendChild(h3text);
document.querySelector(".alltasks").appendChild(h3);

function addtask() {
    let inp = document.getElementById("input");
    let todo = document.getElementsByClassName("todo");


    if (inp.value !== "" && inp.value.trim() !=="") {
        let list = document.querySelector(".alltasks")
        list.style.height = "auto";
        // console.log(list.children)

        let notask = document.querySelector(".notask");

        if (list.children.length !== 0 && list.hasChildNodes(h3) == true && list.children.length == 1) {
            notask.style.display = "none";

        }
   


        let div = document.createElement("div");
        div.className = "tasklist";

        let p = document.createElement("p");
        p.className = "todo";
        let ptext = document.createTextNode(inp.value);
        p.appendChild(ptext);
        div.appendChild(p);


        let editbtn = document.createElement("button");
        editbtn.className = "edit";
        let atext = document.createTextNode("Edit");
        editbtn.appendChild(atext);
        div.appendChild(editbtn)
        editbtn.addEventListener("click", edittask)


        let delletbtn = document.createElement("button");
        delletbtn.className = "dellet";
        let dtext = document.createTextNode("Dellet");
        delletbtn.appendChild(dtext);
        div.appendChild(delletbtn);
        list.appendChild(div);
        delletbtn.addEventListener("click", delletTask)

        inp.value = "";

        // todo[0].innerText = inp.value;  
    } else {
        alert("Please Enter Task")
    }
}





// edit task 
let list = document.querySelector(".alltasks")
// console.log(list.children)
function edittask(event) {

    let taskToEdit = event.target.parentNode.querySelector(".todo");

    let wt = taskToEdit.innerText;
    let et = prompt("Edit Task", wt);

    if (et !== "") {

        taskToEdit.innerText = et;
    } else {
        alert("Please write something")
    }
}

// dellet Task 

function delletTask(event) {
    let taskToDelete = event.target.parentNode;
    taskToDelete.remove();

    let list = document.querySelector(".alltasks");
    let notask = document.querySelector(".notask");

    if (list.children.length <= 1) {
        notask.style.display = "block";
    }
}


// console.log(list.children.length)


let delletalltasks = document.querySelector(".delletall");
delletalltasks.addEventListener("click", delletall);

function delletall() {

    let list = document.querySelector(".alltasks")
    // list.children.remove()



    while (list.firstChild) {

        list.firstChild.remove();
    }


    let h3 = document.createElement("h3");
    h3.className = "notask";
    let h3text = document.createTextNode("No Task");
    h3.appendChild(h3text);
    document.querySelector(".alltasks").appendChild(h3);


}
