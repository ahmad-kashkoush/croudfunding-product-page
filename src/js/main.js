import bookmarkView from "./views/bookmarkView";
import modalView from "./views/modalView";
import modalButtons from "./views/modalButtons";



//  Open Close modals
const handleModalOpen = function (openners) {
    openners.forEach(opener => {
        opener.addEventListener("click", function (e) {
            e.preventDefault();
            modalView.open();
        })
    })
}
const handleModalClose = function (closers) {
    closers.forEach(closer => {
        closer.addEventListener("click", function (e) {
            e.preventDefault();
            const ele = e.target.closest('.btn-modal-close-completed');
            let notCompleted = !ele;
            modalView.close(!notCompleted);
        })
    })
}




const init = function () {
    bookmarkView.handler();
    modalButtons.addHandlerModalOpen(handleModalOpen)
    modalButtons.addHandlerModalClose(handleModalClose);


}
init();