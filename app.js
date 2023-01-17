const textInput = document.querySelector(".enter")
const addBtn= document.querySelector(".add")
const taskList = document.querySelector(".task")

// Disable add Button
textInput.addEventListener("keyup", () => {
    if(textInput.value.trim() != 0){
        addBtn.classList.add('active')
    } else{
        addBtn.classList.remove('active')
    }
})
// Add New Task 
addBtn.addEventListener("click", () => {
    if(textInput.value.trim() != 0){
        let newItem = document.createElement("div");
        newItem.classList.add('item')
        newItem.innerHTML =` <p>${textInput.value}
        </p>
        <div class="item-btn">
           
            <i class="fa-regular  fa-circle-check"></i>
            <i class="fa-solid fa-xmark"></i>
        </div>`

        taskList.appendChild(newItem)
        textInput.value = ' '

    }else{
        alert("Please Enter a Text")
       
    }
    
})
// Delete Task from list
taskList.addEventListener("click" ,  (e) =>{
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
    }

})
// Mark Task as completed
taskList.addEventListener("click" ,  (e) =>{
    if(e.target.classList.contains('fa-circle-check')){
        e.target.parentElement.parentElement.classList.toggle("completed");
        e.target.parentElement.parentElement.classList.toggle("tick");
    }

})
//Edit already created Task
// taskList.addEventListener("click" ,  (e) =>{
//     e.target.firstElementChild.contentEditable = true;
    

   
// })