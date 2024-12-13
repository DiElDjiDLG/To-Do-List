const container = document.getElementById('container');
const taskInput = document.getElementById('task-input');

const btnContainer = document.getElementById('btn-container')
const addBtn = document.getElementById('add-btn');
const cancelBtn = document.getElementById('cancel-btn');

const taskContainer = document.getElementById('task-container');
const showHideTasksBtn = document.getElementById('show-hide-tasks-btn');
const taskList = document.getElementById('task-list');

//Function to add the task to the taskList
const addTask = () => {

    let randomId = self.crypto.randomUUID();

    if (taskInput.value === '') {
        alert("Please enter a task.");
        return;
    }
    
    //Create the task with the appropiate buttons
    const newTask = document.createElement('div');
    newTask.textContent = taskInput.value;
    newTask.setAttribute('id', randomId);
    newTask.style.width = '200px';
    newTask.style.fontSize = '1.5em';

    const rmBtn = document.createElement('button');
    const doneBtn = document.createElement('button');
    rmBtn.textContent = "Remove";
    rmBtn.style.margin = '5px';
    doneBtn.textContent = "Done";
    doneBtn.style.margin = '5px';

    taskList.appendChild(newTask);
    taskList.appendChild(doneBtn);
    doneBtn.classList = "btn btn-success";
    taskList.appendChild(rmBtn);
    rmBtn.classList = "btn btn-danger";

    taskInput.value = '';
    rmBtn.addEventListener('click', () => rmTask(newTask, rmBtn, doneBtn));
    doneBtn.addEventListener('click', () => doneTask(newTask, doneBtn));
}

//Disables done tasks
const doneTask = (task, doneBtn) => {
    task.style.textDecoration = "line-through";
    doneBtn.disabled = true;
}

//Removes the task when you click on the remove button
const rmTask = (task, rmBtn, doneBtn) => {
    taskList.removeChild(task);
    taskList.removeChild(rmBtn);
    taskList.removeChild(doneBtn);
}

//Show / hide tasks
addBtn.addEventListener('click', addTask);
showHideTasksBtn.addEventListener('click', () => {
    if (taskList.style.display === 'inline-block') {
        taskList.style.display = 'none';
        showHideTasksBtn.textContent = 'Show tasks';
    } else {
        taskList.style.display = 'inline-block';
        showHideTasksBtn.textContent = 'Hide tasks';
    }
})

cancelBtn.addEventListener('click', () => {
    taskInput.value = '';
});