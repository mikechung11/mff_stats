﻿(function () {
    "use strict";
    angular
        .module("mainApp")
        .controller("addController", AddController);

    // Inject services
    AddController.$inject = ["$scope", "$window", "service"];

    function AddController($scope, $window, service) {
        var vm = this;

        // View model
        vm.item = {};
        vm.items = [];
        vm.$scope = $scope;
        vm.service = service;
        vm.$onInit = _init;
        //vm.add = _add;

        // The Fold
        // Initialize
        function _init() {
            console.log("Initialized.");
            //vm.service.get('/api/character/')
            //    .then(_getSuccess, _error);
        }

        // Add Button
        //function _add() {
        //    console.log("Add button clicked.");
        //    $window.location.href = "/admin/character/add";
        //}

        // Get By Id Success
        //function _getSuccess(res) {
        //    console.log(res);
        //    vm.items = res.data.items;
        //    console.log(vm.items);
        //}

        // Error
        function _error(err) {
            console.log(err);
        }
    }
})();