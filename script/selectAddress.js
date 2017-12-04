// var myapp=angular.module('myapp', [])
    myapp.directive('selectAddress', function($http,$q) {
      var provinces, citys;
      // delay= $q.defer();
      $http.get("data/province.json")
      .then(function(response) {
          return provinces= response.data;
      });

      $http.get("data/city.json")
      .then(function(response) {
          return citys= response.data;
      });

      return {
        restrict: 'EA',
        scope:false,
        transclude: true,
        scope: {
          mainCity: '=?',
          province: "=?",
          city: "=?",
          selected: '=?',
          showAddress: '=?',
        },
        templateUrl: 'selectAddress.html',
        link: function(scope,element,iAttrs, controller) {
          scope.$on("showAddress",function(event,args){
            scope.showAddress = args.showAddress;
            console.log(scope.showAddress);
          });

          scope.mainCitys=[{"mainCity":"北京"},{"mainCity":"上海"},{"mainCity":"广州"},{"mainCity":"深圳"},{"mainCity":"天津"},{"mainCity":"武汉"},{"mainCity":"西安"},{"mainCity":"成都"},{"mainCity":"大连"},
            {"mainCity":"长春"},{"mainCity":"沈阳"},{"mainCity":"南京"},{"mainCity":"济南"},{"mainCity":"青岛"},{"mainCity":"杭州"},{"mainCity":"苏州"},{"mainCity":"无锡"},{"mainCity":"宁波"},
            {"mainCity":"重庆"},{"mainCity":"郑州"},{"mainCity":"长沙"},{"mainCity":"福州"},{"mainCity":"厦门"},{"mainCity":"哈尔滨"},{"mainCity":"石家庄"},{"mainCity":"合肥"},{"mainCity":"惠州"}];
            
            scope.selected='';

            scope.provinces = provinces;

            scope.aSet ={
              mainCity:function(mainCity)
              {
                scope.mainCity=mainCity;
              },

              province:function(province)
              {
                scope.province=province;
                scope.citys = citys[province.id];
              },

              city:function(city)
              {
                scope.city=city;
              }

            }

            scope.$watch('mainCity', function(newV) {
              if(newV && !scope.selected.includes(newV))
              {
                newV += '  ';
                scope.selected += newV;
              }
            });

            scope.$watch('province', function(newV) {
              if (newV) {
                if(citys[newV.id]==undefined)
                {
                  newV.name += '  ';
                  scope.selected += newV.name;
                }
              }
            });

            scope.$watch('city', function(newV) {
              if(newV && !scope.selected.includes(newV.name))
              {
                newV.name += '  ';
                scope.selected += newV.name;
              }
            });

            scope.clear = function() {
              scope.selected='';
            };

            scope.submit =function()
            {
              scope.showAddress = !scope.showAddress;
              console.log(scope.showAddress);
              scope.$emit("fillInAddress",{selectedCitys: scope.selected});
              scope.$emit("showAddressChanged",{selectedCitys: scope.showAddress});
            }


        }
      };
    });