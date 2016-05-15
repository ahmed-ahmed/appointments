'use strict';

/**
 * @ngdoc directive
 * @name budgetApp.directive:calender
 * @description
 * # calender
 */
angular.module('app')
  .directive('calender', function () {
    return {
      // templateUrl: 'calender/calender.html',
      restrict: 'E',
      controller: function() {
      	console.log('hi')
      },
      link: function postLink(scope, element, attrs) {
        element.text('this is the calender directive');
      }
    };
  });