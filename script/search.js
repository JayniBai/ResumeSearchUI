var myapp = angular.module('myapp', ['ngAnimate'])
.controller('searchResume',['$scope', '$filter', function($scope,$filter){
  $scope.resume={
    Name:'',
    Position: '',
    Scholar: '',
    Gender: '',
    Location : '',
    Graduatedschool:''
  };
  
  $scope.criteria={
    page: 1,
    pagesize: 5,
    sort: 'Name',
    desc : false 
  };

  $scope.reverse = true;  

  $scope.showAddress=false;
  $scope.paging ={
    total : 0,
    totalpages: 0,
    showing: 0,
    pagearray: [],
    pagingOptions: [5,10,20,30,40,50]
  };

  $scope.search = function(){   
    $scope.customers =  ($filter('filter')(customers, {Name: $scope.resume.Name,Position:$scope.resume.Position,Scholar:$scope.resume.Scholar,
      Gender:$scope.resume.Gender,Location:$scope.resume.Location,Graduatedschool:$scope.resume.Graduatedschool }));

    $scope.paging.total = $scope.customers.length;    
    var a = ($scope.criteria.page - 1) * $scope.criteria.pagesize;
    var b = $scope.criteria.page  * $scope.criteria.pagesize;
   
    $scope.customers = $scope.customers.slice( a, b );   
    $scope.paging.showing = $scope.customers.length;
    paging($scope.criteria.page, $scope.criteria.pagesize, 
           $scope.paging.total);
 }

 function paging(current, pagesize, total){
    var totalpages = Math.ceil(total/pagesize);
    $scope.paging.totalpages = totalpages;
    // clear it before playing
    $scope.paging.pagearray = [];
    if(totalpages <=1) return;
    
    
    if(totalpages <= 5){
      for(var i =1; i<= totalpages; i++)
          $scope.paging.pagearray.push(i);
    }
    
    if(totalpages > 5){
      if(current <=3){        
        for(var i =1; i<= 5; i++)
          $scope.paging.pagearray.push(i);
        
        $scope.paging.pagearray.push('...');
        $scope.paging.pagearray.push(totalpages);
        $scope.paging.pagearray.push('Next');
      }
      else if(totalpages - current <=3){
        $scope.paging.pagearray.push('Prev');
        $scope.paging.pagearray.push(1);
        $scope.paging.pagearray.push('..');
        for(var i =totalpages - 4; i<= totalpages; i++)
          $scope.paging.pagearray.push(i);
      }
      else {
        $scope.paging.pagearray.push('Prev');
        $scope.paging.pagearray.push(1);
        $scope.paging.pagearray.push('..');  
        
        for(var i = current - 2; i<= current + 2; i++)
          $scope.paging.pagearray.push(i);
          
        $scope.paging.pagearray.push('...');
        $scope.paging.pagearray.push(totalpages);
        $scope.paging.pagearray.push('Next');
        }        
    }      
  }

  $scope.$watch('criteria', function(newValue, oldValue){
    
     if(!angular.equals(newValue, oldValue)){
         $scope.search();
     }
   }, true);

   $scope.Prev = function(){
     if($scope.criteria.page >= 1)      
       $scope.criteria.page--;
   }
   
   $scope.Next = function(){
     if($scope.criteria.page < $scope.paging.totalpages)      
       $scope.criteria.page++;
   }

   $scope.LoadAddressSelection = function(){
    console.log($scope.showAddress);
    $scope.showAddress = !$scope.showAddress;
    $scope.$broadcast("showAddress",{showAddress: $scope.showAddress});
   }

   $scope.$on("fillInAddress",function(event,args){
    $scope.Location = args.selectedCitys;
    console.log($scope.Location);
  })

  $scope.$on("showAddressChanged",function(event,args){
    $scope.showAddress = args.showAddress;
    console.log($scope.showAddress);
  })

}]
);



var customers = [ {"Name":"测试工程师","Position":"测试工程师","Scholar":"大学","Gender":"男","Age":"30","Location":"西安","Graduatedschool":"西安邮电大学"},
{"Name":"自动化","Position":"开发测试工程师","Scholar":"大学","Gender":"女","Age":"20","Location":"西安","Graduatedschool":"西安电子科技大学"},
{"Name":"测试工程师","Position":"测试工程师","Scholar":"大学","Gender":"男","Age":"30","Location":"西安","Graduatedschool":"西安邮电大学"},
{"Name":"测试工程师","Position":"测试工程师","Scholar":"大学","Gender":"男","Age":"30","Location":"西安","Graduatedschool":"西安邮电大学"},
{"Name":"自动化","Position":"开发测试工程师","Scholar":"大学","Gender":"女","Age":"20","Location":"西安","Graduatedschool":"西安电子科技大学"},
{"Name":"自动化","Position":"开发测试工程师","Scholar":"大学","Gender":"女","Age":"20","Location":"西安","Graduatedschool":"西安电子科技大学"},
{"Name":"自动化","Position":"开发测试工程师","Scholar":"大学","Gender":"女","Age":"20","Location":"西安","Graduatedschool":"西安电子科技大学"}]



