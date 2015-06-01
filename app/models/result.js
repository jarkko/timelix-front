import DS from 'ember-data';

export default DS.Model.extend({
  runner: DS.belongsTo('runner'),
  result: DS.attr(),
  timer: DS.belongsTo('timer'),
  bibNumber: DS.attr()
});
