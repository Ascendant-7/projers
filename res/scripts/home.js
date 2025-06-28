import { capitalize, getDropdown } from "./utils.js";

const projectSelection = document.querySelector("#project-selection");
createCard("web-design", "/res/images/web-design.jpg", true);
createCard("automaton", 
    "/res/images/automaton.jpg");
function createCard(id, picFile, link) {
    const card = document.createElement("div");
    const imageContainer = document.createElement("div");
    const image = document.createElement("img");
    const desc = document.createElement("div");
    const descContent = document.createElement("div");
    const descHeading = document.createElement('h2');
    const descParagraph = document.createElement('p');
    const [dropDown, closeDropDown] = getDropdown();
    
    projectSelection.append(card);
    card.append(imageContainer, desc);
    imageContainer.append(image);
    desc.append(descContent, dropDown);
    descContent.append(descHeading, descParagraph);

    card.id = id;
    card.classList.add(
        "project-card", 
        "xl:w-[15%]",
        "lg:w-[20%]", 
        "md:w-1/4", 
        "bg-white", 
        "flex", 
        "md:flex-col"
    );
    imageContainer.classList.add("w-1/3", "sm:w-1/4", "md:w-auto", "aspect-[16/9]", "overflow-hidden", "bg-blue-500", "select-none");
    image.classList.add("object-cover", "w-full", "h-full");
    desc.classList.add("p-2", "flex", "justify-between", "w-full", "gap-2");
    descParagraph.classList.add("text-gray-400","text-xs", "md:text-sm");
    
    image.src = picFile;
    image.alt = id;
    descHeading.innerText = capitalize(id);
    // maybe add some check here for total members
    descParagraph.innerText = "4 members";

    card.addEventListener("mouseleave", closeDropDown);
    if (link) {
        card.addEventListener("click", () => {
            window.location.href = `project.html?id=${card.id}`;
        });
    }
    
}