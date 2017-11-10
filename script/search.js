angular.module('myapp', ['ngAnimate'])
.controller('customerCtrl',['$scope', '$filter', function($scope,$filter){
    $scope.criteria={
        searchtext:'',
        page: 1,
        pagesize: 5,
        sort: 'Name',
        desc : false 
      };
      $scope.paging ={
        total : 0,
        totalpages: 0,
        showing: 0,
        pagearray: [],
        pagingOptions: [5,10,20,30,40,50]
      };
      $scope.search = function(){   
        $scope.customers =  ($filter('filter')(customers, {Name: $scope.criteria.searchtext }));
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
}]);

var customers = [ {"Name":"Alfreds Futterkiste","City":"Berlin","Country":"Germany"}, {"Name":"Ana Trujillo Emparedados y helados","City":"México D.F.","Country":"Mexico"}, {"Name":"Antonio Moreno Taquería","City":"México D.F.","Country":"Mexico"}, {"Name":"Around the Horn","City":"London","Country":"UK"}, {"Name":"B's Beverages","City":"London","Country":"UK"}, {"Name":"Berglunds snabbköp","City":"Luleå","Country":"Sweden"}, {"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"}, {"Name":"Blondel père et fils","City":"Strasbourg","Country":"France"}, {"Name":"Bólido Comidas preparadas","City":"Madrid","Country":"Spain"}, {"Name":"Bon app'","City":"Marseille","Country":"France"}, {"Name":"Bottom-Dollar Marketse","City":"Tsawassen","Country":"Canada"}, {"Name":"Cactus Comidas para llevar","City":"Buenos Aires","Country":"Argentina"}, {"Name":"Centro comercial Moctezuma","City":"México D.F.","Country":"Mexico"}, {"Name":"Chop-suey Chinese","City":"Bern","Country":"Switzerland"}, {"Name":"Bridger Brecken Broderick","City":"São Paulo","Country":"Brazil"},{"Name":"Crew Coen","City":"Berlin","Country":"Germany"}, {"Name":"Cayson Camilo Cortez","City":"México D.F.","Country":"Mexico"}, {"Name":"Demarcus Darryl Donte  ","City":"México D.F.","Country":"Mexico"}, {"Name":"Around the Horn","City":"London","Country":"UK"}, {"Name":"B's Beverages","City":"London","Country":"UK"}, {"Name":"Devan Damari Davon","City":"Luleå","Country":"Sweden"}, {"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"}, {"Name":"Deon Dimitri Dangelo","City":"Strasbourg","Country":"France"}, {"Name":"Bólido Comidas preparadas","City":"Madrid","Country":"Spain"}, {"Name":"Bon app'","City":"Marseille","Country":"France"}, {"Name":"Bottom-Dollar Marketse","City":"Tsawassen","Country":"Canada"}, {"Name":"Elian Eliseo","City":"Buenos Aires","Country":"Argentina"}, {"Name":"Centro comercial Moctezuma","City":"México D.F.","Country":"Mexico"}, {"Name":"Freddy Flynn Franco","City":"Bern","Country":"Switzerland"}, {"Name":"Comércio Mineiro","City":"São Paulo","Country":"Brazil"},{"Name":"Gaige Gibson Graysen","City":"Berlin","Country":"Germany"}, {"Name":"Ana Trujillo Emparedados y helados","City":"México D.F.","Country":"Mexico"}, {"Name":"Houston Hugh Howard Haiden Hendrix","City":"México D.F.","Country":"Mexico"}, {"Name":"Around the Horn","City":"London","Country":"UK"}, {"Name":"Jaylon Jabari Jakobe","City":"London","Country":"UK"}, {"Name":"Berglunds snabbköp","City":"Luleå","Country":"Sweden"}, {"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"}, {"Name":"Blondel père et fils","City":"Strasbourg","Country":"France"}, {"Name":"Bólido Comidas preparadas","City":"Madrid","Country":"Spain"}, {"Name":"Bon app'","City":"Marseille","Country":"France"}, {"Name":"Bottom-Dollar Marketse","City":"Tsawassen","Country":"Canada"}, {"Name":"Cactus Comidas para llevar","City":"Buenos Aires","Country":"Argentina"}, {"Name":"Centro comercial Moctezuma","City":"México D.F.","Country":"Mexico"}, {"Name":"Chop-suey Chinese","City":"Bern","Country":"Switzerland"}, {"Name":"Comércio Mineiro","City":"São Paulo","Country":"Brazil"},{"Name":"Alfreds Futterkiste","City":"Berlin","Country":"Germany"}, {"Name":"Ana Trujillo Emparedados y helados","City":"México D.F.","Country":"Mexico"}, {"Name":"Antonio Moreno Taquería","City":"México D.F.","Country":"Mexico"}, {"Name":"Around the Horn","City":"London","Country":"UK"}, {"Name":"B's Beverages","City":"London","Country":"UK"}, {"Name":"Berglunds snabbköp","City":"Luleå","Country":"Sweden"}, {"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"}, {"Name":"Blondel père et fils","City":"Strasbourg","Country":"France"}, {"Name":"Bólido Comidas preparadas","City":"Madrid","Country":"Spain"}, {"Name":"Bon app'","City":"Marseille","Country":"France"}, {"Name":"Bottom-Dollar Marketse","City":"Tsawassen","Country":"Canada"}, {"Name":"Cactus Comidas para llevar","City":"Buenos Aires","Country":"Argentina"}, {"Name":"Centro comercial Moctezuma","City":"México D.F.","Country":"Mexico"}, {"Name":"Chop-suey Chinese","City":"Bern","Country":"Switzerland"}, {"Name":"Comércio Mineiro","City":"São Paulo","Country":"Brazil"},{"Name":"Alfreds Futterkiste","City":"Berlin","Country":"Germany"}, {"Name":"Ana Trujillo Emparedados y helados","City":"México D.F.","Country":"Mexico"}, {"Name":"Antonio Moreno Taquería","City":"México D.F.","Country":"Mexico"}, {"Name":"Around the Horn","City":"London","Country":"UK"}, {"Name":"B's Beverages","City":"London","Country":"UK"}, {"Name":"Berglunds snabbköp","City":"Luleå","Country":"Sweden"}, {"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"}, {"Name":"Blondel père et fils","City":"Strasbourg","Country":"France"}, {"Name":"Bólido Comidas preparadas","City":"Madrid","Country":"Spain"}, {"Name":"Bon app'","City":"Marseille","Country":"France"}, {"Name":"Bottom-Dollar Marketse","City":"Tsawassen","Country":"Canada"}, {"Name":"Cactus Comidas para llevar","City":"Buenos Aires","Country":"Argentina"}, {"Name":"Centro comercial Moctezuma","City":"México D.F.","Country":"Mexico"}, {"Name":"Chop-suey Chinese","City":"Bern","Country":"Switzerland"}, {"Name":"Comércio Mineiro","City":"São Paulo","Country":"Brazil"},{"Name":"Alfreds Futterkiste","City":"Berlin","Country":"Germany"}, {"Name":"Ana Trujillo Emparedados y helados","City":"México D.F.","Country":"Mexico"}, {"Name":"Antonio Moreno Taquería","City":"México D.F.","Country":"Mexico"}, {"Name":"Around the Horn","City":"London","Country":"UK"}, {"Name":"B's Beverages","City":"London","Country":"UK"}, {"Name":"Berglunds snabbköp","City":"Luleå","Country":"Sweden"}, {"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"}, {"Name":"Blondel père et fils","City":"Strasbourg","Country":"France"}, {"Name":"Bólido Comidas preparadas","City":"Madrid","Country":"Spain"}, {"Name":"Bon app'","City":"Marseille","Country":"France"}, {"Name":"Bottom-Dollar Marketse","City":"Tsawassen","Country":"Canada"}, {"Name":"Cactus Comidas para llevar","City":"Buenos Aires","Country":"Argentina"}, {"Name":"Centro comercial Moctezuma","City":"México D.F.","Country":"Mexico"}, {"Name":"Chop-suey Chinese","City":"Bern","Country":"Switzerland"}, {"Name":"Comércio Mineiro","City":"São Paulo","Country":"Brazil"},{"Name":"Alfreds Futterkiste","City":"Berlin","Country":"Germany"}, {"Name":"Ana Trujillo Emparedados y helados","City":"México D.F.","Country":"Mexico"}, {"Name":"Antonio Moreno Taquería","City":"México D.F.","Country":"Mexico"}, {"Name":"Around the Horn","City":"London","Country":"UK"}, {"Name":"B's Beverages","City":"London","Country":"UK"}, {"Name":"Berglunds snabbköp","City":"Luleå","Country":"Sweden"}, {"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"}, {"Name":"Blondel père et fils","City":"Strasbourg","Country":"France"}, {"Name":"Bólido Comidas preparadas","City":"Madrid","Country":"Spain"}, {"Name":"Bon app'","City":"Marseille","Country":"France"}, {"Name":"Blaise Brice","City":"Tsawassen","Country":"Canada"}, {"Name":"Cactus Comidas para llevar","City":"Buenos Aires","Country":"Argentina"}, {"Name":"Centro comercial Moctezuma","City":"México D.F.","Country":"Mexico"}, {"Name":"Braylin","City":"Bern","Country":"Switzerland"}, {"Name":"Agustin Mineiro","City":"São Paulo","Country":"Brazil"} ]








