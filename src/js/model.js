import * as api from '../services/api';

export default class Model {
    constructor(items = []) {
        this.items = items;
        this._selectedItemId = null;
    }
    fetchItems(link) {
        return api.getAllNotes(link).then(data => {
            this.items.url.push(data);
            // return this.items;
        });
    }
    pushNewItem(item){
        localStorage.setItem(item.url, JSON.stringify(item));
    }
    isValidUrl(url){
        const objRE = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
        return objRE.test(url);
    }
    getAllItems(){
        this.items.forEach(i => console.log(i));
        return this.items;
    }
}
