import { goodsQuery,getRegisterList } from '../api/dataQueryApi.js';
const state = {
  registerList:[]
}
const mutations = {
  changeRL(state,newvalue){
    state.registerList = newvalue;
  },
}
const getters = {
  getRL: state => {
    return stat.registerList;
  },
};
const actions = {
  //获取商品列表数据数据
  ActRL({state,commit}){
    getRegisterList()
    .then(function (response) {
      commit('changeRL',response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
}
export default {
  state, mutations,getters,actions,
} 