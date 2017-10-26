angular.
    module('app').
    config(
    function (
        $locationProvider,
        $routeProvider
    ) {
        // $locationProvider.html5Mode(false);
        //$locationProvider.hashPrefix('');
        $routeProvider.
            when('/', {
                templateUrl: 'includes/mousebox/main.html',
                //controller: 'HomeController'
            }).
            when('/about/', {
                templateUrl: 'includes/mousebox/about.html',
                //controller: 'noticiasListaController'
            }).
            when('/features/', {
                templateUrl: 'includes/mousebox/features.html',
                //controller: 'noticiasListaController'
            }).
            when('/photos/', {
                templateUrl: 'includes/mousebox/photos.html',
                //controller: 'noticiasListaController'
            }).
            when('/videos/', {
                templateUrl: 'includes/mousebox/videos.html',
                //controller: 'noticiasListaController'
            }).
            when('/blog/', {
                templateUrl: 'includes/mousebox/blog.html',
                //controller: 'noticiasListaController'
            }).
            when('/contact/', {
                templateUrl: 'includes/mousebox/contact.html',
                //controller: 'noticiasListaController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
    );


