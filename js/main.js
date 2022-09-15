const btnModal = document.querySelector('#modal'),
    btnModalMobile = document.querySelector('#modalMob'),
    cLosed = document.querySelector('.close'),
    modal = document.querySelector('.modal');

btnModal.onclick = function () {
    modal.classList.toggle('modal-active');
};

btnModalMobile.onclick = function () {
    modal.classList.toggle('modal-active');
};

cLosed.onclick = function () {
    modal.classList.remove('modal-active');
};
