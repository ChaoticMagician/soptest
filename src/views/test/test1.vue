<template>
  <div id="box"></div>
</template>

<script>
let	 dataset = [ 5, 10, 15, 20, 25 ];  
import * as d3 from "d3";
export default {
    name:"test1",
    data() {
        return {
            svg:undefined,
            rects:undefined,
        }
    },
    mounted(){
        this.svg = d3
        .select("#box")
        .append("svg")
        .attr("width", 960)
        .attr("height",500)
        this.init();
    },
    methods:{
        init(){
            this.rects = this.svg.selectAll("rect")
                .data(dataset)
                .enter()
                .append("rect")
                .attr("x",(d,i)=>{return 20+i*160/dataset.length;})
                .attr("y",(d) =>{return 20;})
                .attr("width", 20)
                .attr("height",100)
                .attr("fill","wheat")
                console.log(this.rects);
            this.rects.style("stroke-width",5);
            this.rects.style("stroke",function(d,i){ return "rgb("+10*d+","+10*(25-d)+","+d+")"});
 
        }
    }
}
</script>

<style scoped>
#aasddf{
    background: #000;
}
</style>