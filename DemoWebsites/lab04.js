function showAddTask(){
    myDiv = document.getElementsByClassName("addTask")[0];
    if (myDiv.style.visibility == 'visible'){
        myDiv.style.visibility = 'hidden';
    } else {
        myDiv.style.visibility = 'visible';
    }
}