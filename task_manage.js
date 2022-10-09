let todos,newtodoform,updateTitle,updateDetails;
window.addEventListener('load', ()=>{
    todos= JSON.parse(localStorage.getItem('todos'))|| []; 
    newtodoform = document.querySelectorAll("newToDoForm"); 

    // newtodoform.addEventListener("submit" , e =>{
    //     e.preventdefault();

    //     let todo = {
    //         content:e.target.elements.todo-title.value,
    //         details:e.target.elements.todo-description.value,
    //         done:false,
    //         createdAt:new Date().getTime()
    //     };

    //     todos.push(todo);
    //     localStorage.setItem("todos",json.stringify(todos))
    //     e.target.reset();
    // })
    displayTodos();
})

function editTask(content,details){
    console.log(content,details);

    document.getElementById("model1").style.display="block";
    document.getElementById("todo-title1").value=content;
    document.getElementById("todo-description1").value=`${details}`;
    


    // let edit_btn = document.querySelectorAll(".add-btn");
    // edit_btn.forEach((btn) =>{
    //     btn.onclick

    // })

}
function updateTask(){
    updateTitle=document.getElementById("todo-title1").value;
    updateDetails=document.getElementById("todo-description1").value;
}

function createTask(){
    let title = document.getElementById("todo-title").value;
    let description = document.getElementById("todo-description").value;

    if (title == ""){
        alert("Name of the task should not be empty....");
        return false;
    }
    else if( description == ""){
        alert("Task description should not be empty.....");
        return false;
    }
    else{
        let todo = {
            content:title.toString(),
            details:description.toString(),
            done:false,
            createdAt:new Date().getTime()
        };

        todos.push(todo);
        localStorage.setItem("todos",JSON.stringify(todos))
        e.target.reset();

        displayTodos();
    }

    

    


}

function displayTodos(){

    let toDoList = document.querySelector("#list-container");

    toDoList.innerHTML=" ";

    todos.forEach(todo => {
        const todobox = document.createElement("div");
        todobox.classList.add("todo-box");

        const titleDiv = document.createElement("div");
        titleDiv.classList.add("title");

        const desc_p =document.createElement("textarea");
        desc_p.classList.add("description");
        desc_p.setAttribute('readonly', true)
        const toggleDiv=document.createElement("div");
        toggleDiv.classList.add("toggle");

        // toggleDiv.innerHTML=`<i><input type="checkbox" class="icon-click" id="icon-click"checked></i>
        // <i type="button" id="icon-edit" class="uil uil-edit icon-edit"></i>
        // <i type="button" id="icon-delete" class="uil uil-trash-alt icon-delete"></i>`

        const icon1 = document.createElement("i");
        const icon2 = document.createElement("i");
        const icon3 = document.createElement("i");
        // icon1.innerHTML="Finish";
        // icon2.innerHTML="edit";
        // icon3.innerHtml="delete";

        icon1.classList.add("icon-click");
        icon1.classList.add("uil-check");
        icon2.classList.add("uil-edit");
        icon2.classList.add("icon-edit");
        icon3.classList.add("uil-trash-alt");
        icon3.classList.add("icon-delete");
        icon1.type="button";
        icon2.type="button";
        icon3.type="button";
        // icon1.onclick="cl"
        
        titleDiv.innerHTML=`${todo.content}`;
        desc_p.innerHTML=`${todo.details}`;
        toggleDiv.appendChild(icon1);
        toggleDiv.appendChild(icon2);
        toggleDiv.appendChild(icon3);

        todobox.appendChild(titleDiv);
        todobox.appendChild(desc_p);
        todobox.appendChild(toggleDiv);

        toDoList.appendChild(todobox);


        if(todo.done === true){
            icon1.classList.replace("uil-check","uil-check-circle");
            icon1.style.color="green";
        }
        else{
            icon1.classList.replace("uil-check-circle","uil-check");
        }

        // if (todo.done{

        // })
        // let icon1 = document.getElementById("icon-click");
        // let icon2 = document.getElementById("icon-edit");
        // let icon3 = document.getElementById("icon-delete");


        icon1.addEventListener("click",(e) =>{
            console.log(e.target);
            if(todo.done){

                console.log(todo.done);
                icon1.classList.replace("uil-check-circle","uil-check");
                icon1.style.color="red";
                todo.done=false;
                localStorage.setItem("todos",JSON.stringify(todos));


            }
            else{
                console.log(todo.done);
                icon1.classList.replace("uil-check","uil-check-circle");
                icon1.style.color="green";
                todo.done=true;
                localStorage.setItem("todos",JSON.stringify(todos));

            }
            displayTodos();
            
        })

        icon3.addEventListener("click",(e)=>{
            if(confirm("are you sure,You want to delete this task...")){
                todos= todos.filter(t => t != todo);
                localStorage.setItem("todos",JSON.stringify(todos));
                displayTodos();
            }
        })

        icon2.addEventListener("click",(e) =>{

            let model=document.getElementById("model1");
            let name = document.getElementById("todo-title1");
            let desc=document.getElementById("todo-description1");
            let update = document.getElementById("update-btn");

            model.style.display="block";
            name.value=`${todo.content}`;
            desc.value=`${todo.details}`;

            update.addEventListener("click", (event)=>{
                if(confirm("Are you sure,You want to update?.. ")){
                    console.log(name.value,desc.value);
                todo.content=name.value;
                todo.details=desc.value;
                localStorage.setItem("todos",JSON.stringify(todos));
                model.style.display="none";
                }

                displayTodos();
            })



            

            // let editTask = (e) => {
            //     let selectedTask = e.parentElement.parentElement;
              
            //     textInput.value = selectedTask.children[0].innerHTML;
            //     // dateInput.value = selectedTask.children[1].innerHTML;
            //     textarea.value = selectedTask.children[1].innerHTML;
              
            //     deleteTask(e);
            //   };
            
            // editTask(todo.content,todo.details);
            // todo.content = updateTitle;
            // todo.details=updateDetails;
            // localStorage.setItem("todos",JSON.stringify(todos));
            // displayTodos();
        })
        
    });
}

