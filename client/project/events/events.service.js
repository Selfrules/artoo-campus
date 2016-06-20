angular.module('appenda').service('EventsSrv', function ($resource) {
  
  this.maxId = 3;
  
  var Event = $resource ('/api/events/:id', {
    id: '@id',
  }, {});
  
  //public API
  
  this.query = function () {
    return Event.query().$promise;
  };
  
  this.create = function () {
    return new Event();
  };
  
  this.delete = function () {
    return Event.delete().$promise;
  };
});
