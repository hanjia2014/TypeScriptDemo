var TSExample2;
(function (TSExample2) {
    var Controllers;
    (function (Controllers) {
        var TSDemoController = (function () {
            function TSDemoController(playListService, $scope, $http, $q, weatherService) {
                var _this = this;
                this.$scope = $scope;
                this.$http = $http;
                this.$q = $q;
                this.weatherService = weatherService;
                this.getFavourites = function () {
                    _this.favorites = _this.favorites ? null : _this.playListService.getPlaylist();
                };
                this.getWeatherAsync = function () {
                    _this.weatherService.getWeatherPromise(_this.$scope.lat, _this.$scope.lon).then(function (data) {
                        _this.weatherAsync = data;
                    });
                };
                this.playListService = playListService;
                this.$scope.message = "Hello from scope";
                this.$scope.person = new TSExample2.Scopes.Person();
                this.$scope.person.Id = 1;
                this.$scope.person.Name = "han jia";
                this.controllerMessage = "Hello from controller";
            }
            TSDemoController.prototype.getWeather = function () {
                var _this = this;
                this.$http.get('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139').success(function (data, status) {
                    _this.weather = data;
                    _this.controllerMessage = "Hello";
                });
            };
            TSDemoController.$inject = ["TSExample2.Services.PlayListService", "$scope", "$http", "$q", "TSExample2.Services.WeatherService"];
            return TSDemoController;
        })();
        Controllers.TSDemoController = TSDemoController;
        angular.module("TSExample2").controller("TSExample2.Controllers.TSDemoController", TSDemoController);
    })(Controllers = TSExample2.Controllers || (TSExample2.Controllers = {}));
})(TSExample2 || (TSExample2 = {}));
//# sourceMappingURL=TSDemoController.js.map