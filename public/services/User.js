//FACTORY

(function() {
  'use strict';
  angular.module('stamplay')
  .factory('User', User);

  function User($http, $q, $stamplay){
	return {
    	Register : function(userInfo){
        var q = $q.defer();
    		Stamplay.User.signup(userInfo).then(function(res){
        		q.resolve(res);
    		});	
        return q.promise;
    	},
      assignRole : function(userId, key){
        var q = $q.defer();
        Stamplay.User.setRole(userId, key).then(function() {
          q.resolve();
        }); 
        return q.promise;
      },
      signIn : function(user){
        var q = $q.defer();
        Stamplay.User.login(user).then(function(){
            q.resolve();
        }); 
        return q.promise;
      }
	};
}
})();