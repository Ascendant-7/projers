export function capitalize(str) {
    return str
    .replace(/-/g, " ")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getDropdown() {
    const dropDown = document.createElement("div");
    const ellipsis = document.createElement('i');
    const optionList = document.createElement("ul");
    const options = ["Edit", "Delete", "Share"];

    dropDown.append(ellipsis, optionList);
    options.forEach(option => {
        const listItem = document.createElement("li");
        listItem.classList.add('hover:bg-gray-300', 'p-2');
        listItem.innerText = option;
        listItem.addEventListener('click', (e) => {
            e.stopPropagation();
        })
        optionList.append(listItem);
    });

    dropDown.classList.add("relative", "h-fit");
    ellipsis.classList.add("project-more", "fa-solid", "fa-ellipsis", "text-2xl", "px-2");
    optionList.classList.add(
        "project-options",
        "bg-white",
        "shadow-lg",
        "h-0",
        "opacity-0",
        "absolute",
        "right-0",
        "top-full",
        "flex",
        "flex-col",
        "z-20"
    );

    ellipsis.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = ellipsis.style.transform === "rotate(90deg)";
        if (isActive) closeOptions(ellipsis, optionList)
        else openOptions(ellipsis, optionList);
    });
    function openOptions() {
        ellipsis.style.transform = "rotate(90deg)";
        optionList.style.height = optionList.scrollHeight + "px";
        optionList.style.opacity = "1";
    }
    function closeOptions() {
        ellipsis.style.transform = "rotate(0deg)";
        optionList.style.height = "0px";
        optionList.style.opacity = "0";
    }
    return [dropDown, closeOptions];
}