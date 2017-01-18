import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(arguments)
    this.title = this.get('snippet').get('title')
  },
  didInsertElement() {
    this.editor = window.ace.edit('editor');
    this.editor.setValue(this.get('snippet').get('text'))
  },
  actions: {
    updateSnippet: function() {
      let content = this.editor.getValue();
      // this.sendAction('save_snippet', {
      //   text: content,
      //   title: this.title
      // })
      this.get('snippet').set('text', content)
      this.get('snippet').set('title', this.title);
      this.get('snippet').save();

    }
  }
});
