//FACTORY

(function() {
  'use strict';
  angular.module('stamplay')
  .factory('Schedule', Schedule);

  function Schedule($http, $q){
	return {
    	newSubscription : function(email){
        var q = $q.defer();
    		Stamplay.Object('subscription').save(email).then(function(res){
        		q.resolve(res);
    		});	
        return q.promise;
    	}
	};
}
})();