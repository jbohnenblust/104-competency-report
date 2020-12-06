//get the info from the inputs and store them in vars
let txtTask=document.getElementById("task");

function addTask(){
    if(txtTask.value!=""){
        console.log(txtTask.value);
        document.getElementById("task-list").innerHTML+=`<li>${txtTask.value}</li>`;
        clear();
    } else {
        alert("Please enter a task.");
        clear();
    }
}

function clear(){
    txtTask.value="";
}