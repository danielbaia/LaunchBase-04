const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (const card of cards) {
    card.addEventListener('click', function() {
        let idVideo = card.getAttribute('id')
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${idVideo}`;
    });

}

document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').src = '';
});