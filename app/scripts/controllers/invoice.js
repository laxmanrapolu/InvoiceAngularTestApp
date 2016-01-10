'use strict';

angular.module('invoiceAppApp')
  .controller('InvoiceCtrl', ['$scope', 'ProductSvc', '$modal', function ($scope, ProductSvc, $modal) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.saveMessage = null;
        $scope.savedProducts = [];
        $scope.todayDate = new Date();
        $scope.invoiceNumber = Math.floor((Math.random() * 100000) + 10000);

        $scope.openProducts = function () {

            var modalInstance = $modal.open({
                templateUrl: 'views/products.html',
                controller: 'ProductsCtrl',
                resolve: {
                    items: function () {
                        return null;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.savedProducts.push(selectedItem);
                $scope.saveMessage = null;
            }, function () {

            });
            $scope.submit = function(){
                $scope.saveMessage = "Your order has been successfully submitted"
            }
        };
  }]);
