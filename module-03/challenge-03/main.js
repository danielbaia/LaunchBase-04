const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card-conteudo');

for (const card of cards) {
    card.addEventListener('click', function() {
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = 'https://www.rocketseat.com.br/';
    });
}

const closeModal = document.querySelector('.close-modal');
closeModal.addEventListener('click', function() {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').src = "";
});

const maximizeModal = document.querySelector('.maximize-modal');
maximizeModal.addEventListener('click', function() {
    const modal = document.querySelector('.modal');
    modal.classList.add('maximize');
});