import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save_snippet(snip) {
      this.store.createRecord('snippet', snip).save()
    }
  }
});
