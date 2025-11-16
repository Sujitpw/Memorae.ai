const hambtn = document.getElementById('hambtn');
const mainNav = document.getElementById('mainNav');

hambtn?.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  const expanded = mainNav.classList.contains('open');
  hambtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
});

function submitDemo(e){
  e.preventDefault();
  const form = e.target;
  const name = form.name.value || 'Friend';
  const email = form.email.value || '';
  alert(`Thanks ${name}! Demo request received. (This is client-side only.)`);
  form.reset();
  return false;
}

function openDemo(){
  alert('Demo requested — we will contact you. (Client-side demo)');
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.AOS) {
    AOS.init({ duration: 700, once: true, offset: 60 });
  }

 
  const animated = document.querySelectorAll(".animate-fade, .animate-scale");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.style.animationPlayState = "running";
    });
  }, { threshold: 0.2 });
  animated.forEach(el => observer.observe(el));
});


document.addEventListener('click', (e) => {
  if (!mainNav) return;
  if (!mainNav.contains(e.target) && !hambtn.contains(e.target) && mainNav.classList.contains('open')) {
    mainNav.classList.remove('open');
    hambtn.setAttribute('aria-expanded', 'false');
  }
});


document.querySelectorAll(".parallax-hover").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 20;
    const rotateX = ((y / rect.height) - 0.5) * -20;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  });
});


const imageInput = document.getElementById("imageUpload");
const uploadedImages = document.querySelector(".uploaded-images");

if(imageInput && uploadedImages){
  imageInput.addEventListener("change", (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = function(event){
        const img = document.createElement("img");
        img.src = event.target.result;
        uploadedImages.appendChild(img);
      };
      reader.readAsDataURL(file);
    });
  });
}


