// var myapp=angular.module('myapp', [])
    myapp.directive('selectAddress', function() {
      return {
        restrict: 'EA',
        scope:false,
        transclude: true,
        scope: {
          mainCity: '=?',
          selected: '=',
          showAddress: '=',
          LoadAddressSelection: "&"
        },
        scope:selectedCitys =[],
        templateUrl: 'selectAddress.html',
        link: function(scope,element,iAttrs, controller) {
          scope.mainCitys=[{"mainCity":"北京"},{"mainCity":"上海"},{"mainCity":"广州"},{"mainCity":"深圳"},{"mainCity":"天津"},{"mainCity":"武汉"},{"mainCity":"西安"},{"mainCity":"成都"},{"mainCity":"大连"},
            {"mainCity":"长春"},{"mainCity":"沈阳"},{"mainCity":"南京"},{"mainCity":"济南"},{"mainCity":"青岛"},{"mainCity":"杭州"},{"mainCity":"苏州"},{"mainCity":"无锡"},{"mainCity":"宁波"},
            {"mainCity":"重庆"},{"mainCity":"郑州"},{"mainCity":"长沙"},{"mainCity":"福州"},{"mainCity":"厦门"},{"mainCity":"哈尔滨"},{"mainCity":"石家庄"},{"mainCity":"合肥"},{"mainCity":"惠州"}];
           scope.selected='';
            scope.setCity =function(mainCity)
            {
               scope.mainCity=mainCity;
            };

            scope.$watch('mainCity', function(newV) {
              if(newV)
              {
                selectedCitys.push(newV);
                newV += '  ';
                scope.selected += newV;
              }
            });

            scope.clear = function() {
              scope.selected='';
            };

            scope.submit =function()
            {
              console.log(scope.showAddress);
            }
        }
      };
    });