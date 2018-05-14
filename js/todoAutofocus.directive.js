function todoAutofocus() {
    return {
        restrict: 'A',
        scope: false,
        link: function($scope, $element, $attrs) {
            $scope.$watch($attrs.todoAutofocus, function(newValue, oldValue) {
                if(!newValue) {
                    return;
                }
                setTimeout(function() {
                    $element[0].focus();
                });                
            });
        }
    }
}

angular
    .module('app')
    .directive('todoAutofocus', todoAutofocus);