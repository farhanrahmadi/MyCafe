import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import menu from './menu';
import myOrder from './myOrder';
import myBill from './myBill';
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    menu,
    myOrder,
    myBill
  },
  strict: debug,
});

Vue.prototype.$store = store;
module.exports = store;