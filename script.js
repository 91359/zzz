//container animation
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('animated-container');
    container.classList.remove('hidden');
    container.classList.add('show');
});

//title
const titleElement = document.getElementById("animated-title");


const titles = [
    "z",
    "zz",
    "zzz",
    "zzzz"
];

let titleIndex = 0;

function updateTitle() {
    titleElement.textContent = titles[titleIndex];
    titleIndex = (titleIndex + 1) % titles.length;
}

setInterval(updateTitle, 500);
