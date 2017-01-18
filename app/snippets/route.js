import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('snippet');
  },
  actions: {
    deleteSnippet(id) {
      this.store.find('snippet', id).then(snip => {
        snip.deleteRecord();
        snip.save();
      })


    }
  }

});
