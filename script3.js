// Load tasks from local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// Display tasks when page loads
displayTasks();


// Add a new task
function addTask() {

    const taskInput = document.getElementById("taskInput");

    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create task object
    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    // Add task to array
    tasks.push(task);

    // Save tasks
    saveTasks();

    // Display tasks
    displayTasks();

    // Clear input
    taskInput.value = "";
}


// Display all tasks
function displayTasks() {

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(function(task) {

        const li = document.createElement("li");

        // Task text
        const span = document.createElement("span");

        span.textContent = task.text;

        span.className = "task-text";

        // Mark completed
        if (task.completed) {
            span.classList.add("completed");
        }

        span.onclick = function() {
            toggleTask(task.id);
        };


        // Delete button
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.className = "delete-btn";

        deleteButton.onclick = function() {
            deleteTask(task.id);
        };


        // Add elements to list item
        li.appendChild(span);

        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}


// Mark task as complete/incomplete
function toggleTask(id) {

    tasks = tasks.map(function(task) {

        if (task.id === id) {
            task.completed = !task.completed;
        }

        return task;
    });

    saveTasks();

    displayTasks();
}


// Delete task
function deleteTask(id) {

    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });

    saveTasks();

    displayTasks();
}


// Save tasks to local storage
function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}


// Add task when Enter key is pressed
document.getElementById("taskInput").addEventListener(
    "keypress",
    function(event) {

        if (event.key === "Enter") {
            addTask();
        }
    }
);