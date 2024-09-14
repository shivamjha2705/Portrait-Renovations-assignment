// ----Hamburger menu-----
const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
  
// ---FAQ----
const faqItems = document.querySelectorAll('.faq-question');
    
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const icon = item.querySelector('.icon');

        answer.classList.toggle('show');
        icon.classList.toggle('rotate');

        if (answer.classList.contains('show')) {
          icon.textContent = '✖';
        } else {
          icon.textContent = '✚';
        }
      });
    });