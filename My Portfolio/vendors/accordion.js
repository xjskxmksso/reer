document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion__item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion__header');

        header.addEventListener('click', () => {
            // Закрываем все другие элементы аккордеона
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('accordion__item--open');
                }
            });

            //  Открываем/закрываем текущий элемент
            item.classList.toggle('accordion__item--open');
        });
    });
});