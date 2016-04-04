angular.module('app', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/messages', {
        templateUrl: 'messages/messages.html',
        controller: 'messagesController',
        controllerAs: 'messages'
      })
      .when('/appointments', {
        templateUrl: 'appointments/appointments.html',
        controller: 'appointmentsController',
        controllerAs: 'appointments'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
