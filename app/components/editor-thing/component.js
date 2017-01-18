import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.editor = window.ace.edit('editor');
  },
  actions: {
    getValue: function() {
      console.log(this.editor.getValue())
    }
  }
});
