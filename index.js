let exercises = ["shadowboxing", "1 mile run", "mitt work", "bag work", "sprints"];
let exerciseSelect = document.getElementById('exerciseSelect');
let exerciseList = document.getElementById('exerciseList');

 
function populateDropdown() {
    for (i in exercises) {
        let option = exercises[i];
        let el = document.createElement("option");
        el.textContent = option;
        el.value = option;
        exerciseSelect.appendChild(el);
    }
}


function addExercise(){
    let exercise = exerciseSelect.value;
    let entry = document.createElement('li');

    entry.appendChild(document.createTextNode(exercise));
    exerciseList.appendChild(entry);
}


document.addEventListener("DOMContentLoaded", function() {
    populateDropdown();
});
