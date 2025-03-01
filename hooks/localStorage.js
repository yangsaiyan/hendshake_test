"use client";

export function storeToDoList(formData) {
  if (!formData) {
    return;
  }

  const toDoList = JSON.parse(localStorage.getItem("TO_DO_LIST")) || [];

  toDoList.push(formData);

  localStorage.setItem("TO_DO_LIST", JSON.stringify(toDoList));
}

export function getToDoList() {
  const toDoList = localStorage.getItem("TO_DO_LIST");

  return JSON.parse(toDoList);
}

export function removeToDoList(item) {

    const toDoList = JSON.parse(localStorage.getItem("TO_DO_LIST")) || [];

    const updatedList = toDoList?.filter((prev) => (item?.Activity != prev?.Activity));

    localStorage.setItem("TO_DO_LIST", JSON.stringify(updatedList));
}