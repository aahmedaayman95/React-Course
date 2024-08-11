import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

function NewProject({ onAdd, onCancel }) {
  const modal1 = useRef();
  const modal2 = useRef();
  const modal3 = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    // console.log(enteredTitle, enteredDescription, enteredDueDate);
    //Validation for inputs
    if (enteredTitle.trim() === "") {
      modal1.current.open();
      return;
    }
    if (enteredDescription.trim() === "") {
      modal2.current.open();
      return;
    }
    if (enteredDueDate.trim() === "") {
      modal3.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal1} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4">
          Oops ... Looks like you forgot to enter the title.
        </p>
      </Modal>
      <Modal ref={modal2} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4">
          Oops ... Looks like you forgot to enter the Description.
        </p>
      </Modal>
      <Modal ref={modal3} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4">
          Oops ... Looks like you forgot to enter the Due Data.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950 "
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 "
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} labelText="Title" isTextArea={false} />
          <Input ref={description} labelText="Descritpion" isTextArea={true} />
          <Input
            type="date"
            ref={dueDate}
            labelText="Due Date"
            isTextArea={false}
          />
        </div>
      </div>
    </>
  );
}

export default NewProject;
