const submitText = document.querySelectorAll('#create-task-form input')[0]
const submitButton = document.querySelectorAll('#create-task-form input')[1]
const submitForm = document.getElementById("create-task-form")
const taskList = document.getElementById('tasks')
const message = document.getElementById('message')

function addListItem(content){}


let numberOfTasks = 0

function adjustMessage(){
  
  if (numberOfTasks === 1){

    message.innerHTML = "<h3>You've got this! Only 1 more task to complete!</h3>"
  } else if (numberOfTasks > 0){

    message.innerHTML = `<h3>You've got this! Only ${numberOfTasks} more tasks to complete!</h3>`
  } else {

    message.innerHTML = "<h3>Nice job! You've finished all of your tasks! Pat yourself on the back.</h3>"
  }
}

document.addEventListener("DOMContentLoaded", () => {
  
  submitForm.addEventListener('submit', function(event){
    event.preventDefault()
  })

  submitButton.addEventListener('click', function(event){

    //Form submission is clicked 
    let newItem = document.createElement("li")
    newItem.textContent = submitText.value + " : "
    newItem.style.marginLeft = '10px'

    let newItemButton = document.createElement('button')
    newItemButton.innerHTML = 'DONE!'
    newItemButton.className = 'button'

    //'Finished' button is clicked
    newItemButton.addEventListener('click', function(){
      newItemButton.remove()
      let currentText = newItem.innerText
      currentText = currentText.substring(0, currentText.length - 2);
      newItem.innerHTML = currentText.strike()

      numberOfTasks -= 1

      console.log(numberOfTasks)

      adjustMessage()
    })

    
    
    newItem.append(newItemButton)
    taskList.append(newItem)
    submitText.value = ''

    numberOfTasks += 1
    
    adjustMessage()
  })


});
