'use strict ';
import bookmarkView from "./views/bookmarkView";
import modalView from "./views/modalView";
import modalButtons from "./views/modalButtons";
import cardSelect from "./views/cardsToSelect";


//  Open Close modals
const closeModal = function (e) {
    e.preventDefault();
    const ele = e.target.closest('.btn-modal-close-completed');
    const isCompleted = true && ele;
    modalView.close(isCompleted);
}
const openModal = function (e) {
    e.preventDefault();
    const ele = e.target.closest('.btn-modal-open-completed');
    const isCompleted = true && ele;
    modalView.open(isCompleted);

}
const handleModalOpen = function (openners) {
    console.log(openners);
    openners.forEach(opener => {
        opener.addEventListener("click", openModal)
    })
}

const handleModalClose = function (closers) {
    closers.forEach(closer => {
        closer.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {
            closeModal(e);
            modalView.close(true);
        }

    })
}
//  Select 

const handleSelectButtons = function () {
    const btns = document.querySelectorAll(".btn-select");
    btns.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            modalView.open();
            const cardNumber = e.target.dataset.cardNumber;
            const cardToSelect = document.querySelector(`.modal div[data-card-number="${cardNumber}"]`);
            cardSelect.select(cardNumber, cardToSelect);

        })
    })
}
const handleSelectRadios = function () {
    const radios = document.querySelectorAll(".modal .card-nested");
    radios.forEach(radio => {
        radio.addEventListener('change', function (e) {
            e.preventDefault();
            const cardToSelect = e.target.closest(".card-nested");
            cardSelect.select(-1, cardToSelect);

        })
    })

}




const init = function () {
    bookmarkView.handler();
    modalButtons.addHandlerModalOpen(handleModalOpen)
    modalButtons.addHandlerModalClose(handleModalClose);
    handleSelectButtons();
    handleSelectRadios();


}
init();