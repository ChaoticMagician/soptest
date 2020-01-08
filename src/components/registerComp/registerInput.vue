<template>
  <div>
    <template v-if="registerType==1" >
      <el-card :body-style="{ padding: '10px 20px' }" >
        <el-select
          class=""
          v-model="goodsName"
          placeholder="种类">
          <el-option
            v-for="item in this.$store.state.goodsData.goodsList"
            :key="item.goodsCode"
            :label="item.name"
            :value="item.goodsCode">
          </el-option> 
        </el-select>
        <el-select
          class="queryOption"
          v-model="category"
          placeholder="状态">
          <el-option
            v-for="item in this.$store.state.dictionaryData.registerStatus"
            :key="item.keyid"
            :label="item.value"
            :value="item.keyid">
          </el-option> 
        </el-select>
        <el-button class="queryButton" type="primary" icon="el-icon-search" ></el-button>
        <div class="rightButton" >
          <el-button type="primary" @click="gotoAddRegister" icon="el-icon-plus" >添加</el-button>
        </div>
      </el-card>
      <el-card :body-style="{ padding: '0px' }"  class="dataList">
        <el-table
          :data="this.$store.state.registerData.registerList"
          height="835"
          border
          style="width: 100%;">
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
            prop="formCode"
            label="单号"
            width="180">
          </el-table-column>
          <el-table-column
            align='center'
            prop="goodsName"
            label="商品名称"
            width="180">
          </el-table-column>
          <el-table-column
            align='center'
            prop="count"
            label="数量"
            width="150">
          </el-table-column>
          <el-table-column
            align='center'
            prop="stamp"
            label="最后修改时间"
            width="150">
          </el-table-column>
          <el-table-column
            align='center'
            prop="userName"
            label="修改人"
            width="150">
          </el-table-column>
          <el-table-column
            align='center'
            label="状态"
            width="150">
            <template slot-scope="scope">
              <el-button type="success" size="small"  >
                {{$store.state.dictionaryData.registerStatus[scope.row.status].value}}
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            align='center'
            prop="total"
            label="总价"
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
            <template slot-scope="scope" >
              <el-button type="success" size="small"  >查看</el-button>
              <el-button type="warning" size="small"  >编辑</el-button>
              <el-button
                type="danger"
                v-if="scope.row.status!=1"
                size="small"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </template>
    <template v-else>
      <el-card :body-style="{ padding: '10px 20px' }" >
        <div class="rightButton" >
          <el-button
            v-if="registerType==2"
            type="success"
            icon="el-icon-folder-checked"
          >保存</el-button>
          <el-button
            v-if="registerType==3"
            type="warning"
            icon="el-icon-folder-checked"
          >更改</el-button>
          <el-button
            type="info"
            icon="el-icon-folder-delete"
            @click="gobackRegisterList" 
          >返回</el-button>
        </div>
      </el-card>
      <el-card :body-style="{ padding: '0px' }">
        <form class="registerForm" >
          种类：
          <el-select
            class=""
            v-model="thisRegisterInfo.goodsCode"
            placeholder="种类">
            <el-option
              v-for="item in this.$store.state.goodsData.goodsList"
              :key="item.goodsCode"
              :label="item.name"
              :value="item.goodsCode">
            </el-option> 
          </el-select><br/>
          数量：
          <el-input-number class="registerFormInput" v-model="thisRegisterInfo.count" :min="1">
          </el-input-number>
          售价：
          <el-input
            class="registerFormInput"
            :disabled="registerType==4"
            placeholder="请输入"
            v-model="thisRegisterInfo.price_Out"
          ></el-input><br/>
          类别：
          <el-select
            :disabled="registerType==4"
            v-model="thisRegisterInfo.category"
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
            class="registerFormInput"
            :disabled="registerType==4"
            placeholder="请输入"
            v-model="thisRegisterInfo.label"
          ></el-input><br/>
          机号：
          <el-input
            class="registerFormInput"
            :disabled="registerType==4"
            placeholder="请输入"
            v-model="thisRegisterInfo.machine"
          ></el-input>
          其他：
          <el-input
            class="registerFormInput"
            :disabled="registerType==4"
            placeholder="请输入"
            v-model="thisRegisterInfo.other"
          ></el-input><br/>
        </form>
      </el-card>
    </template>
  </div>
</template>

<script>
export default {
    name:"registerInput",
    data() {
      return {
        registerType: 1,
        goodsType: [
          {value: 1,label: '化妆用品'},
          {value: 2,label: '生活日化'}, 
          {value: 3,label: '服装饰品'},
          {value: 4,label: '居家用具'},
          {value: 5,label: '家具摆设'}
        ],
        category:'',
        goodsName:'',
        thisRegisterInfo:{
          id: 2,
          formCode: "9f963ddb954747dc9776b4873bdb08f0",
          goodsCode: "87a5b68060f04481934b6bc567c740db",
          goodsName: "yyjj",
          count: 20,
          stamp: "20200108031647",
          userId: "8",
          userName: "c4e799fad53c0dec94d4f201a4dd5e78",
          status: 0,
          type: 0,
          total: 200,
          other: "string",
        },
      }
    },
    mounted() {
      //异步获取商品列表
      this.$store.dispatch("ActGL");
      //异步获取记录列表
      this.$store.dispatch("ActRL");
    },
    methods:{
      gotoAddRegister:function() {
        this.registerType = 2;
      },
      gobackRegisterList:function() {
        this.registerType = 1;
      },
    }
}
</script>

<style scoped>
  .goodsNameQ{
    width: 185px;
  }
  .rightButton{
    float: right;
    height: 50px;
  }
  .queryOption{
    left: 10px;
  }
  .queryButton{
    margin-left: 20px;
  }
  .registerForm{
    max-height: 835px;
    overflow-x: hidden;
  }
  .registerFormInput{
    width: 217px;
    margin: 10px 2px;
  }
  .registerForm::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  .registerForm::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #75787a;
  }
  .registerForm::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: rgb(190, 189, 189);
  }

  .registerFormInput{
    width: 217px;
    margin: 10px 2px;
  }

</style>