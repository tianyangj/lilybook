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

        var url1 = 'https://soundcloud.com/chieh0326/frederic-chopin-fantaisie';
        var url2 = 'https://soundcloud.com/mohamed-ibrahim-60/frederic-chopin-nocturne-in-e';
        var url = url === url1 ? url2 : url1;

        $scope.$watch(function() {
            return this.composition;
        }.bind(this), function(newVal, oldVal) {
            if (newVal !== oldVal) {
                var iframeElement = $element.find('iframe');
                var widget = SC.Widget(iframeElement[0]);
                url = url === url1 ? url2 : url1;
                console.log('loading...', url, newVal.title, iframeElement[0].src);
                widget.load(url, {
                    auto_play: false,
                    buying: false,
                    liking: false,
                    download: false,
                    sharing: false,
                    show_artwork: false,
                    show_comments: false,
                    show_playcount: false,
                    show_user: false
                });
            }
        });
    }
})();
