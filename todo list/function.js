// ----- just automated this so i dont have to write multiple break elements in js
function createSpace(object, numberOfSpaces) {

    for (i = 0; i <  numberOfSpaces; i++) {
        const space = document.createElement("br");
        object.appendChild(space);
    }

}

// Month in JavaScript is 0-indexed (January is 0, February is 1, etc), 
// but by using 0 as the day it will give us the last day of the prior
// month. So passing in 1 as the month number will return the last day
// of January, not February
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}


function GetDateNumber (fullDate) {
    var today = new Date();

    var daysUntilEndOfMonth = daysInMonth(today.getMonth() + 1, today.getFullYear()) - today.getDate();

    switch (fullDate) {
        case "today":
            var answer = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
            return answer;
        
        case "tomorrow":
            
    }
    
    
}

function CreateTask() {

    //  todo lists
    const todayTodoList = document.getElementById("todayList");
    const tomorrowTodoList = document.getElementById("tomorrowList");
    const noDueDateTodoList = document.getElementById("noDueDateList");

    const errorText = document.getElementById("errorMessage");

    // --- creating elements for the task ---
    const task = document.createElement("li");
    const taskContent = document.createElement("div");
    const extraInfo = document.createElement("div");
    const taskName = document.createTextNode(document.getElementById("taskName").value.trim());
    const taskCheckbox = document.createElement("input");
    const taskDescription = document.createTextNode(document.getElementById("taskDesc").value.trim());
    const taskDueDate = document.createTextNode(document.getElementById("taskDate").value);

    // --- checking which inputs are empty ---

    // name
    if (taskName.nodeValue.trim() == "") {
        errorText.style["display"] = "block";
        errorText.innerHTML = "ERROR: No name";
        return;
    } else {
        errorText.style["display"] = "none";
    }

    // description
    if (taskDescription.nodeValue.trim() == "") {
        taskDescription.nodeValue = "None"
    }

    if (taskDueDate.nodeValue.trim() == "") {
        taskDueDate.nodeValue = "None"
    }

    extraInfo.setAttribute("class","extraInfo");
    taskCheckbox.setAttribute("type","checkbox");
    taskContent.setAttribute("class","task");

    
    // --- putting everything into the website ---
    // task
    task.appendChild(taskContent);
    
    todayTodoList.appendChild(task);

    // checkbox
    taskContent.appendChild(taskCheckbox);

    // task name
    taskContent.appendChild(taskName);
    createSpace(taskContent,2);

    // extra info div
    taskContent.appendChild(extraInfo);

    // due date
    extraInfo.appendChild(document.createTextNode("Due date:"))
    createSpace(extraInfo,1);
    extraInfo.appendChild(taskDueDate);
    createSpace(extraInfo,2);

    // task description
    extraInfo.appendChild(document.createTextNode("Description:"));
    createSpace(extraInfo,1);
    extraInfo.appendChild(taskDescription);

    console.log(GetDateNumber("today"));
}