angular
  .module( "todoApp", [ "ui.router" ] )
  .config( MyRouter )

function MyRouter ( $stateProvider, $urlRouterProvider) {
	// here's the routing things
	$stateProvider
		.state( "home", {
			url: "", //   referes to `/` or no `/`
			templateUrl: "home.html"
		})
		.state( "archive", {
			url: "/archive",
			templateUrl: "archive.html"
		})
}