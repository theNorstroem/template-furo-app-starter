import {panelRegistry} from "@furo/route/lib/panelRegistry.js";

// import panels

import "./personservice/person-person-update-panel.js"
import "./projectservice/project-project-update-panel.js"
import "./taskservice/task-task-update-panel.js"

// -- register panels

panelRegistry.registerType("person.PersonEntity", {
     "edit" : "person-person-update-panel"
 });

panelRegistry.registerType("project.ProjectEntity", {
     "edit" : "project-project-update-panel"
 });

panelRegistry.registerType("task.TaskEntity", {
     "edit" : "task-task-update-panel"
 });

