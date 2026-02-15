const videos = [
    "alps-sunrise-fog-sea-of-fog-clouds.mp4",
    "robot-dance-fun.mp4",
    "greylag-goose-plumage-cub-immersion.mp4",
    "spider-robot-fun.mp4",
    "plant-garden-flowers-nature-green.mov",
    "windmill-multicoloured-game-rotate.mp4",
    "cyclist-sports-people-fun-fitness.mp4"
];

const videoList = document.getElementById("videoList");
const mainVideo = document.getElementById("mainVideo");
const videoTitle = document.getElementById("videoTitle");

function formatTitle(filename) {
    return filename
        .replace(/\.[^/.]+$/, "")
        .replace(/-/g, " ")
        .replace(/\b\w/g, c => c.toUpperCase());
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2,"0")}:${secs.toString().padStart(2,"0")}`;
}

videos.forEach((file, index) => {
    const li = document.createElement("li");
    const title = formatTitle(file);
    const span = document.createElement("span");

    span.textContent = "Loading...";
    li.textContent = title;
    li.appendChild(span);

    const tempVideo = document.createElement("video");
    tempVideo.src = "videos/" + file;
    tempVideo.addEventListener("loadedmetadata", () => {
        span.textContent = formatTime(tempVideo.duration);
    });

    li.addEventListener("click", () => {
    document.querySelectorAll("#videoList li")
        .forEach(el => el.classList.remove("active"));

    li.classList.add("active");

    mainVideo.src = "videos/" + file;
    videoTitle.textContent = title;

    mainVideo.load();
    mainVideo.muted = false;
    mainVideo.play();
});


    videoList.appendChild(li);

    if (index === 0) {
        li.click();
    }
});