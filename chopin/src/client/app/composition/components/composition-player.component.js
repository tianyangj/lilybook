(function() {
    'use strict';

    angular.module('app.composition').component('lbCompositionPlayer', {
        templateUrl: 'app/composition/components/composition-player.html',
        bindings: {
            composition: '<'
        },
        controller: CompositionPlayerController
    });

    CompositionPlayerController.$inject = ['$scope', '$element']

    function CompositionPlayerController($scope, $element) {

        $scope.$watch(function() {
            return this.composition;
        }.bind(this), function(newVal, oldVal) {
            if (newVal !== oldVal) {
                console.log('composition updated', newVal.title);
            }
        });
        
        //var iframeElement = $element.find('iframe');
        //var widget = SC.Widget(iframeElement[0]);
        //console.log(iframeElement, widget)
    }
})();
