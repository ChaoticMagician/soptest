<template>
<div>
    <input type="text" id="text-id" /><br>
    <input type="checkbox" id="checkbox-id" />.property<br>
    <div id="testDiv" >gggg</div>
</div>
</template>

<script>
let	 dataset = [ 5, 10, 15, 20, 25 ];  
import * as d3 from "d3";
export default {
    name:"test1",
    data() {
        return {
            rect:undefined,
            circle:undefined,
        }
    },
    mounted(){
        d3.select('#text-id')
            .property('value', function(){ 
                return d3.select(this).property('id');	//获取id属性的值
            });	//设置文本的value属性为此元素的ID值
    
        d3.select('#checkbox-id')
            .property('checked', true);	//设置复选框的checked属性
        d3.select('#testDiv')
            .text(()=>{
                console.log(this);
                return "new:"+d3.select('#testDiv').text();
            });
        this.init();
        this.init2();
    },
    methods:{
        init(){
            this.rect = d3.select("#testDiv")
                .append("svg")
                .attr("width",500)
                .attr("height",500)
                .append("rect")
                .attr("x", 80)
                .attr("y",80)
                .attr("width", 200)
                .attr("height",200)
                .attr("fill","orange")
        },
        init2(){
            this.circle = d3.select("svg")
                .insert("circle","rect")
                .attr("cx",60)
                .attr("cy",60)
                .attr("r",30)
                .attr("fill","forestgreen")
        }
    }
}
</script>

<style scoped>
#aasddf{
    background: #000;
}
</style>