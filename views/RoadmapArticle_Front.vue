<template>
  <PageHeader/>
  <div class="Board">
    <h2 class="menu-title">{{ $route.params.title}}</h2>
    <div class="article-box">
      <!-- <p>front조회수{{ getArticleViewCount_Front($route.params.index)}}</p> -->
      <!-- <p>조회수{{ getArticleViewCount_Back($route.params.index)}}</p> -->

        <div class="article-image" :style="{ 'background-image': 'url(' + require(`@/assets/${$route.params.url }`) + ')' }"></div>
       <p class="article-text">{{ $route.params.article }}</p>
       
       <!-- 조회수 -> 페이지 들어갈때 count  -->
    </div>
  </div>  
  <PageFooter/>
</template>
<script>
import PageHeader from '@/components/Header.vue'
import PageFooter from '@/components/Footer.vue'
// import axios from 'axios';
// import {mapState} from 'vuex'
export default {
  components :{
    PageHeader,
    PageFooter,
  },
  data(){
    return {
    };
  },
  // computed:
  //     {
  //       ...mapState(['countViewArticle_front']),
  //       ...mapState(['countViewArticle_back'])
        
  //     },
  methods: {
      //  getArticleViewCount_Front(index){
      //     return this.countViewArticle_front[index].view_count;
        
      //   },
      // getArticleViewCount_Back(index){
      //     return this.countViewArticle_back[index].view_count;
        
      //   },
  }
}


// import '@/assets/font.css'

</script>

<style scoped>
/* *{font-family: 'NeoDunggeunmoPro-Regular';} */

  /* .Board-Content{
      
  } */
  .Board{
    margin-top: 70px;
    background-color: #F2F2F2;
    
    width : 100%;
    height: 2500px;
    align-content: center;
  }
  .menu-title {
   padding-top: 40px;
    font-size: 40px;
  }
  .article-box{
    display:block;
    margin-top: 30px;
    text-align: center;
    margin:0 auto;
    width: 70%;
  }
  .article-image{
    /* margin:30px 0px 30px 0px; */
    margin:0 auto;
    width: 30vw; height: 40vh;
    background-size: cover;
    margin-top:40px;
    margin-bottom: 40px;
   
  }
  .article-box p{
    font-size: 25px;
  }
  .article-text {
  white-space: pre-line;
}
</style>