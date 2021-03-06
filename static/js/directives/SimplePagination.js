import * as _ from 'lodash'
import * as d3 from 'd3';

let template = `
    <div class="row">
        <div class="col-md-5 col-xs-5">
            <button ng-show="prevfunction"
                    ng-click="!is_min_page && prevfunction()"
                    class="btn login-button pull-left"
                    ng-class="{ 'btn-disabled disabled' : is_min_page }"
            >
                Prev&nbsp;&nbsp;
                <i class="glyphicon glyphicon-arrow-left"></i>
            </button>
        </div>
        <div class="col-md-2 col-xs-2">
            <p style="text-align: center; float: left;" ng-if="currentpagenumber">
                <span class="btn btn-default">{$ currentpagenumber+''+(maxpagenumber? '/'+maxpagenumber : '') $}</span>
            </p>
        </div>
        <div class="col-md-5 col-xs-5">
            <button
                    ng-show="nextfunction"
                    ng-click="!is_max_page && nextfunction()"
                    class="btn login-button pull-right"
                    ng-class="{ 'btn-disabled disabled' : is_max_page }"
            >
                Next&nbsp;&nbsp;
                <i class="glyphicon glyphicon-arrow-right"></i>
            </button>
        </div>
    </div>
    
    <style></style>
`

export default [function(){
    
    return {
        template:template,
        scope: {
            prevfunction: '=',
            nextfunction: '=',
            currentpagenumber: '=', // From 0 to N, increment 1 per page (EG: first page = 1, second page = 2 ...)
            maxpagenumber: '=', // from 1 to N
            nextcursor: '=', // Values -1 to N  [0 = no more next pages]
            prevcursor: '=' // Values -1 to N, [0 = no more previous pages, -1 is the first page]
        },
        controller : ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope){
            
            $scope.$watch('[currentpagenumber, maxpagenumber, nextcursor, prevcursor]', (new_val, old_val)=>{
                // Pagination uses cursor
                $scope.is_min_page = $scope.nextcursor!==undefined && $scope.prevcursor === 0
                $scope.is_max_page = $scope.nextcursor!==undefined && $scope.nextcursor === 0 || $scope.nextcursor === -1
                
                // Pagination uses pagenumber
                if($scope.maxpagenumber && $scope.currentpagenumber) $scope.is_max_page = $scope.maxpagenumber === $scope.currentpagenumber
                if ($scope.currentpagenumber) $scope.is_min_page = $scope.currentpagenumber <= 1

            })
    
        }]
    }
    
}]



