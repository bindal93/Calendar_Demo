var controllers = angular.module("controllers", []);
controllers.controller('userCtrl', [
		'$scope',
		function($scope) {

			$scope.days = [ "Sunday", "Monday", "Tuesday", "Wednesday",
					"Thursday", "Friday", "Saturday" ];
			$scope.date = [];
			for (var j = 1; j <= 31; j = j + 7) {
				var arr1 = [];
				for (var i = j; i <= j + 6 && i <= 31; i++) {
					arr1.push(i);

				}
				$scope.date.push(arr1);
				arr1 = [];

			}
			$scope.daySelected = "";
			$scope.dateSelected = function(event) {
				$scope.daySelected = event.target.id;
				alert($scope.daySelected);
			}
		} ]);