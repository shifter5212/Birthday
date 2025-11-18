// Smooth scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    scrollIndicator.addEventListener('click', function() {
        document.querySelector('.about').scrollIntoView({ behavior: 'smooth' });
    });

    // Slider functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-advance slides every 6 seconds
    setInterval(nextSlide, 6000);

    // Modal functionality
    const modal = document.getElementById('surpriseModal');
    const surpriseBtn = document.getElementById('surpriseBtn');
    const closeBtn = document.getElementById('closeBtn');

    surpriseBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        createConfetti();
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Floating hearts animation
    function createFloatingHearts() {
        const hero = document.querySelector('.hero');
        for (let i = 0; i < 5; i++) {
            const heart = document.createElement('div');
            heart.textContent = '❤️';
            heart.style.position = 'absolute';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.fontSize = Math.random() * 1 + 1 + 'rem';
            heart.style.opacity = Math.random() * 0.5 + 0.2;
            heart.style.pointerEvents = 'none';
            heart.style.animation = `float ${Math.random() * 4 + 6}s ease-in-out infinite`;
            heart.style.animationDelay = Math.random() * 2 + 's';
            hero.appendChild(heart);
        }
    }

    // Confetti effect for surprise
    function createConfetti() {
        const confettiContainer = document.querySelector('.modal-confetti');
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = '8px';
            confetti.style.height = '8px';
            confetti.style.background = ['#d66c1b', '#5a9fd4', '#98d8c8'][Math.floor(Math.random() * 3)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            
            confettiContainer.appendChild(confetti);

            let yPos = 0;
            let xPos = Math.random() * 200 - 100;
            const speed = Math.random() * 3 + 2;

            const animate = setInterval(() => {
                yPos += speed;
                confetti.style.transform = `translate(${xPos}px, ${yPos}px) rotate(${yPos * 5}deg)`;
                
                if (yPos > 300) {
                    confetti.remove();
                    clearInterval(animate);
                }
            }, 20);
        }
    }

    createFloatingHearts();

    // Parallax scrolling effect
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const hero = document.querySelector('.hero');
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });
});

function startAudio() {
  const audio = document.getElementById("bgmusic");
  audio.play().then(() => {
    mess.remove();
  }).catch((err) => {
    console.log("Audio blocked:", err);
  });

  document.body.onclick = null;
}