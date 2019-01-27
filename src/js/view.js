import template from '../templates/card.hbs'
const Handlebars = require('handlebars');

export default class View{
        constructor(){
            this.cardMarkup = document.querySelector('.cards');
            // this.deleteBtn = document.querySelector('.btn');
            this.forSearching = {
                input: document.querySelector('input[type="text"]'),
                submit: document.querySelector('input[type="submit"]')
            }

        }

       deleteCard(evt){
           if(evt.target.className === "btn"){
               localStorage.removeItem(evt.target.parentElement.parentElement.firstElementChild.href);
               evt.target.parentElement.parentElement.remove()
           }
       }
        init(item){

            this.cardMarkup.insertAdjacentHTML('afterbegin', template(item));
        }
}