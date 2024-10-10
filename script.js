let currentGameIndex = 0;
let currentReviewIndex = 0;

// Функция для перемещения слайдера игр
function moveSlider(direction) {
    const gamesList = document.querySelector('.games-list');
    const gameCards = document.querySelectorAll('.game-card');
    const cardWidth = 300 + 30; // ширина карточки + отступ (15px с каждой стороны)

    currentGameIndex += direction;
    if (currentGameIndex < 0) {
        currentGameIndex = gameCards.length - 1; // Зацикливаем
    } else if (currentGameIndex >= gameCards.length) {
        currentGameIndex = 0; // Зацикливаем
    }

    const offset = -currentGameIndex * cardWidth;
    gamesList.style.transform = `translateX(${offset}px)`; // Используем пиксели для точности
}

// Функция для перемещения слайдера отзывов
function moveReviews(direction) {
    const reviewsList = document.querySelector('.reviews-list');
    const reviewCards = document.querySelectorAll('.review');
    const cardWidth = 300 + 30; // ширина карточки + отступ (15px с каждой стороны)

    currentReviewIndex += direction;
    if (currentReviewIndex < 0) {
        currentReviewIndex = reviewCards.length - 1; // Зацикливаем
    } else if (currentReviewIndex >= reviewCards.length) {
        currentReviewIndex = 0; // Зацикливаем
    }

    const offset = -currentReviewIndex * cardWidth;
    reviewsList.style.transform = `translateX(${offset}px)`; // Используем пиксели для точности
}
