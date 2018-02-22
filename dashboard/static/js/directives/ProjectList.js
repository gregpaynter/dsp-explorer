import * as _ from 'lodash'
import * as d3 from 'd3';
let template = `
    <div class="col-md-12" ng-if="projects.length == 0">
        <h2>
            No Projects
        </h2>
    </div>
    <div class="col-md-3 col-sm-3 col-xs-12"
        ng-repeat="project in projects"
        style="margin-bottom:1%; margin-top: 1%;">
        <!-- ToDo fix card height -->
        <div class="card margin-bottom-20">
            <a href="{$ '/profile/project/'+project.id+'/detail' $}" class="card-image" style="border-bottom:solid 1px rgba(160, 160, 160, 0.2);">
                <img style="min-width:100%;" ng-src="{$ project.picture $}" class="img-responsive">
            </a>
            <div class="card-content"><h5>{$ project.name $}</h5></div>
            <div class="card-action" style="height: auto;">
                <div class="row">
                    <div class="col-md-12">
                        <p>{$ project.description | limitTo: 60 $} {$ feed.summary.length > 60 ? '...' : '' $}</p>
                        <!-- <p>
                            <i ng-repeat="tag in challenge.tags">
                                <strong>#</strong>
                                <span>{$ tag.name $}</span>
                            </i>
                        </p> -->
                    </div>
                    <div class="col-md-12">
                        <hr>
                    </div>
                    <div class="col-md-6">
                        <a href="{$ '/profile/project/'+project.id+'/detail' $}"><p>Read more <i class="glyphicon glyphicon-new-window"></i></p></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`

export default [function(){
    return {
        template:template,
        scope: {profileid: '='},
        controller : ['$scope', '$http', 'toastr', function($scope, $http, toastr) {

            let url = '/api/v1.3/project/'
            $scope.projects = []
            
            $scope.get_data = (url) => {
                $http.get(url).then(res => {
                    $scope.projects = res.data.result || []
                    console.log($scope.projects)
                    $scope.$apply(()=>$(window).trigger('resize'))
                })
            }
            $scope.get_data(url)
        }]
    }
}]



