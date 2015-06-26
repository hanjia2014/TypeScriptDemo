module TSExample2.Services {
    export class WeatherService implements TSExample2.Interfaces.IWeatherService {

        static $inject = ["$http", "$q"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

        }

        getWeatherPromise(lat: number, lon: string): ng.IPromise<any> {
            var deferred = this.$q.defer();

            this.$http.get('http://api.openweathermap.org/data/2.5/weather' + "?lat=" + lat + "&lon=" + lon)
                .then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }

    angular.module("TSExample2").service("TSExample2.Services.WeatherService", WeatherService);
}