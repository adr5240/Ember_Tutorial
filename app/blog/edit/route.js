import Ember from 'ember';

const { Route, set } = Ember;

export default Ember.Route.extend({

    setupController(controller, model) {
        set(controller, 'post', model);
    },

    actions: {
        goBackToIndex() {
            this.transitionTo('blog.index');
        }
    }
});
