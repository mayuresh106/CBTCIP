document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const completedList = document.getElementById('completed-list');

    addBtn.addEventListener('click', () => {
        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            todoInput.value = '';
        }
    });

    todoInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        li.appendChild(taskContent);
        
        const timestamp = document.createElement('span');
        timestamp.classList.add('timestamp');
        timestamp.textContent = getCurrentDateTime();
        li.appendChild(timestamp);

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.classList.add('complete-btn');
        completeBtn.addEventListener('click', () => {
            completeTask(li);
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            li.parentNode.removeChild(li);
        });

        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }

    function completeTask(taskItem) {
        taskItem.classList.add('completed');
        taskItem.querySelector('.timestamp').textContent = `Completed: ${getCurrentDateTime()}`;
        taskItem.removeChild(taskItem.querySelector('.complete-btn'));
        completedList.appendChild(taskItem);
    }

    function getCurrentDateTime() {
        const now = new Date();
        return `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    }
});
