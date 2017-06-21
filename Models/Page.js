const Guid = require('guid');

class Page {

    constructor(pageDetails) {
        this.id = Guid.create().value;
        this.text = pageDetails.text;
        this.image = pageDetails.image;
        this.options = pageDetails.options;
        this.prevPage = pageDetails.pevPage;
        this.nextPage = pageDetails.nextPage;   // A mapping between options and page references
    }
}
