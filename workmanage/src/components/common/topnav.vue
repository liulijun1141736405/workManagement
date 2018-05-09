<template>
  <div id="webnav" class="clear">
     <h1> 
         <img src="https://www.yuanjutong.com/upload/2016/09/30/20160930170315670.jpg" alt="">
     </h1>
     <ul class="navRight">
         <li v-for="item in navlist">
             <div v-if="item.dropdown">
                 <el-dropdown>
                    <span class="el-dropdown-link">
                        {{item.name}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="dropdownlist in item.dropdown" :key="dropdownlist.id"><router-link :to="dropdownlist.path" >{{dropdownlist.name}}</router-link></el-dropdown-item>                         
                    </el-dropdown-menu>
                    </el-dropdown>
             </div>
              <div v-else-if="item.workNumber" class="works"> 
                <router-link :to="item.path">{{item.name}}<span>{{item.workNumber}}</span></router-link>
             </div>
             <div v-else>
                <router-link :to="item.path">{{item.name}}</router-link>
             </div>
         </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'webnav',
  data () {
    return {
        navlist:[
            {
                name:"首页",
                path:"/"
            },
             {
                name:"代办事务",
                path:"/",
                workNumber:"10"

            },
            {
                name:"日程",
                path:"/",
                dropdown:[
                    {
                        name:"日程表",
                        path:"/"
                    },                    
                    {
                        name:"待办事务",
                        path:"/",
                        id:0
                    },
                    {
                        name:"日记本",
                        path:"/",
                        id:1
                    },
                    {
                        name:"记账本",
                        path:"/",
                        id:2
                    }
                ]

            }
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
      float:left;
      width:30px;
  }
  h1 img{
      width:100%;
  }
  .navRight{float:right; }
  .navRight li{
      float:left;
      padding:0 12px;
  }
  .navRight a,.navRight span{
    font-size:16px;
    font-weight:normal;
    color:#eee;
    line-height:30px;
    display:inline-block;
  }
  #webnav{
      background:#6699FF;
      padding:15px 30px;
  }
  .works{
      position:relative;
  }
  .works span{
      position:absolute;
      width:20px;
      height:20px;
      border-radius:50%;
      background:#FF6633;
      line-height:20px;
      font-size:12px;
  }
</style>
