var TSExample2;
(function (TSExample2) {
    var Services;
    (function (Services) {
        var PlayListService = (function () {
            function PlayListService($http) {
                this.getPlaylist = function () {
                    var res = [
                        { title: "Numb", artist: "Linkin Park", rating: 5 },
                        { title: "Fire Flies", artist: "Owl City", rating: 4.3 },
                        { title: "Yellow", artist: "coldplay", rating: 4.5 },
                        { title: "Skyfall", artist: "Adele", rating: 4.5 }
                    ];
                    return res;
                };
                this.httpService = $http;
            }
            PlayListService.$inject = ["$http"];
            return PlayListService;
        })();
        Services.PlayListService = PlayListService;
        angular.module("TSExample2").service("TSExample2.Services.PlayListService", PlayListService);
    })(Services = TSExample2.Services || (TSExample2.Services = {}));
})(TSExample2 || (TSExample2 = {}));
//# sourceMappingURL=PlaylistService.js.map