import * as helper from "../app-logic/helper";
import renderTaskCard from "./task-card";

export default function selectProjects(projectName) {
  const projectBody = document.querySelector(".project-body");
  const porjectTitle = document.querySelector(".project-name");

  let tempArray = helper.getProjectToDos(helper.archive, projectName);
  projectBody.textContent = "";
  porjectTitle.textContent = projectName;
  console.log(tempArray);
  helper.updateView(tempArray);
  //  if ( )
  //   helpers.updateView();
}
