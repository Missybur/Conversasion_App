'use strict';

let app = angular.module('socialLogin', ['satellizer', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', { url: '/', templateUrl: 'partials/home.html', controller: 'homeCtrl'})
    .state('login', { url: '/login', templateUrl: 'partials/login.html', controller: 'loginCtrl'})

    .state('profile', { url: '/profile', templateUrl: 'partials/profile.html', controller: 'profileCtrl'})

    $authProvider.github({
      clientId: 'a24f8ae4f7f98525f469'
    });
    $authProvider.google({
      clientId: '458863588800-tm5t0hu3l19lk5kkfbop7s61tpphcdv4.apps.googleusercontent.com'
    });
    $authProvider.facebook({
      clientId: '1493282791002039'
    });

    $authProvider.twitter();

    // $authProvider.live({
    //   clientId: '000000004C173030',
    //   authorizationEndpoint: 'https://login.live.com/oauth20_desktop.srf',
    //   redirectUri: 'http://mylocalwebsite.net:3000'

    // });
});
