window.dbox = (function () {
   
    var dbox = {
        test: function (selector) {
          alert('Test passed');
        }   
    };
     
    return dbox;
}());


angular.module('dbox',[]); 


	angular
	    .module('dbox')
	    .directive('myExample', myExample);

	function myExample() {
	    var directive = {
	        restrict: 'E',
	        template: '<div>Blanca por que ella manda</div>',
	        scope: {
	       
	        },
	        controller: myExampleController,
	        controllerAs: 'vm',
	        bindToController: true // because the scope is isolated
	    };

	    return directive;
	}



	function myExampleController() {
	  var vm = this;

	  //---------------------------------------
	  alert('Funcionó');
	}



