import Component from '@ember/component';

export default Component.extend({
  classNames: ['aud-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.filter('').then((resultsaud) => this.set('resultsaud', resultsaud));
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.value;
      let filterAction = this.filter;
      filterAction(filterInputValue).then((filterResultsAud) => this.set('resultsaud', filterResultsAud));
    }
  }

});
