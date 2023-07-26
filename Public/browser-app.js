
const tasksDOM = document.querySelector('.tasks');
const loadingDOM = document.querySelector('.loading-text');
const formDOM = document.querySelector('.task-form');
const taskInputDOM = document.querySelector('.task-input');
const formAlertDOM = document.querySelector('.form-alert');

//load tasks from API
const showTasks = async () => {
    loadingDOM.computedStyleMap.visibility = 'visible'
    try {
        const {
            data: {tasks}, 
        } = await axios.get('/api/v1/tasks')
        if (tasks.length < 1) {
            tasksDOM.innerHTML = '<h5 class="empty-list">No tasks in your list</h5>'
            loadingDOM.style.visibility = 'hidden'
            return
        }
        const allTasks = tasks
            .map((task) => {
                const { completed, _id: taskID, name } = task
                return `<div class="single-task ${completed && 'task-completed'}">`
                //continue here!!!
            })
    } catch (error) {
        res.status(500).json({msg: error})
    }
}





//Handles the dark mode - not completed
const switchContainer = document.getElementById('switchContainer');
const toggleSwitch = document.getElementById('toggleSwitch');

switchContainer.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    toggleSwitch.checked = !toggleSwitch.checked;
});