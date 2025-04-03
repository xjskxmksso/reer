// Функция для проверки видимости элемента
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для обработки анимации
function handleTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline__item');

    timelineItems.forEach(item => {
        if (isElementInViewport(item)) {
            item.classList.add('show');
        }
    });
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', handleTimelineAnimation);

// Инициализация анимации при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    handleTimelineAnimation();
});