<template>
  <div>
    <v-table
      is-horizontal-resize
      style="width:100%"
      multiple-sort
      column-width-drag
      :columns="columns"
      :table-data="tableData"
      :table-title-show="tableTitleShow"
      :cell-edit-done="cellEditDone"
      @sort-change="sortChange"
      row-hoverColor="#eee"
      row-click-color="#edf7ff"
    ></v-table>
  </div>
</template>

<script>
  import Vue from "vue"
  import selectC from "../table/selectC"

  export default{
    name: 'sort-by-multiple-columns',
    data(){
      return {
        tableData: [
          {"name":"s","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
          {"name":"d","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
          {"name":"f","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
          {"name":"g","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
          {"name":"h","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}
        ],
        columns: [
          {field: 'name', title: '姓名', width: 80, titleAlign: 'center',columnAlign:'center',orderBy:'',isResize:true,isEdit:true,headIsEdit:false},
          {field: 'tel', title: '手机号码', width: 150, titleAlign: 'center',columnAlign:'center',orderBy:'',isResize:true,isEdit:true,headIsEdit:true},
          {field: 'hobby', title: '爱好', width: 150, titleAlign: 'center',columnAlign:'center',isResize:true,isEdit:false,headIsEdit:true},
          {field: 'select', title: '地址',width: 280, titleAlign: 'center',columnAlign:'left',isResize:true,headIsEdit:true,
            componentName:"table-operation"
          },
          {field: 'address', title: '地址',width: 280, titleAlign: 'center',columnAlign:'left',isResize:true,isEdit:true,headIsEdit:true},

        ],
        oldTableData:null,
        sortObj:{"name":"","tel":""},
        tableTitleShow:true
      }
    },
    mounted:function () {
      this.oldTableData = this.cloneData(this.tableData);
    },
    methods: {
      // 获取 table 组件每次操作后的参数（重新去请求数据）
      sortChange(params){
        console.log(JSON.stringify(params))
        if(this.sortObj.tel != params.tel){
          if(params.tel == "desc"){
            this.tableData.sort(function (a,b) {
              if(a.tel < b.tel){
                return 1;
              }else if(a.tel > b.tel){
                return -1;
              }
              return 0;
            })
          }else if(params.tel == "asc"){
            this.tableData.sort(function (a,b) {
              if(a.tel > b.tel){
                return 1;
              }else if(a.tel < b.tel){
                return -1;
              }
              return 0;

            })
          }else{
            this.tableData = this.cloneData(this.oldTableData);

          }
        }

        if(this.sortObj.name != params.name){
          if(params.name == "desc"){
            this.tableData.sort(function (a,b) {
              if(a.name < b.name){
                return 1;
              }else if(a.name > b.name){
                return -1;
              }
              return 0;
            })
          }else if(params.name == "asc"){
            this.tableData.sort(function (a,b) {
              if(a.name > b.name){
                return 1;
              }else if(a.name < b.name){
                return -1;
              }
              return 0;
            })
          }else{
            this.tableData = this.cloneData(this.oldTableData);
          }
        }


        this.sortObj = this.cloneData(params);
      },
      /*深复制方法*/
      cloneData:function (obj) {
        var buf;
        if(obj instanceof Array){
          buf = [];
          var i = obj.length;
          while(i--){
            buf[i] = this.cloneData(obj[i]);
          }
          return buf;
        }else if(obj instanceof Object){
          buf = {};
          for(var k in obj){
            buf[k] = this.cloneData(obj[k]);
          }
          return buf;
        }else{
          return obj;
        }
      },

      cellEditDone:function(newValue,oldValue,rowData,field,rowIndex) {
        // console.log(JSON.stringify(arguments))
        if(typeof rowIndex != "undefined"){
          this.tableData[rowIndex][field] = newValue;
        }else{
          for(var i=0;i<this.columns.length;i++){
            var tempData = this.columns[i];
            if(tempData.field == field){
              this.columns[i].title = newValue;

              var tempTableData = this.cloneData(this.tableData);
              this.tableData = [];
              var self = this;
              setTimeout(function () {
                self.tableData = self.cloneData(tempTableData);
              },0);

              return false;
            }
          }
        }


      }
    }
  }

  // 自定义列组件
  Vue.component('table-operation',{
    template:`<select style="width: 100px;" @change="changeSelect">
          <option v-for="item in rowData" :value="item">{{item}}</option>
        </select>`,
    props:{
      rowData:{
        type:Object
      },
      field:{
        type:String
      },
      index:{
        type:Number
      }
    },
    beforeMount:function () {
      // console.log(JSON.stringify(this.rowData))
    },
    methods:{
      changeSelect:function (e) {
        console.log(e.target.value);
        console.log(this.index)
      }
    }
  })

</script>

<style scoped>

</style>
