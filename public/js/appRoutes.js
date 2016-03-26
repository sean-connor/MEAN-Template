angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

$routeProvider

    // home page
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    })

    // tasks page that will use the NerdController
    .when('/tasks', {
        templateUrl: 'views/task.html',
        controller: 'TaskController'
    });

$locationProvider.html5Mode(true);

}]);
