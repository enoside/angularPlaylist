'use strict';

angular.module('playlistAngularApp')
  .directive('Directives', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the Directives directive');
      }
    };
  });
