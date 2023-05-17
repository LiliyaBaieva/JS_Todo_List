const task = document.getElementById('taskInput');
// const addTaskButton = document.getElementById('addTask');
const taskListul = document.getElementById('taskList');
const checkbox = document.getElementById('checkbox');
// получаем форму по селектору
const form = document.querySelector("#form");

// вешаем обработчик события на форму
form.addEventListener('submit', (e) => {
    // e.preventDefault() нужен чтоб отменить поведение формы по умолчанию
    e.preventDefault();
    addTask();
  })
// addTaskButton.addEventListener('click', addTask);
// addTaskButton.addEventListener('keydown', (e) => {
//     if(e.key = 'Enter'){
//         addTask;
//     }
// })

taskListul.addEventListener('click', (e) => {
    // console.log(e.target);
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
    if(e.target.checked){
        // console.log('checked');
        e.target.parentElement.style = 'text-decoration: line-through';
    } else {
        e.target.parentElement.style = !'text-decoration: line-through';
    }

});

function addTask(){
    const taskName = task.value.trim();
    if(taskName){
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" id="checkbox"><span>${taskName}</span><button>Delete</button>`;
        taskListul.appendChild(li);
    }
    task.value = '';
}







// addTaskButton.addEventListener('click', addTask);
// addTaskButton.addEventListener('keydown', (e) => {
//     if(e.key = 'Enter'){
//         addTask;
//     }
// })


