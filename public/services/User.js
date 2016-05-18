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
        }, function(err) {
          alert(err.message);
        }); 
        return q.promise;
      },
      signIn : function(user){
        var q = $q.defer();
        Stamplay.User.login(user).then(function(){
            q.resolve();
        }); 
        return q.promise;
      },
      newEmployee : function(employee){
        var q = $q.defer();
        Stamplay.Object('email').save(employee).then(function(){
            q.resolve();
        }, function(err) {
          alert(err.message);
        });
        return q.promise;
      },
      removeEmployee : function(id){
        var q = $q.defer();
        Stamplay.User.remove(id).then(function(){
            q.resolve();
        }, function(err) {
          alert(err.message);
        }); 
        return q.promise;
      },
      setEmployeeRole : function(id){
        var q = $q.defer();
        Stamplay.User.setRole(id, "573a307a1c5c54445e751b33").then(function(){
            q.resolve();
        }, function(err) {
          alert(err.message);
        });
        return q.promise;
      },
      setAdminRole : function(id){
        var q = $q.defer();
        Stamplay.User.setRole(id, "573a307a1c5c54445e751b33").then(function(){
            q.resolve();
        }); 
        return q.promise;
      },
      getUser : function(){
        var q = $q.defer();
        Stamplay.User.currentUser().then(function(res){
            q.resolve(res);
        }); 
        return q.promise;
      }

	};
}
})();