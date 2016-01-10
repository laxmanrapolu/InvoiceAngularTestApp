/**
 * Created by rapolul on 11/23/2015.
 */
'use strict';

angular.module('invoiceAppApp')
    .controller('ProductsCtrl',['$scope', '$modalInstance','ProductSvc',  function ($scope, $modalInstance, ProductSvc) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.products = ProductSvc.getAllProducts();

        $scope.selected = {
            item: $scope.products[0]
        };

        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    }]);
