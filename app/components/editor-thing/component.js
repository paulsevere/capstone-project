import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(arguments)
    this.title = ""
  },
  didInsertElement() {
    this.editor = window.ace.edit('editor');
  },
  actions: {
    getValue: function() {
      let content = this.editor.getValue();
      this.sendAction('save_snippet', {
        text: content,
        title: this.title
      })
    }
  }
});
