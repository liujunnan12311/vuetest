<template>
  <div id="app">
    <div class="tilte">
      
     <h1>{{ msg }}</h1>
    </div>
    <div>
        <div class="block">
          <span class="demonstration">日期</span>
          <el-date-picker
            v-model="value3"
            type="datetime"
            placeholder="选择日期时间"
            default-time="12:00:00">
          </el-date-picker>
          <el-button type="primary" icon="el-icon-search" @click="parseXML">搜索</el-button>
          <button @click="getData">请求数据</button>
        </div>
    
    </div>
<br>
    <el-table
    :data ="tableData"
    height="250"
    border
    style="width: 100%" >
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="状态"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="用例名字">
    </el-table-column>
  </el-table>
 
  </div>
  

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Jenkins Pipeline DashBoard',
      tableData: [{
          date: '2016-05-03',
          name: 'pass',
          address: 'API_TestName'
        }, {
          date: '2016-05-02',
          name: 'pass',
          address: 'API_TestName'
        }, {
          date: '2016-05-04',
          name: 'pass',
          address: 'API_TestName'
        }, {
          date: '2016-05-01',
          name: 'pass',
          address: 'API_TestName'
        }, {
          date: '2016-05-08',
          name: 'pass',
          address: 'API_TestName'
        }, {
          date: '2016-05-06',
          name: 'pass',
          address: 'API_TestName'
        }, {
          date: '2016-05-07',
          name: 'pass',
          address: 'API_TestName'
        }],
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: ''
    }
  },
  methods:{
    getData()
    {
      var api = "http://www.kuaidi100.com/query?type=快递公司代号&postid=快递单号";
       this.$http.get(api).then(function(res){
                    document.write(res.body);    
                },function(err){
                    console.log(err);
                });
    }
  }
 
     
}

</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px,60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.tilte {
  
  background: url("../assets/images/dashboard.jpg") no-repeat ;
  background-size: auto 100%;
  background:cornflowerblue;
 
}
</style>

