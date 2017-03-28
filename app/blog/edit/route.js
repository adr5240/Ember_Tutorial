import Ember from 'ember';

const { Route, set, get } = Ember;

export default Ember.Route.extend({

    setupController(controller, model) {
        set(controller, 'post', model);
        set(controller, 'editable', true);
    },

    actions: {
        goBackToIndex() {
            this.transitionTo('blog.index');
        },
        toggleEdit() {
            this.controller.toggleProperty('editable');
        }
    }
});
