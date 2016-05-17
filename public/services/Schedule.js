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
    	}
	};
}
})();