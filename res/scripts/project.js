import { capitalize, getDropdown } from "./utils.js";

const params = new URLSearchParams(window.location.search);
let projectId = params.get("id") || "untitled";
projectId = capitalize(projectId);
document.title = `Projers - Project ${projectId}`;

const selection = document.querySelector("#task-selection");
const projectName = document.querySelector("#project-name");

projectName.innerText = projectId;

createCard('Figma', "Ang Panha", 'May 11, 2025', "Easy", true, true);
createCard('HTML/CSS', "Ang Panha", 'May 15, 2025', "Medium", true);
createCard('JavaScript', "Ang Panha", 'May 22, 2025', "Hard", true);
createCard('React', "Ang Panha", 'June 11, 2025', "Insane");

function createCard(task, assignee, deadline, difficulty, done, isAccessible) {
    const card = document.createElement('div');
    const content = document.createElement('div');
    const taskLabel = document.createElement('h2');
    const assigneeLabel = document.createElement('p');
    const deadlineLabel = document.createElement('p');
    const rightSide = document.createElement('div');
    const [dropDown, closeDropDown] = getDropdown();

    selection.append(card);
    card.append(content, rightSide);
    content.append(taskLabel, assigneeLabel, deadlineLabel);
    rightSide.append(dropDown);
    const difficultyColor = difficulty === "Easy" ? "green-500":
                            difficulty === "Medium" ? "orange-500":
                            difficulty === "Hard" ? "red-500":
                            difficulty === "Insane" ? "purple-500":
                            "gray-300";
    rightSide.insertAdjacentHTML('beforeend', `
        <div class="bg-${difficultyColor} text-sm text-white p-2 rounded-lg">
            ${difficulty}
        </div>
    `);
    card.id = task;
    card.classList.add(
        "project-card",
        "bg-white",
        "p-2",
        "flex",
        "justify-between",
        "gap-10"
    );
    rightSide.classList.add('flex', 'flex-col', 'items-end')
    assigneeLabel.classList.add("text-gray-400", "text-sm");
    deadlineLabel.classList.add("text-gray-400", "text-sm");

    taskLabel.innerHTML = done ? task + ` <i class="fa-solid fa-check text-green-300"></i>` : task;
    assigneeLabel.innerText = assignee;
    deadlineLabel.innerText = deadline;
    
    card.addEventListener("mouseleave", closeDropDown);
    if (isAccessible) {
        card.addEventListener("click", () => {
            window.location.href = `task.html?project=${projectId}&task=${card.id}`;
        });
    }

}