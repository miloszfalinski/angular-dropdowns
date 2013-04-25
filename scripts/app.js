var app;

app = angular.module('app', ['ng-dropdowns']);

app.controller('AppCtrl', function($scope) {
  $scope.dropdown = [
    {
      text: 'Option1',
      iconCls: 'someicon'
    }, {
      text: 'Option2'
    }, {
      divider: true
    }, {
      text: 'Option4',
      href: '#option4'
    }
  ];
  return $scope.blah = "Select an Option";
});
