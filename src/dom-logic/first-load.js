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
          deadline: "2026-03-31",
          status: true,
          priority: "low",
          projectName: "Example",
          id: 0,
        })
      );

      localStorage.setItem(
        `${1}`,
        JSON.stringify({
          title: "LeetCode Practice",
          description: "Complete 2 LeetCode easies",
          deadline: "2027-01-01",
          status: true,
          priority: "medium",
          projectName: "Example",
          id: 1,
        })
      );
      helpers.updateView(helpers.getAllFromStorage());
    }
  };
}
