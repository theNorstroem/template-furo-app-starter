{
  "imports": [
    "./personservice/person-person-update-panel.js",
    "./projectservice/project-project-update-panel.js",
    "./taskservice/task-task-update-panel.js"
  ],
  "panels": {
    "person.PersonEntity": {
      "edit": "person-person-update-panel"
    },
    "project.ProjectEntity": {
      "edit": "project-project-update-panel"
    },
    "task.TaskEntity": {
      "edit": "task-task-update-panel"
    }
  }
}