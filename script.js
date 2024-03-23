let add = document.querySelector(".add");
add.addEventListener("click", addtask)

// function addtask (){   
//     let inp = document.getElementById("input");
//     let todo = document.getElementsByClassName("todo");
//     // console.log(todo[0])
//     if(inp.value !== "" ){

//         todo[0].innerText = inp.value;  
// }else{
//     alert("Please Enter Task")
// }
// }



let h3 = document.createElement("h3");
h3.className = "notask";
let h3text = document.createTextNode("No Task");
h3.appendChild(h3text);
document.querySelector(".alltasks").appendChild(h3);

function addtask() {
    let inp = document.getElementById("input");
    let todo = document.getElementsByClassName("todo");

    // for(let i = 0; i<todo.length; i++)
    // console.log(i)

    // let notask = document.querySelector(".notask");


    if (inp.value !== "" && inp.value.trim() !=="") {
        let list = document.querySelector(".alltasks")
        list.style.height = "auto";
        // console.log(list.children)

        let notask = document.querySelector(".notask");

        if (list.children.length !== 0 && list.hasChildNodes(h3) == true && list.children.length == 1) {
            notask.style.display = "none";

        }
        // else{
        // notask.className = "show";
        // console.log("hhhhhh")


        // }



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



function edittask() {

    let wt = document.querySelector(".todo").innerText;
    let et = prompt("Edit Task", wt);

    if (et !== "") {

        document.querySelector(".todo").innerText = et;
    } else {
        alert("Please write something")
    }
}




function delletTask() {

    let tl = document.querySelector(".tasklist");
    tl.remove();

    let list = document.querySelector(".alltasks")

    let notask = document.querySelector(".notask");

    // console.log(notask)

    if (list.children.length <= 1) {

        // let h3 = document.createElement("h3");
        // h3.className = "notask";
        // let h3text = document.createTextNode("No Task");
        // h3.appendChild(h3text);
        // document.querySelector(".alltasks").appendChild(h3);

        // notask.style.display = "block"
        // let notask = document.querySelector(".notask");
        // notask.className = "show"
        notask.style.display = "block";


    }



    // if(list.children.length !== 0 && list.children.length <=1){
    //     notask.className = "hide";

    //     }

    //     if(list.children.length == 0  || list.children.length <2){
    //         let notask = document.querySelector(".notask");

    // notask.className = "show";
    //     console.log("hhh")
    //     console.log(list.children.length)

    //     }
    //     else{
    //         console.log(list.children.length)
    //     }

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