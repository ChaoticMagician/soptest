import {service}from './request.js'

export function goodsQuery() {
  let requestdata =  service({
    url: '/api/Goods',
    method: 'get',
  });
  return requestdata;
};
export function addGoogs(goodsInfo) {
  let requestdata =  service({
    url: '/api/Goods',
    method: 'post',
    data: goodsInfo
  });
  return requestdata;
};
export function deleteGoogs(goodsCode) {
  let requestdata =  service({
    url: '/api/Goods/'+goodsCode,
    method: 'delete',
  });
  return requestdata;
};
export function changeGoogs(goodsInfo) {
  let requestdata =  service({
    url: '/api/Goods/'+goodsInfo.goodsCode,
    method: 'put',
    data:goodsInfo
  });
  return requestdata;
};
export function getRegisterList() {
  let requestdata =  service({
    url: '/api/Bound',
    method: 'get',
  });
  return requestdata;
};

