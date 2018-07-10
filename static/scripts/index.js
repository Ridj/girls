'use strict';

let girlsVue = new Vue({
    el: '#app',
    data:  {
       girlsList: []
    },
    template: `<div><ul><li v-for="girl in girlsList">{{girl['girl_name']}}, {{girl['girl_age']}}</li></ul>
    <button @click="updateGirlsList">Update</button></div>`,
    methods: {
        updateGirlsList: function() {
            let request = new XMLHttpRequest();
            request.open('GET', '/api/girls', true);
            request.send(null);
            request.onreadystatechange = (function() {
                if (request.readyState === 4 && request.status === 200) {
                    this.girlsList = JSON.parse(request.responseText);
                }
            }).bind(this);
       }
    }
});

girlsVue.updateGirlsList();
