import { getAllFromStorage, archive } from "../app-logic/helper";

const projectTab = document.querySelector("#project-listing");
function renderProjectCard(storage) {
  function distinctBy(key, array) {
    let keys = array.map(function (value) {
      return value[key];
    });
    // console.log(keys);
    return array.filter(function (value, index) {
      return keys.indexOf(value[key]) === index;
    });
  }
  getAllFromStorage();
  let projectNames = distinctBy("projectName", archive);
  //   console.log(projectNames);
  let index = 0;
  while (index < projectNames.length) {
    let projectTitle = document.createElement("div");
    projectTitle.textContent = `${projectNames[index].projectName}`;
    let button = document.createElement("button");
    button.appendChild(projectTitle);
    projectTab.appendChild(button);
    button.id = `${projectNames[index].projectName}`;
    // button.addEventListener("click");
    index++;
  }
}

// function
export { renderProjectCard };
