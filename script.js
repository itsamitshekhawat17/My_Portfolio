document.addEventListener('DOMContentLoaded', () => {
    const homeCard = document.querySelector('.home-card');
    const cardContent = document.querySelector('.home-card .card-content');

    homeCard.addEventListener('mouseenter', () => {
        cardContent.style.opacity = '1';
    });

    homeCard.addEventListener('mouseleave', () => {
        if (!homeCard.classList.contains('clicked')) {
            cardContent.style.opacity = '0';
        }
    });

    homeCard.addEventListener('click', () => {
        homeCard.classList.toggle('clicked');
        cardContent.style.opacity = homeCard.classList.contains('clicked') ? '1' : '0';
    });
});
