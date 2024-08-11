import { useState } from "react";
import Modal from "./Modal";
import { useRef } from "react";

function NewTask({ onAdd }) {
  console.log("New Task Comp Is Called");
  const modal = useRef();

  const [enteredTask, setEnteredTask] = useState("");
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick() {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4">
          Oops ... Looks like you forgot to enter the task.
        </p>
      </Modal>

      <div className="flex items-center gap-4">
        <input
          onChange={handleChange}
          value={enteredTask}
          type="text"
          className="w-64 px-2 py-1 rounde-sm bg-stone-200 "
        />
        <button
          onClick={handleClick}
          className="text-stone-700 hover:text-stone-900"
        >
          Add New Task
        </button>
      </div>
    </>
  );
}

export default NewTask;
