<template>
  <div>
      <template v-if="ChangeGoodsType==1" >
        <el-card :body-style="{ padding: '10px 20px' }" >
          <el-input class="goodsNameQ" v-model="input" placeholder="请输入内容"></el-input>
          <el-select
            class="queryOption"
            v-model="category"
            placeholder="类别">
            <el-option
              v-for="item in this.$store.state.dictionaryData.goodsType"
              :key="item.value"
              :label="item.label"
              :value="item.label">
            </el-option> 
          </el-select>
          <el-button class="queryButton" type="primary" icon="el-icon-search" ></el-button>
          <div class="rightButton" >
            <el-button type="primary" @click="gotoAddGoods" icon="el-icon-plus" >添加</el-button>
          </div>
        </el-card>
        <el-card :body-style="{ padding: '0px' }"  class="dataList">
          <el-table
            :data="goodsList"
            height="810"
            border
            style="width: 100%;">
            <el-table-column
              align='center'
              v-if="ifTbaleSlect"
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              align='center'
              fixed
              type="index"
              label=""
              width="50">
            </el-table-column>
            <el-table-column
              align='center'
              fixed
              prop="name"
              label="种类名"
              width="180">
            </el-table-column>
            <el-table-column
              align='center'
              prop="goodsCode"
              label="商品ID"
              width="180">
            </el-table-column>
            <el-table-column
              align='center'
              prop="price_In"
              label="进价"
              width="150">
            </el-table-column>
            <el-table-column
              align='center'
              prop="price_Out"
              label="售价"
              width="150">
            </el-table-column>
            <el-table-column
              align='center'
              prop="category"
              label="类别"
              width="150">
            </el-table-column>
            <el-table-column
              align='center'
              prop="label"
              label="品牌"
              width="150">
            </el-table-column>
            <el-table-column
              align='center'
              prop="machine"
              label="机号"
              width="150">
            </el-table-column>
            <el-table-column
              align='center'
              prop="other"
              label="其他"
              width="200">
            </el-table-column>
            <el-table-column
              align='center'
              fixed="right"
              label="操作"
              >
              <template slot-scope="scope">
                <el-button type="success" size="small" @click="gotoWatchGoods(scope.row)" >查看</el-button>
                <el-button type="warning" size="small" @click="gotoChangeGoods(scope.row)" >编辑</el-button>
                <el-button type="danger"  size="small" @click="deleteGoodsMet(scope.row)" >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </template>

      <template v-else>
        <el-card :body-style="{ padding: '10px 20px' }" >
          <div class="rightButton" >
            <el-button
              v-if="ChangeGoodsType==2"
              type="success"
              icon="el-icon-folder-checked"
              @click="addGoodsMet" 
            >保存</el-button>
            <el-button
              v-if="ChangeGoodsType==3"
              type="warning"
              icon="el-icon-folder-checked"
              @click="changeGoodsMet" 
            >更改</el-button>
            <el-button
              type="info"
              icon="el-icon-folder-delete"
              @click="gobackGoodsList" 
            >返回</el-button>
          </div>
        </el-card>
        <el-card :body-style="{ padding: '0px' }">
          <form class="goodsForm" >
            商品图片：
            <img-input :ChangeGoodsType='ChangeGoodsType' :imgDadaObj='thisGoodsInfo'  >
            </img-input>
            种类名：
            <el-input
              class="goodsFormInput"
              :disabled="ChangeGoodsType==4"
              placeholder="请输入"
              v-model="thisGoodsInfo.name"
            ></el-input><br/>
            进价：
            <el-input-number
              :disabled="ChangeGoodsType==4"
              class="goodsFormInput"
              :precision="2"
              :step="0.1"
              v-model="thisGoodsInfo.price_In"
              :min="1"
            ></el-input-number>
            售价：
            <el-input-number
              :disabled="ChangeGoodsType==4"
              class="goodsFormInput"
              :precision="2"
              :step="0.1"
              v-model="thisGoodsInfo.price_Out"
              :min="1"
            ></el-input-number><br/>
            类别：
            <el-select
              :disabled="ChangeGoodsType==4"
              v-model="thisGoodsInfo.category"
              placeholder="类别">
              <el-option
                v-for="item in this.$store.state.dictionaryData.goodsType"
                :key="item.value"
                :label="item.label"
                :value="item.label">
              </el-option>
            </el-select>
            品牌：
            <el-input
              class="goodsFormInput"
              :disabled="ChangeGoodsType==4"
              placeholder="请输入"
              v-model="thisGoodsInfo.label"
            ></el-input><br/>
            机号：
            <el-input
              class="goodsFormInput"
              :disabled="ChangeGoodsType==4"
              placeholder="请输入"
              v-model="thisGoodsInfo.machine"
            ></el-input>
            其他：
            <el-input
              class="goodsFormInput"
              :disabled="ChangeGoodsType==4"
              placeholder="请输入"
              v-model="thisGoodsInfo.other"
            ></el-input><br/>
          </form>
        </el-card>
      </template>
  </div>
