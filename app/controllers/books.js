import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByGenre(param) {
      if (param !== '') {
        return this.store.query('book', { genre: param });
      } else {
        return this.store.findAll('book');
      }
    }
  }
});
