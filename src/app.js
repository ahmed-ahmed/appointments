angular.module('app', ['ngRoute', 
  'ui.mask',
  'ngMessages',
  'mp.datePicker',
  'ngMaterial'])
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
      .when('/appointment', {
        templateUrl: 'appointment/appointment.html',
        controller: 'appointmentController',
        controllerAs: 'appointment'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
