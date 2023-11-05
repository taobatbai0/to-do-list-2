// get form and task list Element
const form = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

function addTask(){
    const date = document.getElementById("task-date").value;
    const time = document.getElementById("task-time").value;
    const details = document.getElementById("task-details").value;

    if(date === ''){
        alert('You didnt select the date');
    }else if(time === ''){
        alert('You didnt s  elect the time')
    }else if(details === ''){
        alert('You must write something');
    }else{
    let li = document.createElement('li');
    li.innerHTML = `Date: ${date}<br>Time: ${time}<br>Details: ${details}`;
    taskList.appendChild(li)
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    }

    saveData();
}

taskList.addEventListener('click', e =>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask(){
    taskList.innerHTML = localStorage.getItem('data');
}
showTask();