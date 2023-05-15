const task = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskListOl = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);
taskListOl.addEventListener('click', (e) => {
    // console.log(e.target.tagName);
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
});

function addTask(){
    const taskName = task.value.trim();
    if(taskName){
        const li = document.createElement('li');
        li.innerHTML = `<span>${taskName}  </span><button>Delete</button>`;
        taskListOl.appendChild(li);
    }
    task.value = '';
}

