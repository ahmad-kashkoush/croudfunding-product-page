
class cardSelect {
    constructor() {
        this.cards = document.querySelectorAll(".modal .card-nested");
    }
    select(cardNumber = -1, cardToSelect) {
        if (cardNumber === -1) {
            this.select2();
            return;
        }
        if (!cardToSelect) return;
        resetSelected();
        cardToSelect.classList.add("selected");
        cardToSelect.querySelector("input").checked = true;

    }
    select2(cardToSelect) {
        if (!cardToSelect) return;
        cardToSelect.classList.add("selected");
        cardToSelect.querySelector("input").checked = true;

    }
    reset() {
        this.cards.forEach(card => {
            card.classList.remove("selected");
            card.querySelector("input").checked = false;
        })
    }

}


export default new cardSelect();