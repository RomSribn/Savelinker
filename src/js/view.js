import source from './templates/card.hbs'
export default class View{
        constructor(){
            this.cardMarkup = document.querySelector('.cards');
            this.deleteBtn = document.querySelector('.btn');
            this.forSearching = {
                input: document.querySelector('input[type="text"]'),
                submit: document.querySelector('input[type="submit"]')
            }

        }
}