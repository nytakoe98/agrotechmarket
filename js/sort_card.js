const filters = document.querySelectorAll('input[name="category"]');
const cards = document.querySelectorAll('.card');

function filterCards() {
    const selectedCategories = Array.from(filters)
        .filter(filter => filter.checked)
        .map(filter => filter.value);

    cards.forEach(card => {
        const category = card.dataset.category;
        const shouldShow = selectedCategories.length === 0 || selectedCategories.includes(category);
        card.classList.toggle('hidden', !shouldShow);
    });
}

filters.forEach(filter => {
    filter.addEventListener('change', filterCards);
});

filterCards();