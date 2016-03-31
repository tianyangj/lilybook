(function() {
    'use strict';

    angular.module('app.layout').component('lbFooter', {
        templateUrl: '/src/client/app/layout/lb-footer.html',
        controller: FooterComponentController
    });

    FooterComponentController.$inject = ['$rootScope'];

    function FooterComponentController($rootScope) {

        var url;
        function getUrl() {
            var url1 = 'https://soundcloud.com/chieh0326/frederic-chopin-fantaisie';
            var url2 = 'https://soundcloud.com/mohamed-ibrahim-60/frederic-chopin-nocturne-in-e';
            url = url === url1 ? url2 : url1;
            return url;
        }

        this.$onInit = function() {
            this.height = '0';
        };

        this.close = function() {
            this.height = '0';
            document.getElementById('soundcloud').innerHTML = null;
        };

        $rootScope.$on('LB_EVENT_PLAYER', function(event, message) {
            console.log('got message', message);
            this.height = '120px';
            SC.oEmbed(getUrl(), {
                auto_play: true,
                buying: false,
                liking: false,
                download: false,
                sharing: false,
                show_artwork: false,
                show_comments: false,
                show_playcount: false,
                show_user: false,
                maxheight: 120
            }).then(function(embed) {
                embed.html = embed.html.replace('visual=true&', '');
                document.getElementById('soundcloud').innerHTML = embed.html;
            });
        }.bind(this));
    }

})();
