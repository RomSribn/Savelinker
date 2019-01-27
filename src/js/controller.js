import * as api from '../services/api';

export default  class Controller{
    constructor(model, view){
        this._model = model;
        this._view = view;
        this._view.forSearching.submit.addEventListener('click', this.handleInputLink.bind(this));
        this._view.cardMarkup.addEventListener('click', this._view.deleteCard);
        document.addEventListener('DOMContentLoaded', this.showCards.bind(this));
    }
    showCards(){
        // console.log(this._view.deleteBtn);
        Object.values(localStorage).map(i => {
            const item = JSON.parse(i);
            this._view.init(item);
        })
    }

    handleInputLink(){
        api.getAllNotes(this._view.forSearching.input.value).then(result => {
            if(!this._model.isValidUrl(this._view.forSearching.input.value)){
                alert('Invalid url');
                this._view.forSearching.input.value = '';
                return
            }


            for(let i = 0; i < Object.keys(localStorage).length; i += 1){
                if(this._model.isValidUrl(Object.keys(localStorage)[i])){
                    if(Object.keys(localStorage)[i] === result.url){
                        // console.log(JSON.parse(Object.values(localStorage)[i]).url);
                        alert('Existing link');
                        return;
                    }
                }
            }


                this._model.pushNewItem(result);
                this._view.init(result);
                this._view.forSearching.input.value = '';


        });
    }

}