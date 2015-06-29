module TSExample2.Controllers {
    export class TSTestController {
        static $inject = ["TSExample2.Services.PlayListService", "$scope", "$location"];
        constructor(private playListService: TSExample2.Interfaces.IPlayListService, private $scope: TSExample2.Scopes.IGenericScope, private $location: ng.ILocationService) {
            this.$scope.message = "message from Test Controller";
            this.$scope.transferMessage = playListService.getMessage();
            this.$scope.hi = () => {
                alert("hi");
            };
        }

        test = () => {
            alert("test");
        }
    }


    angular.module("TSExample2").controller("TSExample2.Controllers.TSTestController", TSTestController);
}