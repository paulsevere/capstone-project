import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(arguments);
    this.editable = JSON.parse(window.localStorage.getItem('storage:auth')).id === this.get('snippet').get('_owner');
  },
  actions: {
    deleteItem() {
      // console.log(this.get('auth'))
      let snippet = this.get('snippet');
      // window.snip = snippet;
      snippet.destroyRecord()
    },

  }
});
