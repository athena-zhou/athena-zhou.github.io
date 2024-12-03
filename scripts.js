// Scroll depth section learned from ChatGPT
const depthSections = document.querySelectorAll(".depth-section");
const currentDepthDisplay = document.getElementById("current-depth");

window.addEventListener("scroll", () => {
    depthSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            const depthTitle = section.querySelector("h2").textContent;
            currentDepthDisplay.textContent = `Current Depth: ${depthTitle}`;
        }
    });
});

// Slideshow learned from ChatGPT
const titanicContainer = document.getElementById('titanic-container');
const slides = titanicContainer.querySelectorAll('.slide');

let currentSlide = 0;
let interval;


const showSlide = (index) => {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });
};

titanicContainer.addEventListener('mouseenter', () => {
    interval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 2000);
});

titanicContainer.addEventListener('mouseleave', () => {
    clearInterval(interval);
    slides.forEach((slide) => (slide.style.opacity = '0'));
    currentSlide = 0;
    showSlide(currentSlide);
});



const modalContainerRefff = document.getElementById("sourceModal");

function closeModaltwo() {
    modalContainerRefff.style.display = "none";
}
function openSourceModal() {
    modalContainerRefff.style.display = 'flex';
}


const modalContainerRef = document.getElementById("sharedModal");

function closeModal() {
    modalContainerRef.style.display = "none";
}

// The way to update modal content based on type learned from ChatGPT
function openModal(button) {

    const type = button.getAttribute('data-type');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    const modalImage = document.getElementById('modalImage');

    if (type === 'free-dive') {
        modalTitle.textContent = 'Free-Dive Record Keeper';
        modalText.textContent =
            'The current record for the deepest free dive is held by Herbert Nitsch, an Austrian free diver known as "The Deepest Man on Earth." In 2012, Nitsch achieved an astonishing depth of 253.2 meters (831 feet) in the "No Limits" category, where divers use a weighted sled to descend and a balloon to ascend. This feat pushed the limits of human physiology, as the intense pressure at such depths compresses the lungs to the size of a fist. Although Nitsch suffered severe decompression sickness from the dive, he has since recovered and continues to inspire the free-diving community with his unparalleled achievements.';
        modalImage.src = "assets/herbert-nitsch.jpg";
        modalImage.alt = 'Free diving record keeper herbert nitsch';
    } else if (type === 'scuba-dive') {
        modalTitle.textContent = 'Scuba-Dive Record Keeper';
        modalText.textContent =
            'The deepest scuba dive on record was achieved by Ahmed Gabr, an Egyptian diver, who reached an astounding depth of 332.35 meters (1,090 feet) in the Red Sea in 2014. This incredible feat required years of training and meticulous planning, as diving to such depths poses immense physiological challenges, including extreme water pressure and potential decompression sickness. His descent took just minutes, but the return ascent lasted more than 13 hours to ensure safe decompression. This remarkable achievement stands as a testament to human endurance and the advancements in diving technology.';
        modalImage.src = "assets/Ahmed-Gabr.jpg";
        modalImage.alt = 'Scuba diving record keeper Ahmed Gabr';
    }
    modalContainerRef.style.display = "flex";
}





