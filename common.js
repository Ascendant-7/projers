const head = document.head;

const preconnect = document.createElement("link");
preconnect.rel = "preconnect";
preconnect.href = "https://fonts.googleapis.com";
head.append(preconnect);

const preconnectCrossOrigin = document.createElement("link");
preconnectCrossOrigin.rel = "preconnect";
preconnectCrossOrigin.href = "https://fonts.gstatic.com";
preconnectCrossOrigin.crossOrigin = true;
head.append(preconnectCrossOrigin);

const interFont = document.createElement("link");
interFont.rel = "stylesheet";
interFont.href = "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap";
head.append(interFont);

const fontawesome = document.createElement("script");
fontawesome.src = "https://kit.fontawesome.com/0cd5198f8f.js";
fontawesome.crossOrigin = "anonymous";
head.append(fontawesome);

const style = document.createElement("style");
style.innerHTML = ".inter { font-family: 'Inter', sans-serif; }";
head.append(style);