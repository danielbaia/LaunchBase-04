const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card-conteudo');

for (const card of cards) {
    card.addEventListener('click', function() {
        const idFrame = card.getAttribute('id');

        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = `https://www.rocketseat.com.br/${idFrame}`;
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
    if (modal.classList.contains('maximize')) {
        modal.classList.remove('maximize');
    } else {
        modal.classList.add('maximize');
    }

});