const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    const question = item.querySelector('.question');
    const answer = item.querySelector('.answer');
    const arrowIcon = item.querySelector('.arrow-icon');
    
    question.addEventListener('click', () => {
        answer.classList.toggle('show');
        arrowIcon.classList.toggle('rotate');
    });
});