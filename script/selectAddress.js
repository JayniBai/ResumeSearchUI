angular.module('myapp', [])
    .controller('Controller', ['$scope', function($scope) {
      $scope.name = 'Tobias';
    }])
    .directive('selectAddress', function() {
      return {
        restrict: 'E',
        transclude: true,
        scope: {
          mainCity: '='
        },
        templateUrl: 'selectAddress.html',
        link: function(scope) {
          scope.mainCitys=[{"mainCity":"北京"},{"mainCity":"上海"},{"mainCity":"广州"},{"mainCity":"深圳"},{"mainCity":"天津"},{"mainCity":"武汉"},{"mainCity":"西安"},{"mainCity":"成都"},{"mainCity":"大连"},
            {"mainCity":"长春"},{"mainCity":"沈阳"},{"mainCity":"南京"},{"mainCity":"济南"},{"mainCity":"青岛"},{"mainCity":"杭州"},{"mainCity":"苏州"},{"mainCity":"无锡"},{"mainCity":"宁波"},
            {"mainCity":"重庆"},{"mainCity":"郑州"},{"mainCity":"长沙"},{"mainCity":"福州"},{"mainCity":"厦门"},{"mainCity":"哈尔滨"},{"mainCity":"石家庄"},{"mainCity":"合肥"},{"mainCity":"惠州"}];
          scope.setCity =function(mainCity)
            {
              scope.mainCity=mainCity;
            }
        }
      };
    });

  
  /*
  Copyright 2017 Google Inc. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at http://angular.io/license
  */