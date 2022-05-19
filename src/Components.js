export function Row(justify, extra = "") {
  const row = document.createElement("div");
  row.className = `d-flex w-100 my-3 justify-content-${justify} ${extra}`;
  return row;
}

export function InputRow() {
  const row = Row("center");
  // crear el input
  const input = document.createElement("input");
  input.className = "form-control w-50";
  // crear el boton
  const button = document.createElement("button");
  button.className = "btn btn-success mx-2";
  button.textContent = "+";
  button.style.fontWeight = "700";
  button.addEventListener("click", addTask);
  // anexar input y boton a la primera fila
  row.append(input, button);
  return row;
}

export function List() {
  const list = document.createElement("div");
  list.className = "list bg-white d-flex flex-column p-3";
  list.style.width = "30rem";
  // crear los elementos de la lista
  // iterar por cada elemento de la lista tasks
  const htmlTasks = window.state.tasks.map((task, index) => {
    // crear el elemento de la lista div
    const listElement = document.createElement("div");
    listElement.className = "d-flex w-100 bg-warning ps-2";
    // cambiar el contenido del elemento con
    // el contenido de text de la tarea
    listElement.textContent = task.text;
    listElement.style.cursor = "pointer";
    listElement.id = task.id;
    // asignar clase 'done' si done: true
    if (task.done === true) {
      listElement.classList.remove("bg-warning");
      listElement.classList.add("bg-success");
    }
    listElement.addEventListener("click", updateTask);
    return listElement;
  });
  // anexar los elementos al div lista
  // htmlTasks.forEach(htmlTask => {
  //   list.appendChild(htmlTask);
  // });
  list.append(...htmlTasks);
  return list;
}

function updateTask(event) {
  const taskID = event.target.id;
  console.log(taskID);
  const task = window.state.tasks.find(currentTask => {
    return currentTask.id == taskID;
  });
  if (task.done) {
    window.state.setTasks(
      window.state.tasks.filter(currentTask => currentTask.id !== task.id)
    );
  } else {
    window.state.setTasks(
      window.state.tasks.map(currentTask => {
        if (currentTask.id === task.id) {
          return {
            id: task.id,
            text: task.text,
            done: true
          };
        }
        return currentTask;
      })
    );
  }
}

function addTask(event) {
  // agarrar el valor del input
  const input = document.querySelector("input");
  let task = {
    id: Math.random()
      .toString(16)
      .slice(2),
    text: input.value,
    done: false
  };
  const newTasks = [...window.state.tasks, task];
  window.state.setTasks(newTasks);
  // crear una nueva tarea / actualizar la lista
  //   const list = document.querySelector("");
}
