import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import Vuex from 'vuex';
import axios from 'axios';

import Modal from './plugins/modal/ModalPlugin';

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.use(VueRouter);
Vue.use(Vuex)
Vue.use(Modal);

window.store = new Vuex.Store({
    state: {
        count: 0
    },

    mutations: {
        increment(state) {
            state.count++;
        }
    }

});

let app = new Vue({
    el: '#app',

    router: new VueRouter(routes)
});
