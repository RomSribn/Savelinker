import * as api from '../services/api';

export default class Model {
    constructor(items = []) {
        this._items = items;
        this._selectedItemId = null;
    }
    fetchItems() {
        return api.getAllNotes(link).then(data => {
            this._items = data;
            console.log(this._items);
            return this._items;
        });
    }
    isValidUrl(url){
        const objRE = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
        return objRE.test(url);
    }

}
