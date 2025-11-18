document.addEventListener('DOMContentLoaded', function() {
    console.log('wewew')
    // Находим все элементы towel-luxury-item на странице
    const luxuryItems = document.querySelectorAll('.towel-luxury-item');

    // Функция для удаления класса open у всех элементов
    function removeAllOpenClasses() {
        luxuryItems.forEach(item => {
            item.classList.remove('open');
        });
    }

    // Обработчик для кнопки
    function handleButtonClick(event) {
        const button = event.currentTarget;
        const luxuryItem = button.closest('.towel-luxury-item');

        if (luxuryItem.classList.contains('open')) {
            // Если класс уже есть - удаляем
            luxuryItem.classList.remove('open');
        } else {
            // Если класса нет - добавляем, предварительно убрав у других
            removeAllOpenClasses();
            luxuryItem.classList.add('open');
        }
    }

    // Обработчик для ухода курсора
    function handleMouseLeave(event) {
        const luxuryItem = event.currentTarget;
        luxuryItem.classList.remove('open');
    }

    // Обработчик для overlay
    function handleOverlayClick(event) {
        const overlay = event.currentTarget;
        const luxuryItem = overlay.closest('.towel-luxury-item');
        luxuryItem.classList.remove('open');
    }

    // Назначаем обработчики для всех элементов
    luxuryItems.forEach(item => {
        // Находим кнопку внутри элемента
        const button = item.querySelector('.towel-luxury-item-card-button');
        const overlay = item.querySelector('.towel-luxury-item-overlay');

        if (button) {
            // Клик по кнопке
            button.addEventListener('click', handleButtonClick);
            // button.addEventListener('mouseover', handleButtonClick);
        }

        if (overlay) {
            // Клик по overlay
            overlay.addEventListener('click', handleOverlayClick);
        }

        // Уход курсора со всего элемента
        // item.addEventListener('mouseleave', handleMouseLeave);
    });

    // Дополнительно: закрывать при клике вне элемента
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.towel-luxury-item')) {
            removeAllOpenClasses();
        }
    });
});