//redister these module with app
var app = angular.module('myApp', ['ngAnimate', 'ngSanitize', 'dndLists'])

// use service
app.controller('kanBanCtrl', function($scope){
  var ctrl = this;
  ctrl.taskList = [
    {tasks: [{name: 'Task 1', selected: false}, {name: 'Task 2', selected: false}, {name: 'Task 3', selected: false}], label: 'TO DO', class: 'info', dragging: false},
    {tasks: [{name: 'Task 4', selected: false}, {name: 'Task 5', selected: false}, {name: 'Task 6', selected: false}], label: 'DOING', class: 'primary', dragging: false},
    {tasks: [{name: 'Task 7', selected: false}, {name: 'Task 8', selected: false}, {name: 'Task 9', selected: false}], label: 'PENDING', class: 'warning', dragging: false},
    {tasks: [{name: 'Task 10', selected: false}, {name: 'Task 13', selected: false}, {name: 'Task 12', selected: false}], label: 'DONE', class: 'success', dragging: false}
  ]
  console.log('Hello World!');
});
