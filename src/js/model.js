import * as api from '../services/api';

export default class Model {
    constructor(items = []) {
        this.items = items;
        this._selectedItemId = null;
    }
    fetchItems(link) {
        return api.getAllNotes(link).then(data => {
            this.items.push(data);
            //console.log(this.items);
        });
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
