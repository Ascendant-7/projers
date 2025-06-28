const header = document.createElement("header");
header.classList.add(
    "h-[60px]", 
    "shadow-md", 
    "flex", 
    "items-center", 
    "justify-between", 
    "px-5",
    "sm:px-10",
    "md:px-20",
    "z-30"
);

const h1 = document.createElement("h1");
h1.id = "logo";
h1.classList.add(
    "font-bold",
    "text-[24px]",
    "text-blue-500"
);

const logoLink = document.createElement("a");
logoLink.href = "home.html";
logoLink.innerText = "Projers";

h1.append(logoLink);
header.append(h1);

function addProfile() {
    const profile = document.createElement("div");
    profile.classList.add(
        "h-full", 
        "flex", 
        "items-center", 
        "px-5"
    );
    const profileLink = document.createElement("a");
    profileLink.href = "profile.html";

    const profileIcon = document.createElement("i");
    profileIcon.classList.add(
        "fa-solid", 
        "fa-circle-user", 
        "icon"
    );

    profileLink.append(profileIcon);
    profile.append(profileLink);
    header.append(profile);
}

function addSignout() {
    const signoutHTML = `
        <a href="/guest/home.html" 
        onclick="return confirm('Are you sure you want to sign out?')" 
        class="
            h-full 
            flex 
            items-center 
            px-5 
            hover:bg-red-500 
            hover:text-white 
            transition 
            duration-300
        ">
            Sign Out
        </a>
    `;
    
    header.insertAdjacentHTML('beforeend', signoutHTML);
}

document.body.prepend(header);