export default [function(){
    return {
        template:`
            <div>
                <!--Loading Data-->
                <div ng-if="loading" class="text-center">
                    <h2>
                        <span>Loading <span class="capitalize">{$ entityname $}</span></span>
                        <br><br>
                        <om-spinner></om-spinner>
                    </h2>
                    <br>
                </div>
                <!--No data-->
                <div ng-if="error">
                    <h2>
                        <span ng-if="!errormessage">There are no <span class="capitalize">{$ entityname $}</span> available</span>
                        <span ng-if="errormessage">{$ errormessage $}</span>
                    </h2>
                </div>

            </div>
        `,
        scope: {
            loading : '=',
            error : '=',
            entityname : '@',
            errormessage : '@'
        },
        controller : ['$scope',function($scope){}]
    }
}]
