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

// ============================================
// ADD THIS TO YOUR EXISTING script.js
// (Don't replace anything, just add at the end)
// ============================================

// 3D SCROLL EFFECT FOR PAGES
function handle3DScroll() {
  const pages = document.querySelectorAll('.page1, .page2, .page-projects, .page3, .page-certificates');
  
  pages.forEach(page => {
    const rect = page.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const pageCenter = rect.top + rect.height / 2;
    const viewportCenter = windowHeight / 2;
    
    // Calculate if page is in viewport center (active zone)
    const distanceFromCenter = Math.abs(pageCenter - viewportCenter);
    const maxDistance = windowHeight;
    
    // Add active-3d class when page is near center
    if (distanceFromCenter < maxDistance * 0.6) {
      page.classList.add('active-3d');
    } else {
      page.classList.remove('active-3d');
    }
  });
}

// Initialize 3D effect on load
window.addEventListener('load', handle3DScroll);

// Update 3D effect on scroll
window.addEventListener('scroll', handle3DScroll);

// CERTIFICATE CARD TILT EFFECT (if VanillaTilt is loaded)
if (typeof VanillaTilt !== 'undefined') {
  window.addEventListener('load', () => {
    VanillaTilt.init(document.querySelectorAll(".certificate-card"), {
      max: 10,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
    });
  });
}
// ============================================
// CERTIFICATE MODAL FUNCTIONS
// ============================================

function openCertificateModal(title, issuer, date, description, certId, imagePath) {
  document.getElementById("certModalTitle").innerText = title;
  document.getElementById("certModalIssuer").innerText = issuer;
  document.getElementById("certModalDate").innerText = date;
  document.getElementById("certModalDesc").innerText = description;
  document.getElementById("certModalId").innerText = certId;
  document.getElementById("certificateImg").src = imagePath;
  document.getElementById("certificateModal").style.display = "block";
}

function closeCertificateModal() {
  document.getElementById("certificateModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
  let projectModal = document.getElementById("projectModal");
  let certModal = document.getElementById("certificateModal");
  
  if (event.target == projectModal) {
    projectModal.style.display = "none";
  }
  if (event.target == certModal) {
    certModal.style.display = "none";
  }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeCertificateModal();
    closeModal();
  }
});