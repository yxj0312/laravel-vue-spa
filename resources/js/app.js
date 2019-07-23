import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import Vuex from 'vuex';
import axios from 'axios';

import Modal from './plugins/modal/ModalPlugin';
import store from './components/whatcha_working_on/store';

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.use(VueRouter);
Vue.use(Vuex)
Vue.use(Modal);


let app = new Vue({
    el: '#app',

    router: new VueRouter(routes),

    store:new Vuex.Store(store)
});
