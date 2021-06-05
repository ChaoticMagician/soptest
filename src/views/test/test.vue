<template>
  <div>
    <table>
      <tr>
        <td>苹果</td>
        <td>香蕉</td>
        <td>西瓜</td>
      </tr>
      <tr>
        <td>套子</td>
        <td id='test'>草莓</td>
        <td>菠萝</td>
      </tr>
    </table>
    <table>
      <tr>
        <td>可乐</td>
        <td>牛奶</td>
      </tr>
      <tr>
        <td>绿茶</td>
        <td  class="test">啤酒</td>
      </tr>
    </table>
    <el-button @click="clickEVE2" >触发事件</el-button>
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  name: 'login',
  data() {
    return {
      username:'',
      thisStage:1,
    }
  },
  mounted(){
    d3.select('#test').on("click",this.clickEVE1)
  },
  methods:{
    clickEVE:function(){
      console.log(d3.select('td'));
      this.thisStage++
      if (this.thisStage%2) {
        d3.select('td').text(this.name);
      }else{
        this.name = d3.select("td").text();
        d3.select('td').text("给我变");
      }
      
    },
    clickEVE1:function(E){
      this.thisStage++
      if (this.thisStage%2) {
        d3.select(E.toElement).style("color","green");
      }else{
        this.name = d3.select("td").text();
        d3.select(E.toElement).style("color","red");
      }
    },
    clickEVE2:function(){
      this.thisStage++
      if (this.thisStage%2) {
        d3.selectAll("td").style("color","green");
      }else{
        d3.selectAll("td").style("color","red");
      }
    },
  }
}
</script>

<style scoped>
table{
  display: block;
}
</style>