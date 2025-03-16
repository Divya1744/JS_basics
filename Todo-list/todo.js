let sub = document.getElementById('submit');
let task = document.getElementById('addTask');
let todoList = document.getElementById('todoList');

let list = new Array();
sub.addEventListener('click',(event)=>{
    list.push(task.value);
    
    todoList.innerHTML += '<li id="'+(list.length-1)+'">'+addTask.value+'</li>'
    task.value=' ';
})


 