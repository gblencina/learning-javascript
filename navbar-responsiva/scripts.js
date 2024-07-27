document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
        toggleButton.classList.toggle('active');

        const links = document.querySelectorAll('.navbar-links a');
        links.forEach((link, index) => {
            link.style.animation = link.style.animation ? '' : `neonSlideIn 0.5s ease forwards ${index / 7 + 0.3}s`;
        });
    });
});

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes neonSlideIn {
      0% {
        opacity: 0;
        transform: translateY(-30px);
        text-shadow: none;
      }
      100% {
        opacity: 1;
        transform: translateY(0);
        text-shadow: 0 0 5px #ff8a00, 0 0 10px #e52e71;
      }
    }
  `, styleSheet.cssRules.length);