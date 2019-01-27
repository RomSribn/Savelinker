import Model from './js/model';
import View from './js/view';
import Controller from './js/controller';
import './css/style.css';

const model = new Model();
const view = new View();

new Controller(model, view);
// view.showSomething();
model.fetchItems('some.com');
model.fetchItems('google.com');
view.init(model.getAllItems());