const tasksDOM = document.querySelector('.tasks');
const loadingDOM = document.querySelector('.loading-text');
const formDOM = document.querySelector('.task-form');
const taskInputDOM = document.querySelector('.task-input');
const formAlertDOM = document.querySelector('.form-alert');
//load tasks from API
const showTasks = async () => {
    loadingDOM.style.visibility = 'visible'
    try {
        const {
            data: { tasks },
        } = await axios.get('/api/v1/tasks')
        if (tasks.length < 1) {
            tasksDOM.innerHTML = '<h5 class="empty-list">No tasks in your list</h5>'
            loadingDOM.style.visibility = 'hidden'
            return
        }
        const allTasks = tasks
            .map((task) => {
                const { completed, _id: taskID, name } = task
                return `<div class="single-task ${completed && 'task-completed'}">
                <h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
                <div class="task-links">
                
                <!-- edit link -->
                <a href="task.html?id=${taskID}" class="edit-link">
                <i class=" fas fa-edit"></i>
                </a>
                <!-- delete btn -->
                <button type="button" class="delete-btn" data-id="${taskID}">
                <i class="fas fa-trash"></i>
                </button>
                </div>
                </div>`
            })
            .join('')
            tasksDOM.innerHTML = allTasks
    } catch (error) {
        tasksDOM.innerHTML = 
        '<h4 class="empty-list">There Was An Error, Please Try Again Later...</h4>'
    }
    loadingDOM.style.visibility = 'hidden'
}

showTasks();





//Handles the dark mode - not completed
const toggleSwitch = document.getElementById('toggleSwitch');

toggleSwitch.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
    document.documentElement.classList.toggle('dark-mode');

    //save dark mode to local storage
    localStorage.setItem('dark-mode', toggleSwitch.checked ? 'true' : 'false');
});

function loadDarkModePreference() {
    const darkModePreference = localStorage.getItem('dark-mode');
    const isDarkMode = darkModePreference === 'true';

    //apply dark mode preference on page load
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.documentElement.classList.add('dark-mode');
      toggleSwitch.checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        document.documentElement.classList.remove('dark-mode');
        toggleSwitch.checked = false;
    }
  }
  //load dark mode preference when the page is loaded
  document.addEventListener('DOMContentLoaded', loadDarkModePreference);
