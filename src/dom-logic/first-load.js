import * as helpers from "../app-logic/helper";

export default function () {
  window.onload = function () {
    if (
      typeof window.localStorage !== "undefined" &&
      !localStorage.getItem("visited")
    ) {
      localStorage.setItem("visited", true);

      localStorage.setItem(
        `${0}`,
        JSON.stringify({
          title: "Morning Jog",
          description: "Complete a 30 minute morning Jog at 6am",
          deadline: "today",
          status: true,
          priority: "low",
          projectName: "Example",
        })
      );

      localStorage.setItem(
        `${1}`,
        JSON.stringify({
          title: "LeetCode Practice",
          description: "Complete 2 LeetCode easies",
          deadline: "tomorrow",
          status: true,
          priority: "medium",
          projectName: "Example",
        })
      );
      helpers.updateView(helpers.getAllFromStorage());
    }
  };
}
