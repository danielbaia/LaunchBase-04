const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card-conteudo');

for (const card of cards) {
    card.addEventListener('click', function() {
        const idFrame = card.getAttribute('id');
        window.location.href = `/courses/${idFrame}`;

    });
}