import template from '../templates/card.hbs'
const Handlebars = require('handlebars');

export default class View{
        constructor(){
            this.cardMarkup = document.querySelector('.cards');
            this.deleteBtn = document.querySelector('.btn');
            this.forSearching = {
                input: document.querySelector('input[type="text"]'),
                submit: document.querySelector('input[type="submit"]')
            }

        }
        showSomething(){
            const markup = {
                title: "SOME RECORDS",
                description: "Brooklyn's Earl Greyhound, riding high on the succ…f the best rock shows around. See all tour dates.",
                image: "http://some.com/images/common/logo_header.gif",
                url: "http://some.com/"
            };
            console.log(template(markup));
            this.cardMarkup.insertAdjacentHTML('afterbegin', template(markup))
        }
        init(items){
            items.map(obj => {
                console.log(obj);
            })

        }
}