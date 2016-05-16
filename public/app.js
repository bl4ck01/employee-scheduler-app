(function() {
  'use strict';
  var app = angular.module('stamplay', ['ui.router','ngStamplay'])
  .config(Config);
  Config.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];


function Config($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider.state('Login',{
    url: '/login',
    templateUrl: './public/views/login.html'
  }).state('Role',{
    url: '/role',
    templateUrl: './public/views/role.html'
  }).state('RegisterEmployee',{
    url: '/register-employee',
    templateUrl: './public/views/registerEmployee.html'
  }).state('RegisterAdmin',{
    url: '/register-admin',
    templateUrl: './public/views/registerAdmin.html'
  });
  
  $urlRouterProvider.otherwise('/login');
  // $locationProvider.html5Mode(true);
  }

})();