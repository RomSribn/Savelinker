import Model from './js/model';
import View from './js/view';
import Controller from './js/controller';
import './css/style.css';

const model = new Model();
const view = new View();

new Controller(model, view);

// view.showSomething();
// model.fetchItems('some.com').then(i=> view.init(i));
// view.init(model.getAllItems());
// api.getAllNotes('some.com').then(i => console.log(i));