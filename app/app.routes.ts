module TSExample2 {
    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/home",
                {
                    controller: "TSExample2.Controllers.TSDemoController",
                    templateUrl: "/app/views/playlist.html",
                    controllerAs: "playList"
                })
                .otherwise({
                redirectTo: "/home"
            });
        }
    }
}