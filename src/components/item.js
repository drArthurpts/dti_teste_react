class item{

    static lastId = 0;

    constructor(text) {
        this.id = item.lastId++;
        this.text = text;
        this.done = false;

    }

}

export default item;