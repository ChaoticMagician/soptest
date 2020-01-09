import { getRegisterList } from '../api/dataQueryApi.js';
const state = {
  registerList:[],
  checkRegisterList:[]
}
const mutations = {
  changeRL(state,newvalue){
    state.registerList = newvalue;
  },
  changeCRL(state,newvalue){
    state.checkRegisterList = newvalue;
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
      let registerList = response.data.data;
      commit('changeRL',registerList);
      //筛选待审核的记录
      let checkRegisterList = registerList.filter( (value, index) => value.status==0);
      commit('changeCRL',checkRegisterList);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
}
export default {
  state, mutations,getters,actions,
} 