/**
 * Created by andreafspeziale on 24/05/17.
 */
export default [ '$scope', '$http', function ($scope,$http) {
    
    $scope.EventModel = {
        theme : null,
        cursor: 0,
        user_location: null,
        // current_cursor : null,
        // next_cursor : -1,
        // progress : false,
        top:  $(window).scrollTop(),
        data : [],
        
        /*
        next : function( theme = this.theme, cursor = this.next_cursor){
            if(
                this.progress === true
                || this.next_cursor == 0
                || this.current_cursor == this.next_cursor
            ) return

            this.progress = true;
            this.current_cursor = this.next_cursor
            this.get_events( theme, cursor )
            return this
            
        },


        reset : function(theme=this.theme, cursor=-1){
            this.data = []
            this.current_cursor = null
            this.next_cursor = -1
            this.next(theme, cursor)
            return this
        },
        */

        get_events : function(theme=this.theme, location=this.user_location, cursor=this.cursor){
            // console.log('get events: ' + theme + '-' + location + '-' + cursor);

            $http.get('/api/v1.3/events/' + theme + '/' + location + '/'+ cursor + '/')
                .then(
                    (response) => {
                        console.log('get events response');
                        console.log(response)
                        this.data = response.data.result.events
                    },
                    (err)=>{ console.log('ERROR:', err); }
                )
            return this
        },
    }
    
    let unbind_topic_id = $scope.$watch('[topic_id, country]', function (newValue, oldValue) {
        // if(newValue === oldValue) return
        $scope.EventModel.theme = newValue[0]
        $scope.EventModel.user_location = newValue[1]
        $scope.EventModel
            .get_events(newValue[0], $scope.cursor)
        unbind_topic_id()
    })
    
}]