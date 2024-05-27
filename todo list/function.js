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


function GetDateNumber (findDate) {
    // today and all its dates
    // --- finding today ---
    var today = {
        day : new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
        fullDate: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate()
    };

    console.log(today.month);

    var daysUntilEndOfMonth = daysInMonth(Number(today.month), Number(today.year)) - today.day;
    
    // --- finding wanted date ---
    switch (findDate) {

        // today
        case "today":
            return today.fullDate;
        
        // tomorrow
        case "tomorrow":
            var answer;
            if ((Number(today.day) + 1) >= daysInMonth(today.month, today.year)) {
                answer = today.year + "-" + (today.month + 1) + "-1";
                return answer;
            } else {
                answer = today.year + "-" + today.month + "-" + (Number(today.day) + 1);
                return answer;
            }
        
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
    const taskDueDateText = document.createTextNode(document.getElementById("taskDate").value);
    const taskDueDate = document.getElementById("taskDate").value

    // --- checking which inputs are empty ---

    // checking if there is no name
    if (taskName.nodeValue.trim() == "") {
        errorText.style["display"] = "block";
        errorText.innerHTML = "ERROR: No name";
        return;
    } else {
        errorText.style["display"] = "none";
    }

    // checking if there is descrption description
    if (taskDescription.nodeValue.trim() == "") {
        taskDescription.nodeValue = "None"
    }

    if (taskDueDateText.nodeValue.trim() == "") {
        taskDueDateText.nodeValue = "None"
    }

    extraInfo.setAttribute("class","extraInfo");
    taskCheckbox.setAttribute("type","checkbox");
    taskContent.setAttribute("class","task");

    
    // --- putting everything into the website ---
    // task
    task.appendChild(taskContent);

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
    extraInfo.appendChild(taskDueDateText);
    createSpace(extraInfo,2);

    // task description
    extraInfo.appendChild(document.createTextNode("Description:"));
    createSpace(extraInfo,1);
    extraInfo.appendChild(taskDescription);

    // --- checking what date the due date is and creating  ---
    console.log(GetDateNumber("today") +", " + Number(taskDueDate));
    if (taskDueDate == "") {
        noDueDateTodoList.appendChild(task);
        return;
    } else if (taskDueDate.toString() == GetDateNumber("today")) {
        todayTodoList.appendChild(task);
        return;
    } else if (taskDueDate == GetDateNumber("tomorrow")) {
        tomorrowTodoList.appendChild(task);
        return;
    }

}