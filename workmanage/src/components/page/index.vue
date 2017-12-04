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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  max-width:1090px;
  margin:0 auto;
}
</style>
