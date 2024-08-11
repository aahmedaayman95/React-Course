import { useCallback, useState } from "react";
import NewTask from "./NewTask";

function Tasks({ tasks, onAdd, onDelete }) {
  console.log("Tasks Comp Is Called");
  //to select tasks related to specific project , using task project ID and selectedPorjectId
  let selectedProjectTasks = tasks.tasks.filter(
    (element) => tasks.selectedProjectId === element.projectId
  );

  return (
    <section>
      <h2 className="text-2xl text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.tasks.length === 0 && (
        <p className="bt-b text-stone-800 mt-4">
          This Project Doesn't have any tasks
        </p>
      )}
      {tasks.tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {selectedProjectTasks.map((task) => {
            return (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.text}</span>
                <button
                  onClick={() => {
                    console.log("Clear Task Is CLicked");
                    onDelete(task.id);
                  }}
                  className="text-stone-700 hover:text-red-500"
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
