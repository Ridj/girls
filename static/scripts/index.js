'use strict';


const store = new Vuex.Store({
  state: {
    girlsList: []
  },
  mutations: {
    updateGirlsList: (state, payload) => state.girlsList = payload.girls,
  },
  actions: {
    updateGirls({commit}) {
      let request = new XMLHttpRequest();
        request.open('GET', '/api/girls', true);
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
              commit({
                type: 'updateGirlsList',
                girls: JSON.parse(request.responseText)
              });
            }
        };
        request.send();
    }
  }
});


const girlsList = {
  template: `
  <ul>
    <li v-for="girl in girlsList">{{girl.name}}, {{girl.age}}</li>
  </ul>
  `,
  computed: Vuex.mapState({
      girlsList: state => state.girlsList
  })
};


const girlsVue = new Vue({
    el: '#app',
    store,
    components: {
      girlsList: girlsList
    },
    template: `
      <div>
        <girls-list></girls-list>
        <button @click="update">Update</button>
      </div>`,
    methods: Vuex.mapActions({
        update: 'updateGirls'
    }),
    created: function() {
        this.update();
    }
});
