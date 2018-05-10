<template>
  <div class="hello">
    <div class="content"> 
        <h2>新增事项</h2>
        <el-form ref="form" :model="form" label-width="80px" class="addForm">
            <el-form-item label="事务名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="事务类型">
                <el-select v-model="form.region" placeholder="请选择事务类型">
                <el-option label="闹钟" value="1"></el-option>
                <el-option label="会议" value="2"></el-option>
                <el-option label="飞机" value="2"></el-option>
                <el-option label="火车" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="每天">
                <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>  
            <el-form-item label="事务简介">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
            </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'addDate',
  data(){return{
       form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
  }},
   beforCreated: function () {
    // `this` 指向 vm 实例 
  },
   created: function () {  
    // `this` 指向 vm 实例 
  },
   beforMount: function () {
    // `this` 指向 vm 实例 
  }, 
   mounted: function () { 
    // `this` 指向 vm 实例 
  },
  methods:{

  }
} 
</script>
<style scoped>
.addForm{width:400px}
</style>
