const desc = document.querySelector("#descricao");
const aut = document.querySelector("#autor");
const dep = document.querySelector("#departamento");
const imp = document.querySelector("#importancia");
const dur = document.querySelector("#duracao");
const val = document.querySelector("#valor");

const btnAddTask = document.querySelector("#adicionar");
const order = document.querySelector("#ordenar");
const desli = document.querySelector("#lista_descricoes");
const submit = document.querySelector("#send");
const list = document.querySelector("tbody");

const tasks = [];
let task = {};

btnAddTask.addEventListener("click", createNewTask);

function addNewTask(task) {
  tasks.push(task);
}

function clearInputs() {
  desc.value = "";
  aut.value = "";
  dep.value = "";
  imp.value = "";
  val.value = "";
  dur.value = "";
}

function createNewTask() {
  task = {
    id: Math.random(),
    desc: desc.value,
    aut: aut.value,
    dep: dep.value,
    imp: imp.value,
    val: val.value,
    dur: dur.value,
  };
  
  if(task.desc == "" || task.aut == "" || task.dep == "" || task.imp ==""){
    return
  }

  if(task.imp > 5){
    return
  }
  
  const taskRow = document.createElement("tr");
  addNewTask(task);

  taskRow.innerHTML = `
      <td>${task.desc}</td>
      <td>${task.aut}</td>
      <td>${task.dep}</td>
      <td>${task.imp}</td>
      <td>${task.val}</td>
      <td>${task.dur}</td>
      <td><button class="btn-delete" id="${task.id}" onclick="deleteTask('${task.id}')">Excluir</button></td>
    `;

  list.appendChild(taskRow);
  clearInputs();
}

function deleteTask(idTask) {
  const taskIndex = tasks.findIndex((item) => item.id == idTask);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    const taskRow = document.querySelector(`[id="${idTask}"]`).closest("tr");
    taskRow.remove();
  }
}

const btnOrderPriority = document.querySelector("#btnOrderPriority");
const listPriority = document.querySelector("#listPriority");

btnOrderPriority.addEventListener("click", showPriorityList);

function showPriorityList() {
  const orderedList = tasks.slice().sort((a, b) => a.imp - b.imp);

  listPriority.innerHTML = "";
  orderedList.forEach((task) => {
    const listItem = document.createElement("tr");
    listItem.innerHTML = `
      <td>${task.desc}</td>
      <td>${task.imp}</td>
    `;
    listPriority.appendChild(listItem);
  });
}
