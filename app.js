(function(){
  let app = angular.module('example-app', []);

  app.controller('ExampleController', ['$scope', function($scope){
    $scope.isEnabled = true;

    $scope.clickFunction = function(){
      $('.sidebar').animate({width: 'toggle'});
      if ($scope.isEnabled == true) {
        $scope.isEnabled = false;
      } else {
        $scope.isEnabled = true;
      }
    };

    $scope.hideSidebar = function(){
      $('.sidebar').animate({width: 'hide'});
      $scope.isEnabled = true;
    };

    $scope.allWhite = function(){
      $('.main-page').css({backgroundColor: '#ffffff'});
      $('.f2, .f3, .f4').fadeToggle();
      $('.fa-info-circle, .label').animate({height: 'toggle'});
    };

    $scope.toggleGallery = function(){

      if($('.f2').hasClass('horizontal')){
        $('.image').fadeOut();
        setTimeout(function(){
          $('.f2').removeClass('horizontal');
          $('.f1, .f3, .f4').fadeIn();
          $('.fa-camera-retro, .label').animate({height: 'show'});
        }, 500);
      }else {
        $('.main-page').css({backgroundColor: '#ffae00'});
        $('.f1, .f3, .f4').fadeOut();
        $('.fa-camera-retro, .label').animate({height: 'hide'});
        setTimeout(function(){
          $('.f2').addClass('horizontal');
          $('.image').fadeIn();
        }, 500);
      }

    };

    $scope.allGreyL = function(){
      $('.main-page').css({backgroundColor: '#474747'});
      $('.f1, .f2, .f4').fadeToggle();
      $('.fa-users, .label').animate({height: 'toggle'});
    };

    $scope.allGreyD = function(){
      $('.main-page').css({backgroundColor: '#9b9b9b'});
      $('.f1, .f2, .f3').fadeToggle();
      $('.fa-address-book, .label').animate({height: 'toggle'});
    };

    $scope.pictures = [
      {url: "a"},
      {url: "a"},
      {url: "a"},
      {url: "a"},
      {url: "a"},
      {url: "a"},
      {url: "a"},
      {url: "a"},
      {url: "a"}
    ];

  }]);
})();
