/**
 * Created by rapolul on 11/22/2015.
 */
'use strict';

angular.module('invoiceAppApp')
    .service('ProductSvc', function ($http) {
        return {
            getAllProducts: function() {
                var products = [];
                products = [
                    {
                        "ProductId" : 2345,
                        "ProductName": "Samsung TV",
                        "Quantity": 1,
                        "Price": 200
                    },
                    {
                        "ProductId" : 2346,
                        "ProductName": "Nikon DSLR",
                        "Quantity": 1,
                        "Price": 500
                    },
                    {
                        "ProductId" : 2347,
                        "ProductName": "Dell Laptop",
                        "Quantity": 1,
                        "Price": 300
                    },
                    {
                        "ProductId" : 2348,
                        "ProductName": "Iphone 6S",
                        "Quantity": 1,
                        "Price": 1000
                    },
                    {
                        "ProductId" : 2349,
                        "ProductName": "Asus Tablet",
                        "Quantity": 1,
                        "Price": 300
                    }];
                return products;
            }
        }
    });