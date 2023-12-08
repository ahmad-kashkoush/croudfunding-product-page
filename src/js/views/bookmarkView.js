class BookMarkView {
    btnBookmark = document.querySelector(".btn-bookmark");
    constructor() {

    }
    handler() {
        this.btnBookmark.addEventListener("click", function (e) {
            e.preventDefault();
            this.btnBookmark.classList.toggle("btn-bookmarked");
            this.btnBookmark.classList.toggle("btn-not-bookmarked");
        }.bind(this));
    }

}


export default new BookMarkView();