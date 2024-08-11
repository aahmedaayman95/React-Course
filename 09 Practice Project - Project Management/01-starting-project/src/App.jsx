import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import Tasks from "./components/Tasks";

function App() {
  console.log("App Comp Is Called");
  //undefined y3ny lsa mfesh projects
  //null lsa badef awel project , momken ast3mel aproch tany using strings
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleStartAddProject() {
    console.log("Handle Start Adding Project Is Called");
    setProjectState((oldState) => {
      return { ...oldState, selectedProjectId: null };
    });
  }

  function handleAddProject(projectData) {
    console.log("Handle Add Project Is Called");
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  }

  function handleCancel() {
    console.log("Handle Cancel Project Is Called");
    setProjectState((oldState) => {
      return { ...oldState, selectedProjectId: undefined };
    });
  }

  function handleSelectProject(id) {
    setProjectState((oldState) => {
      return { ...oldState, selectedProjectId: id };
    });
  }

  function handleDeleteProject() {
    console.log("Delete Project Button Is Clicked");
    setProjectState((oldState) => {
      return { ...oldState, selectedProjectId: undefined };
    });

    //to remove element from an array
    projectState.projects.splice(projectState.selectedProjectId, 1);
  }

  function handleAddTask(text) {
    console.log("Handle Add Task inside APp is called");

    if (text.trim() === "") {
      return;
    }
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      const test = {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
      console.log(test);

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  // function handleDeleteTask(id) {
  //   console.log("handle Delete id");
  //   console.log(id);
  //   setProjectState((oldState) => {
  //     return { ...oldState, tasks: projectState.tasks.splice(id, 1) };
  //   });
  // }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  } else if (projectState.selectedProjectId === undefined)
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  else
    content = (
      <SelectedProject
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        project={projectState.projects.find(
          (project) => project.id === projectState.selectedProjectId
        )}
        onDeleteProject={handleDeleteProject}
        tasks={projectState}
      />
    );

  return (
    <main className="h-screen my-8 flex gap-12   ">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
