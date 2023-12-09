
class ModalView {
    constructor() {
        this.overlay = document.querySelector('.overlay');
        this.modal = document.querySelector('.modal-default');
        this.modalCompleted = document.querySelector('.modal-completed');
    }
    open(isModalCompleted = false) {
        this.close();
        this.close(true);

        this.overlay.classList.remove('d-none');
        if (isModalCompleted)
            this.modalCompleted.classList.remove('d-none');
        else
            this.modal.classList.remove('d-none');
    }
    close(isModalCompleted = false) {
        this.overlay.classList.add('d-none');
        this.modal.classList.add('d-none');
        if (isModalCompleted)
            this.modalCompleted.classList.add('d-none');
        else
            this.modal.classList.add('d-none');
    }

}
export default new ModalView();