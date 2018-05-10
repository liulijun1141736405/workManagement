<template>
  <div class="hello">
    <div class="content">
      <cardlist :ulList="result"></cardlist>
    </div>
  </div>
</template>

<script>
import cardlist from "@/components/common/datalist" 
export default {
  name: 'index',
  components:{
    cardlist
  },
    data(){
      return {
          result:[
            {
                name:"jajjajajja",
                imgurl:"https://huzidaha.github.io/static/assets/img/wechat-user.jpeg",
                id:0
            },
             {
                name:"去问驱蚊器为",
                imgurl:"https://huzidaha.github.io/static/assets/img/wechat-user.jpeg",
                id:0
            },
          ]
      }
  },
   beforCreated: function () {
    // `this` 指向 vm 实例 
    console.log("beforCreated")
    
  },
   created: function () { 
    console.log("created")
    // `this` 指向 vm 实例
    console.log(this.$route)
    console.log(this.$route.params);  
  },
   beforMount: function () {
    // `this` 指向 vm 实例 
    console.log("beforMount")
    
  }, 
   mounted: function () { 
    // `this` 指向 vm 实例 
    console.log("mounted")
    
  },
  methods:{ 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 
