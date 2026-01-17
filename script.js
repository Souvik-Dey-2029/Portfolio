const phrases = ["Hi, I am Souvik Dey", "Btech in CSE AIML"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 125;
const deletingSpeed = 75;
const pauseTime = 2000;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  const targetElement = document.getElementById("animated-name");

  if (isDeleting) {
    targetElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    targetElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let currentSpeed = isDeleting ? deletingSpeed : typingSpeed;

  if (!isDeleting && charIndex === currentPhrase.length) {
    currentSpeed = pauseTime;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    currentSpeed = 500;
  }

  setTimeout(typeEffect, currentSpeed);
}

function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 150) {
      el.classList.add('active');
    }
  });
}

particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#a855f7" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": true, "distance": 150, "color": "#a855f7", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 2 }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" }
    }
  }
});

VanillaTilt.init(document.querySelector(".image-ring"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.5,
});

window.addEventListener("load", () => {
  typeEffect();
  reveal();
});

window.addEventListener('scroll', reveal);

function showResumeMsg() {
  const toast = document.createElement("div");
  toast.textContent = "Resume will be added soon! 📄";
  toast.className = "resume-toast";
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 500);
    }, 2000);
  }, 100);
}

function reveal() {
  const reveals = document.querySelectorAll('.reveal, .page2, .page3'); 
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 150) {
      el.classList.add('active');
    }
  });
}
function openModal(title, desc, codeUrl, imgPath) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;
  document.getElementById("modalCode").href = codeUrl;
  document.getElementById("modalImg").src = imgPath;
  document.getElementById("projectModal").style.display = "block";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}
window.onclick = function(event) {
  let modal = document.getElementById("projectModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}