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
   /* fetchItems() {
        return api.getAllNotes().then(notes => {
            this.items = notes;

            return this.items;
        });
    }
*/
}
