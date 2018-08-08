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
      :table-cell-style="tableCellStyle"
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
          {"name":{value:"s"},"tel":{value:"136*****1987"},"hobby":{value:"钢琴、书法、唱歌"},"address":{value:"上海市黄浦区金陵东路569号11楼"}},
          {"name":{value:"w"},"tel":{value:"126*****1987"},"hobby":{value:"钢琴、书法、唱歌"},"address":{value:"上海市黄浦区金陵东路569号12楼"}},
          {"name":{value:"a"},"tel":{value:"166*****1987"},"hobby":{value:"钢琴、书法、唱歌"},"address":{value:"上海市黄浦区金陵东路569号13楼"}},
          {"name":{value:"z"},"tel":{value:"116*****1987"},"hobby":{value:"钢琴、书法、唱歌"},"address":{value:"上海市黄浦区金陵东路569号14楼"}},
          {"name":{value:"d"},"tel":{value:"136*****1987"},"hobby":{value:"钢琴、书法、唱歌"},"address":{value:"上海市黄浦区金陵东路569号15楼"}},
        ],
        columns: [
          {field: 'name', title: '姓名', width: 80, titleAlign: 'center',columnAlign:'center',orderBy:'',isResize:true,isEdit:true,headIsEdit:false,isMove:true,
            cellStyle:{
              "fontSize":"14","fontColor":"#123123","bgColor":"#30ccd7"
            }
          },
          {field: 'tel', title: '手机号码', width: 150, titleAlign: 'center',columnAlign:'center',orderBy:'',isResize:true,isEdit:true,headIsEdit:true,isMove:true},
          {field: 'hobby', title: '爱好', width: 150, titleAlign: 'center',columnAlign:'center',isResize:true,isEdit:false,headIsEdit:true,isMove:true},
          {field: 'select', title: '地址',width: 280, titleAlign: 'center',columnAlign:'left',isResize:true,headIsEdit:true,isMove:true,
            componentName:"table-operation"
          },
          {field: 'address', title: '地址',width: 280, titleAlign: 'center',columnAlign:'left',isResize:true,isEdit:true,headIsEdit:true,isMove:true},

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
              if(a.tel.value < b.tel.value){
                return 1;
              }else if(a.tel.value > b.tel.value){
                return -1;
              }
              return 0;
            })
          }else if(params.tel == "asc"){
            this.tableData.sort(function (a,b) {
              if(a.tel.value > b.tel.value){
                return 1;
              }else if(a.tel.value < b.tel.value){
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
              if(a.name.value < b.name.value){
                return 1;
              }else if(a.name.value > b.name.value){
                return -1;
              }
              return 0;
            })
          }else if(params.name == "asc"){
            this.tableData.sort(function (a,b) {
              if(a.name.value > b.name.value){
                return 1;
              }else if(a.name.value < b.name.value){
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
          this.tableData[rowIndex][field].value = newValue;
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
      },
      tableCellStyle:function (type,data) {
        console.log(type);
        console.log(JSON.stringify(data))

        //改变单元格样式
        if(type == "changeStyle"){

          if(data.title == "title"){

            for(var i=0;i<this.columns.length;i++){
              if(this.columns[i].field == data.field){
                this.columns[i].cellStyle = data.cellStyle;
              }
            }

          }else if(data.title == "content"){
            this.tableData[data.rowIndex][data.field].cellStyle = data.cellStyle;
          }

          var self = this;

          var tempColumnsTableData = this.cloneData(this.columns);
          this.columns = [];
          setTimeout(function () {
            self.columns = self.cloneData(tempColumnsTableData);
          },0);


          var tempTableData = this.cloneData(this.tableData);
          this.tableData = [];
          setTimeout(function () {
            self.tableData = self.cloneData(tempTableData);
          },0);

        }

        /*移动表头*/
        if(type == "moveRow"){

          var field = data.field;
          var direction = data.direction;


          for(var i=0;i<this.columns.length;i++){
            var tempData = this.columns[i];

            if(tempData.field == field){

              if(direction == "left"){
                var columnsOne = this.columns[i];
                if(i < this.columns.length - 1){
                  this.columns[i] = this.columns[i+1];
                  this.columns[i+1] = columnsOne;
                }
              }else if(direction == "right"){
                var columnsOne = this.columns[i];
                if(i != 0){
                  this.columns[i] = this.columns[i-1];
                  this.columns[i-1] = columnsOne;
                }
              }
              break;
            }
          }

          console.log(JSON.stringify(this.columns))

          var self = this;

          var tempColumnsTableData = this.cloneData(this.columns);
          this.columns = [];
          setTimeout(function () {
            self.columns = self.cloneData(tempColumnsTableData);
          },0);


          var tempTableData = this.cloneData(this.tableData);
          this.tableData = [];
          setTimeout(function () {
            self.tableData = self.cloneData(tempTableData);
          },0);

        }

      }
    }
  }

  // 自定义列组件
  Vue.component('table-operation',{
    template:`<select style="width: 200px;" @change="changeSelect">
          <option v-for="item in rowData" :value="item.value">{{item.value}}</option>
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