</template>
<script>
import { getGoodsList,addGoogs,deleteGoogs,changeGoogs } from '../../api/dataQueryApi';
import imgInput from './imgInput/imgInput'
  export default {
    name:"goodsControl",
    data() {
      return {
        input:"",
        category:"",
        ifTbaleSlect:false,
        ChangeGoodsType:1,
        goodsList: [],
        thisGoodsInfo:{
          id: 12,
          goodsCode: 'dsfsdfg',
          name: 'string',
          price_In: 12.5,
          price_Out: 1864.8,
          category: '生活日化',
          label: 'asd',
          machine: '16546416fdhgdf',
          img: '',
          other: 'fdkhjgaoifiwejrgf',
        }
      }
    },
    components:{
      imgInput
    },
    mounted() {
      this.mountedMet();
    },
    methods:{
      mountedMet:function(params) {
        getGoodsList()
        .then((response)=>{
          this.goodsList = response.data.data;
        })
        .then(
          ()=>{this.ChangeGoodsType = 1;}
        )
        .catch((err)=>{
          this.$message.error({
            message:'错误'+err,
          })
        })
      },
      changerow:function(index, row){
        console.log(index, row);
      },
      gotoAddGoods:function() {
        this.thisGoodsInfo={
          goodsCode: '',
          name: '',
          price_In: 0,
          price_Out: 0,
          category: '',
          label: '',
          machine: '',
          img: '',
          other: '',
        }
        this.ChangeGoodsType = 2;
      },
      gotoWatchGoods:function(goodsrow) {
        this.thisGoodsInfo =  goodsrow;
        this.ChangeGoodsType = 4;
      },
      gotoChangeGoods:function(goodsrow) {
        this.thisGoodsInfo =  goodsrow;
        this.ChangeGoodsType = 3;
      },
      gobackGoodsList:function() {
        this.ChangeGoodsType = 1;
      },
      addGoodsMet:function() {
        addGoogs( this.thisGoodsInfo)
        .then((response)=>{
          if ( response.data.data==true ) {
            this.$message.success({
              message:'添加成功',
            })
            this.mountedMet();
          } else {
            this.$message.error({
              message:'添加失败：'+response.data.message,
            })
          }
        })
        .catch((err)=>{
          this.$message.error({
            message:'错误'+err,
          })
        })
      },
      deleteGoodsMet:function(goodsrow) {
        deleteGoogs(goodsrow.goodsCode)
        .then((response)=>{
          if ( response.data.data==true ) {
            this.$message.success({
              message:'删除成功',
            })
            this.mountedMet();
          } else {
            this.$message.error({
              message:'删除失败：'+response.data.message,
            })
          }
        })
        .catch((err)=>{
          this.$message.error({
            message:'错误'+err,
          })
        })
      },
      changeGoodsMet:function() {
        changeGoogs( this.thisGoodsInfo)
        .then((response)=>{
          if ( response.data.data==true ) {
            this.$message.success({
              message:'修改成功',
            })
            this.mountedMet();
          } else {
            this.$message.error({
              message:'修改失败：'+response.data.message,
            })
          }
        })
        .catch((err)=>{
          this.$message.error({
            message:'错误'+err,
          })
        })
      }
    }
  }
</script>
<style  scoped>
  .el-card{
    margin:2px;
  }
  .rightButton{
    float: right;
    height: 50px;
  }
  .goodsNameQ{
    width: 185px;
  }
  .queryOption{
    left: 10px;
  }
  .queryButton{
    margin-left: 20px;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .goodsForm{
    max-height: 810px;
    overflow-x: hidden;
  }
  .goodsFormInput{
    width: 217px;
    margin: 10px 2px;
  }
  .goodsForm::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  .goodsForm::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #75787a;
  }
  .goodsForm::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: rgb(190, 189, 189);
  }
</style>
