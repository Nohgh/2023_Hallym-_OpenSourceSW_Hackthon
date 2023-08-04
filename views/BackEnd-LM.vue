<template>
    <PageHeader/>
     <div class="RoadMap">
        <h2 class="menu-title">&#60;Back-End&#47;&#62;</h2>
        <div class = "RoadMap-container">
          <div class="RoadMap-item">
            <router-link  to="/LoadMap/BackEnd/RoadmapArticle_Back" v-for="(index,imageUrl) in card" :key="imageUrl" class="RoadmapCard " @click="showthis(index)">
                        <!-- 여기서 for돌리면서 해당 index를 바뀔때마다 vuex 상태에 저장하면  -->
                        <img :src="require(`@/assets/${index.url}`)"> 
                        <p class="p1">{{index.title}}</p>
            </router-link>
          </div>
        </div>
    </div>
    <PageFooter/>    
</template>
<script>

import PageHeader from '@/components/Header.vue'
import PageFooter from '@/components/Footer.vue'


export default {
  components :{
    PageHeader,
    PageFooter,
  },
  data(){
    return{ //backend 배열로 새로 저장해야 함 
      card:[],
    }
  },
  async mounted(){
    //url을 어떻게 해야할까 이름만 받아와서 이름.jpg해도 되긴한데 png도 있으니 url도 있는게 좋을거 같음 
     //this.$axios.get('/api/board/backlist')
    try {
      const response = await this.$axios.get("/api/board/backlist");
      this.card = response.data;
      console.log(response.data);
      console.log(this.card);
      console.log("성공적으로 데이터를 불러왔습니다.");
    } catch (error) {
      console.log("에러: " + error);
    }
  },
  methods:{
    //vuex의 mutations를 해당 컴포넌트의 methods 속성에 매핑 
    // ...mapMutations(['VIEW_COUNT_UP_BACK']),

    showthis(index){
      //카드 클릭시 다음 페이지로 넘길 데이터 정의 라우터 푸시로 넘김 
      // this.VIEW_COUNT_UP_BACK(index.index);//상태변경 함수에 인덱스 전달 -> 해당 인덱스의 카운트 증가 
      this.$router.push({ name: 'BackendRoadmapArticle', params: { title: index.title,  url:index.url,  article:index.article } });
      //index:index.index
   }
   
}};
import '@/assets/font.css';
</script>

<style scoped>

 .RoadMap{
    background-color: #F2F2F2;
    width : 100%;
    height: 1524px;
    padding-top: 100px;

  }
  .menu-title {
    font-size: 40px;
  }
 
  .RoadMap-container{
    display: flex;
    justify-content: center;
    margin-top: 30px;
    width: 100%;
    height: 1024px;

  }
   .RoadMap-item{
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    margin: 20px;
    margin-bottom: 30px;
   }
  .RoadmapCard{
    width: 13vw;
    height: 250px;
    background-color: white;
    margin: 0px 40px 50px 40px;
    border-radius: 20px;
    box-shadow: 5px 5px 5px gray;
    overflow: hidden;
  }
  .RoadmapCard:hover{
    box-shadow: 10px 10px 10px gray;
  }
  .RoadmapCard img{
    width : 11vw;
    height : 120px;
    border-radius: 20px;
    margin: 10px 10px;
  }
  .RoadmapCard p{
    margin-top: 20px;
    font-size: 18px;
    font-weight: 600;
  }

  .RoadmapCard p:visited { color:black; }

  .p1{
    color:black; 
  }
</style>