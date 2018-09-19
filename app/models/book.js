import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
    author: DS.attr(),
    city: DS.attr(),
    genre: DS.attr(),
    image: DS.attr(),
    audience: DS.attr(),
    description: DS.attr(),
    rating: DS.attr()
});
