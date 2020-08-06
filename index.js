let exercises = ["shadowboxing", "run", "mitt work", "bag work", "sprints", "squats"];
let repTypes = ["reps","miles", "rounds"];

let exerciseSelect = document.getElementById('exerciseSelect');
let exerciseList = document.getElementById('exerciseList');
let repCount = document.getElementById('repCount');
let repType = document.getElementById('repType');

 
function populateDropdown() {
    for (i in exercises) {
        let option = exercises[i];
        let el = document.createElement("option");
        el.textContent = option;
        el.value = option;
        exerciseSelect.appendChild(el);
    }
    for (i in repTypes) {
        let option = repTypes[i];
        let el = document.createElement('option');

        el.textContent = option;
        el.value = option;

        repType.appendChild(el);
    }
}


function addExercise(){
    let entry = document.createElement('li');
    let exercise = exerciseSelect.value;
    let numReps = repCount.value;
    let rep = repType.value;

    if(exerciseList.selectedIndex != 0 && repType.selectedIndex != 0) {
        let returnString = exercise + " x " + numReps + " " + rep;
        entry.appendChild(document.createTextNode(returnString));
        exerciseList.appendChild(entry);
    }
}


document.addEventListener("DOMContentLoaded", function() {
    populateDropdown();
});
