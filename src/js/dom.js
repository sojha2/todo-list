import pencil from "../img/side-bar-images/pencil-outline.svg";
import plusSign from "../img/side-bar-images/plus.svg";
import keyboardReturn from "../img/todo-images/keyboard-return.svg";

/* This module generates elements for the dom and is divided mainly into two subsections:
1. Main -> This creates the big block on the center of the webpage
2. Sidebar -> This creates the sidebar on the left of the page*/

const createSidebarHeader = () => {
  const sidebarHeader = document.createElement("header");
  sidebarHeader.classList.add("sidebar-header");

  const todoListHeader = document.createElement("div");
  todoListHeader.classList.add("todo-list-header");

  const sidebarHeading = document.createElement("h1");
  sidebarHeading.textContent = "My Todo List";
  sidebarHeading.classList.add("todo-list-title");

  if (localStorage.getItem("list-title") != null) {
    sidebarHeading.textContent = localStorage.getItem("list-title");
  }

  const sidebarPencil = document.createElement("img");
  sidebarPencil.classList.add("pencil");
  sidebarPencil.src = pencil;

  todoListHeader.appendChild(sidebarHeading);
  todoListHeader.appendChild(sidebarPencil);

  sidebarHeader.appendChild(todoListHeader);

  return sidebarHeader;
};

const createSidebarMain = () => {
  const sidebarMain = document.createElement("main");
  sidebarMain.classList.add("sidebar-main");

  const sidebarMainHeading = document.createElement("header");

  const headingTitle = document.createElement("h2");
  headingTitle.textContent = "Projects";

  const sidebarPlusSign = document.createElement("img");
  sidebarPlusSign.src = plusSign;
  sidebarPlusSign.classList.add("plus");

  const projectTitleList = document.createElement("main");
  projectTitleList.classList.add("project-list");

  sidebarMainHeading.appendChild(headingTitle);
  sidebarMainHeading.appendChild(sidebarPlusSign);

  sidebarMain.appendChild(sidebarMainHeading);
  sidebarMain.appendChild(projectTitleList);

  return sidebarMain;
};

const createSidebar = () => {
  const sidebar = document.createElement("section");
  sidebar.classList.add("sidebar");

  sidebar.appendChild(createSidebarHeader());
  sidebar.appendChild(createSidebarMain());

  return sidebar;
};

const createTodoForm = () => {
  const todoForm = document.createElement("form");
  todoForm.classList.add("todo-form");
  todoForm.setAttribute("action", "#");
  todoForm.setAttribute("method", "post");

  const todoNameLabel = document.createElement("label");
  todoNameLabel.setAttribute("for", "todo-title");

  const todoTypingArea = document.createElement("div");
  todoTypingArea.classList.add("todo-typing-area");

  const todoName = document.createElement("input");
  todoName.setAttribute("id", "todo-title");
  todoName.setAttribute("name", "todo-title");
  todoName.setAttribute("type", "text");
  todoName.setAttribute("maxLength", "70");
  todoName.required = true;

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.classList.add("todo-button");

  const returnImage = document.createElement("img");
  returnImage.src = keyboardReturn;
  returnImage.classList.add("return-image");

  submitButton.appendChild(returnImage);

  todoTypingArea.appendChild(todoNameLabel);
  todoTypingArea.appendChild(todoName);
  todoTypingArea.appendChild(submitButton);

  todoForm.appendChild(todoTypingArea);

  return todoForm;
};

const createTodoList = () => {
  const todoList = document.createElement("ul");
  todoList.classList.add("todo-list");

  return todoList;
};

const createTodoMain = () => {
  const todoMain = document.createElement("section");
  todoMain.classList.add("todo-main");

  todoMain.appendChild(createTodoList());
  todoMain.appendChild(createTodoForm());
  return todoMain;
};

const createTodoUI = () => {
  //
  const todoContainer = document.createElement("main");
  todoContainer.classList.add("todo-container");

  todoContainer.appendChild(createSidebar());
  todoContainer.appendChild(createTodoMain());
  return todoContainer;
};

export { createTodoUI };
