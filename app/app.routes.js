var TSExample2;
(function (TSExample2) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            $routeProvider.when("/home", {
                controller: "TSExample2.Controllers.TSDemoController",
                templateUrl: "/app/views/playlist.html",
                controllerAs: "playList"
            }).otherwise({
                redirectTo: "/home"
            });
        };
        Routes.$inject = ["$routeProvider"];
        return Routes;
    })();
    TSExample2.Routes = Routes;
})(TSExample2 || (TSExample2 = {}));
//# sourceMappingURL=app.routes.js.map