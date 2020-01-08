import Vue from "vue";
import Vuex from "vuex";

import goodsData from './goodsData.js';
import registerData from './registerData.js';
import dictionaryData from './dictionaryData.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    goodsData,registerData,dictionaryData
  }
});
