module TSExample2.Controllers {
    export class TSTestController {
        static $inject = ["TSExample2.Services.PlayListService", "$scope", "$location"];
        constructor(private playListService: TSExample2.Interfaces.IPlayListService, private $scope: TSExample2.Scopes.IGenericScope, private $location: ng.ILocationService) {
            $scope.message = "message from Test Controller";
            $scope.transferMessage = playListService.getMessage();
        }
    }

    angular.module("TSExample2").controller("TSExample2.Controllers.TSTestController", TSTestController);
}