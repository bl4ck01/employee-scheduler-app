//FACTORY

(function() {
  'use strict';
  angular.module('stamplay')
  .factory('User', User);

  function User($http, $q, $stamplay){
	return {
    	newEmployee : function(employee){
        var q = $q.defer();
    		Stamplay.User.signup(employee).then(function(res){
        		q.resolve(res);
    		});	
        return q.promise;
    	},
      assignRole : function(employee){
        var q = $q.defer();
        Stamplay.User.signup(employee).then(function(res){
            q.resolve(res);
        }); 
        return q.promise;
      }
	};
}
})();