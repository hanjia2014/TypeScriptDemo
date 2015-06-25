module TSExample2.Services {
    export class PlayListService implements TSExample2.Interfaces.IPlayListService {
        httpService: ng.IHttpService;
        static $inject = ["$http"];
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        getPlaylist = function () {
            var res : Array <TSExample2.Interfaces.ITrack> = [
                { title: "Numb", artist: "Linkin Park", rating: 5 },
                { title: "Fire Flies", artist: "Owl City", rating: 4.3 },
                { title: "Yellow", artist: "coldplay", rating: 4.5 },
                { title: "Skyfall", artist: "Adele", rating: 4.5 }
            ];
            return res;
        }
    }

    angular.module("TSExample2").service("TSExample2.Services.PlayListService", PlayListService);
}