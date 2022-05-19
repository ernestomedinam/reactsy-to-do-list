/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { InputRow, Row, List } from "./Components";

window.onload = function() {
  // estas son nuestras tareas
  window.state = {
    tasks: [
      {
        id: 1,
        text: "hacer cafe",
        done: true
      },
      {
        id: 2,
        text: "barrer la casa",
        done: false
      },
      {
        id: 3,
        text: "hacer la cama",
        done: true
      },
      {
        id: 4,
        text: "hacer cafe",
        done: false
      }
    ],
    setTasks: function(newTasks) {
      this.tasks = newTasks;
      render();
    }
  };
  // render todo list
  renderInput();
  render();
};

function renderInput() {
  const app = document.querySelector("#app");
  // crear fila del input
  const firstRow = InputRow();
  // anexar filas a app
  app.appendChild(firstRow);
}

function render() {
  const app = document.querySelector("#app");
  const currentList = document.querySelector(".list");
  let currentRow = document.querySelector(".second-row");
  // crear la fila de la lista
  if (!currentRow) {
    currentRow = Row("center", "second-row");
  }
  if (currentList) {
    currentRow.removeChild(currentList);
  }
  // crear la lista
  const list = List();
  // anexar la lista a la segunda fila
  currentRow.appendChild(list);
  // vacia la secondRow
  app.appendChild(currentRow);
}
