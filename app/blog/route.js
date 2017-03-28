import Ember from 'ember';

const { Route, set } = Ember;

export default Route.extend({

    model() {
        return this.store.createRecord('post', {
            title: "Tutorial blog post",
            author: "This Guy",
            content: "default content"
        });
    },

    setupController(controller, model) {
        set(controller, 'post', model);
    }
});
