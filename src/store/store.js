import Vue from "vue"
import Vuex from "vuex"

import getters   from "./getters"
import mutations from "./mutations"
import actions   from "./actions"

Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
        likes: 5,
        liked: false
    },
    getters  : getters,
    mutations: mutations,
    actions  : actions
});


export default store;
