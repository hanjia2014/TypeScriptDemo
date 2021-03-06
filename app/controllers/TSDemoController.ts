﻿module TSExample2.Controllers {
    export class TSDemoController {
        private weather: any;
        playListService: TSExample2.Interfaces.IPlayListService;
        static $inject = ["TSExample2.Services.PlayListService", "$scope", "$http", "$q", "TSExample2.Services.WeatherService"];
        constructor(playListService: TSExample2.Interfaces.IPlayListService, private $scope: TSExample2.Scopes.IGenericScope, private $http: ng.IHttpService, private $q: ng.IQService, private weatherService: TSExample2.Services.WeatherService) {

            this.playListService = playListService;
            this.$scope.message = "Hello from scope";
            this.$scope.person = new TSExample2.Scopes.Person();
            this.$scope.person.Id = 1;
            this.$scope.person.Name = "han jia";
            this.controllerMessage = "Hello from controller";
        }
        favorites: Array<TSExample2.Interfaces.ITrack>;
        controllerMessage: string;
        weatherAsync: any;
        getFavourites = () => {
            this.favorites = this.favorites ? null : this.playListService.getPlaylist();
        }

        getWeather() {
            this.$http.get('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139').success((data: any, status: any) => {
                this.weather = data;
                this.controllerMessage = "Hello";
            });
        }

        getWeatherAsync = () => {
            this.$q.all([this.weatherService.getWeatherPromise(this.$scope.lat, this.$scope.lon).then((data: any) => {
                this.weatherAsync = data;
            })
            ]).then(() => {
                console.log("all promises done");
            });

            //this.weatherService.getWeatherPromise(this.$scope.lat, this.$scope.lon).then((data: any) => {
            //    this.weatherAsync = data;
            //});
        }

        setMessage = (msg: string) => {
            this.playListService.setMessage(msg);
        }
    }

    angular.module("TSExample2").controller("TSExample2.Controllers.TSDemoController", TSDemoController);
}