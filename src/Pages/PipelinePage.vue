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
          <el-button  type="primary" icon="el-icon-search" @click="getData1" >搜索</el-button>
          <button v-on:click="getData1()">请求数据</button>

        </div>
    
    </div>
<br>
<div>
    <el-table
    :data ="tableData"
    height="800"
    style="width: 100%; height:90%" >
    <el-table-column
      prop="className"
      label="Class Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Case Name">
    </el-table-column>
  </el-table>
  </div>
 
  </div>
  

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Jenkins Pipeline DashBoard',
      tableData: [],
      tableData1: [{
          date: '2016-05-03',
          name: 'pass',
          address: 'API_TestName'
        }, {
          date: '2016-05-02',
          name: 'pass',
          address: 'API_TestName'
        }, {
          date: '2016-05-04',
          name: 'pass',
          address: 'API_TestName'
        }, {
          date: '2016-05-01',
          name: 'pass',
          address: 'API_TestName'
        }, {
          date: '2016-05-08',
          name: 'pass',
          address: 'API_TestName'
        }, {
          date: '2016-05-06',
          name: 'pass',
          address: 'API_TestName'
        }, {
          date: '2016-05-07',
          name: 'pass',
          address: 'API_TestName'
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
    getData1()
    {
    
      var api = "/api/job/CoreProducts_Teams/job/APX/job/APX_UI_Team/job/APX_API/job/RUN_APX_API_BAT/943/testReport/api/json";
      console.log(api);
      var options = {
          headers: 
          {
            
            'Authorization'               : 'Basic [dmxpdTpKdW4xOTI0MTkh]',
            'Access-Control-Allow-Headers': 'Content-Type'
          
            
          }
      }
      
      this.$http.get('/api/job/CoreProducts_Teams/job/APX/job/APX_UI_Team/job/APX_API/job/RUN_APX_API_BAT/943/testReport/api/json',{
          headers: {
            'Authorization': 'Basic dmxpdTpKdW4xOTI0MTkh'
          }
        }).then((response)=>{
        console.log(response);
        console.log("1111");

        this.tableData = response.body.suites[0].cases;
        console.log(this.tableData);
        
      },function(err)
      {
        console.log(err);
      })
                 
                 
                 
                
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

