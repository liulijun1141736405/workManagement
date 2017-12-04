<template>
  <div class="list">
      <el-row :gutter="20">
        <el-col :span="6" v-for="(o, index) in ulList" :key="o.id"  >
            <el-card :body-style="{ padding: '0px' }">
            <img :src="o.imgurl" class="image">
            <div style="padding: 14px;">
                <span>{{o.name}}</span>
                <div class="bottom clearfix">
                <time class="time">{{o.time}}</time>
                <el-button type="text" class="button">操作按钮</el-button>
                </div>
            </div>
            </el-card>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'list',
  props:["ulList"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
    width:100%;
}
</style>
