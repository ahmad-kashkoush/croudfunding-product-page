class ModalButtons {
    constructor() {
        this.closers = document.querySelectorAll('.btn-modal-close');
        this.openners = document.querySelectorAll('.btn-modal');
    }
    addHandlerModalOpen(handler) {
        handler(this.openners);
    }
    addHandlerModalClose(handler) {
        handler(this.closers);
    }


}
export default new ModalButtons();