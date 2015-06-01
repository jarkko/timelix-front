import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('timers', function() {
    this.route('show', { path: ':timer_id' }, function () {
      this.resource('results', function () {
        this.route('new');
      })
    })
  });
  this.route('results');
  this.route('runners');
  this.route('categories');
});

export default Router;
