import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('authors-notes');

  this.route('tachyons', function() {
    this.route('colors');
    this.route('typography');
    this.route('spacing');
  });

  this.route('atoms', function() {
    this.route('button');
    this.route('link');
    this.route('input');
    this.route('checkbox');
  });

  this.route('molecules', function() {
    this.route('form');
  });
});

export default Router;
