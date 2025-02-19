export class Section {
    constructor({item, renderer}, containerSelector) {
        this._item = item;
        this._renderer = renderer;
        this._containerSelector = containerSelector;
    }
    
    renderItems() {
        this._item.forEach(element => {
          this._renderer(element);  
        });
    }

    addItem(element) {
        this._containerSelector.append(element);
    }

}