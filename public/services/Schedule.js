//FACTORY

(function() {
  'use strict';
  angular.module('stamplay')
  .factory('Schedule', Schedule);

  function Schedule($http, $q){
	return {
    	getScheduleData : function(){
        var q = $q.defer();
    		Stamplay.User.get({}).then(function(res) {
          q.resolve(res);
        });
        return q.promise;
    	},
      update : function(info){
        var q = $q.defer();
        Stamplay.User.update(info.id, info).then(function(res) {
          q.resolve(res);
        }, function(err) {
          alert(err.message);
        });
        return q.promise;
      }
	};
}
})();