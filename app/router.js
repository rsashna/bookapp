import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('selecting');
  this.route('image');
  this.route('about');
  this.route('books', function() {
    this.route('show', {path: '/:book_id'});
  });
});

export default Router;
