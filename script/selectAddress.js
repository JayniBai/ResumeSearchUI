// var myapp=angular.module('myapp', [])
    myapp.directive('selectAddress', function() {
      return {
        restrict: 'EA',
        scope:false,
        transclude: true,
        scope: {
          mainCity: '=?',
          selected: '=?',
          showAddress: '=?',
        },
        templateUrl: 'selectAddress.html',

        link: function(scope,element,iAttrs, controller) {
          scope.$on("showAddress",function(event,args){
            scope.showAddress = args.showAddress;
            console.log(scope.showAddress);
          })
          scope.mainCitys=[{"mainCity":"北京"},{"mainCity":"上海"},{"mainCity":"广州"},{"mainCity":"深圳"},{"mainCity":"天津"},{"mainCity":"武汉"},{"mainCity":"西安"},{"mainCity":"成都"},{"mainCity":"大连"},
            {"mainCity":"长春"},{"mainCity":"沈阳"},{"mainCity":"南京"},{"mainCity":"济南"},{"mainCity":"青岛"},{"mainCity":"杭州"},{"mainCity":"苏州"},{"mainCity":"无锡"},{"mainCity":"宁波"},
            {"mainCity":"重庆"},{"mainCity":"郑州"},{"mainCity":"长沙"},{"mainCity":"福州"},{"mainCity":"厦门"},{"mainCity":"哈尔滨"},{"mainCity":"石家庄"},{"mainCity":"合肥"},{"mainCity":"惠州"}];
            scope.selected='';
            scope.setCity =function(mainCity)
            {
               scope.mainCity=mainCity;
            };

            scope.$watch('mainCity', function(newV) {
              if(newV && !scope.selected.includes(newV))
              {
                newV += '  ';
                scope.selected += newV;
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
            var data=[
              {
                "name":"陕西",
                "id":01,
                "subCity":[
                      {"name":"西安"},
                      {"name":"宝鸡"},
                      {"name":"渭南"},
                      {"name":"榆林"},
                      {"name":"延安"},
                      {"name":"商洛"},
                          {"name":"汉中"},
                      {"name":"安康"},
                      {"name":"咸阳"}
                           ]
              },
              {
                "name":"海南",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              {
                "name":"河南",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              {
                "name":"河北",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              {
                "name":"广东",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },{
                "name":"广西",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              {
                "name":"山西",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              {
                "name":"山东",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              {
                "name":"湖北",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              {
                "name":"湖南",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              {
                "name":"云南",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              {
                "name":"贵州",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              {
                "name":"四川",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              {
                "name":"西藏",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              {
                "name":"甘肃",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              {
                "name":"新疆",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              {
                "name":"内蒙古",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              {
                "name":"黑龙江",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              {
                "name":"吉林",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              {
                "name":"辽宁",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              {
                "name":"浙江",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              {
                "name":"江苏",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              {
                "name":"江西",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              {
                "name":"安徽",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              {
                "name":"江苏",
                "id":02,
                "subCity":[
                      {"name":"海口"},
                      {"name":"三亚"},
                      {"name":"五指山"},
                      {"name":"文昌"},
                      {"name":"琼海"},
                      {"name":"万宁"},
                          {"name":"东方"}
                           ]
              },
              ];
              var htmlCity1="";
              var index=$(".tableDiv li").index();
              var htmlPro="";
              var len=data.length;
              for(var i=0;i<len;i++){
                    htmlPro+="<li class='tdDiv' id='"+data[i].id+"'>"+data[i].name+"</li>";
                    htmlCity1+="<li class='cityDiv'>"+data[i].subCity.name+"</li>";    
                    
              }
              $('.tableDiv').html(htmlPro);
              
              // var names=data.subCity[index];
              
               console.log( htmlCity1);
              
                var htmlcity= $(".toolTipDiv").html();
                
            
                 $(".tableDiv li").on('click',function(){
                    $(".tableDiv li").append(htmlcity);
                   $(".toolTipDiv").show();
                   $(".toolTipDiv").mouseover(function(){
                      $(".toolTipDiv").stop().show();
                   }).mouseout(function(){
                         $(".toolTipDiv").stop().hide();
                   });
            
                   var position=$(this).position();
                     $(".toolTipDiv").css({
                    position: 'absolute',
                    left: position.left,
                    top: position.top+29+'px',
                    'z-index':10000,
                     });
            
                 });  
        }
      };
    });