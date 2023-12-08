import bookmarkView from "./views/bookmarkView";
import modalView from "./views/modalView";
import modalButtons from "./views/modalButtons";



//  Open Close modals
const closeModal = function (e) {
    e.preventDefault();
    const ele = e.target.closest('.btn-modal-close-completed');
    let notCompleted = !ele;
    modalView.close(!notCompleted);
}
const openModal = function (e) {
    e.preventDefault();
    modalView.open();

}
const handleModalOpen = function (openners) {
    openners.forEach(opener => {
        opener.addEventListener("click", openModal)
    })
}

const handleModalClose = function (closers) {
    closers.forEach(closer => {
        closer.addEventListener("click", closeModal);
    });
    document.addEventListener("keydown", function (e) {
        e.preventDefault();
        if (e.key === "Escape")
            closeModal(e);
    })
}
//  Select 
const handleSelect = function () {
    const resetSelected = () => {
        document.querySelectorAll(".modal .card-nested").forEach(card => {
            card.classList.remove("selected");
            card.querySelector("input").checked = false;
        });
    }
    const btns = document.querySelectorAll(".btn-select");
    btns.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            modalView.open();
            const cardNumber = e.target.dataset.cardNumber;
            const cardToSelect = document.querySelector(`.modal div[data-card-number="${cardNumber}"]`);
            if (!cardToSelect) return;
            resetSelected();
            cardToSelect.classList.add("selected");
            cardToSelect.querySelector("input").checked = true;

        })
    })
    const radios = document.querySelectorAll(".modal .card-nested");
    radios.forEach(radio => {
        radio.addEventListener('change', function (e) {
            e.preventDefault();
            resetSelected();
            const cardToSelect = e.target.closest(".card-nested");
            if (!cardToSelect) return;
            cardToSelect.classList.add("selected");
            cardToSelect.querySelector("input").checked = true;

        })
    })

}



const init = function () {
    bookmarkView.handler();
    modalButtons.addHandlerModalOpen(handleModalOpen)
    modalButtons.addHandlerModalClose(handleModalClose);
    handleSelect();


}
init();