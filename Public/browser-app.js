//Handles the dark mode - not completed
const switchContainer = document.getElementById('switchContainer');
const toggleSwitch = document.getElementById('toggleSwitch');

switchContainer.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    toggleSwitch.checked = !toggleSwitch.checked;
});