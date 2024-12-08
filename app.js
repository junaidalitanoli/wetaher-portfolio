const todoform =document.querySelector('form');
const todoinput =document.getElementById('todo-input');
const todolistUL =document.getElementById('todo-list');

let alltodos = [];

todoform.addEventListener('submit' , function(e){
    e.preventDefault();
    addtodo();
})

function addtodo(){
    const todotext = todoinput.value.trim();
    if(todotext.lenght > 0){
        alltodos.push(todoText);
        cretetodoitem(todoText);
        todoinput.value = "";
    }

}
    function updatetodoList(){
        todolistUL.innerHTML = "";
        alltodos.forEach((todo, todoindex)=>{
            todoItem = creteToolItem(todo, todoIndex);
            todolistUL.append(todoItem);
    })
    function cretetodoitem(todo){
        const todoI = document.createElement("li");
        todolistUL.innerText = todo;
        todolistUL.append(todo);
        return todolistUL;
    }
