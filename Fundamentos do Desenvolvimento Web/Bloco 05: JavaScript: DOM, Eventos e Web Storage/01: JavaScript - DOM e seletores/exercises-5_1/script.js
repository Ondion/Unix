var headerContainer = document.querySelector("#header-container");
headerContainer.style.backgroundColor = "green";

var emergencyTasks = document.querySelector(".emergency-tasks");
emergencyTasks.style.backgroundColor = "salmon";

var noEmergencyTasks = document.querySelector(".no-emergency-tasks");
noEmergencyTasks.style.backgroundColor = "orange";

var h3EmergencyTasks = document.querySelectorAll(".emergency-tasks h3");
h3EmergencyTasks[0].style.backgroundColor = "purple";
h3EmergencyTasks[1].style.backgroundColor = "purple";

var h3noEmergencyTasks = document.querySelectorAll(".no-emergency-tasks h3");
h3noEmergencyTasks[0].style.backgroundColor = "black";
h3noEmergencyTasks[1].style.backgroundColor = "black";

var footerContainer = document.querySelector("#footer-container");
footerContainer.style.backgroundColor = "black";