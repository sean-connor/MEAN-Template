angular.module('TaskService', []).factory('Task', ['$http', function($http) {

    return {
        // call to get all tasks
        get : function() {
            return $http.get('/api/tasks');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new task
        create : function(taskData) {
            return $http.post('/api/tasks', taskData);
        },

        // call to DELETE a task
        delete : function(id) {
            return $http.delete('/api/tasks/' + id);
        }
    }

}]);
