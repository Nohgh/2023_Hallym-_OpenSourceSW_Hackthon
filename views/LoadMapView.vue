<template>
    <PageHeader/>
    <div class="LoadMap">
        <h2 class="menu-title">&#60;로드맵&#47;&#62;</h2>
        <div class="LoadMap-Content">
          <router-link to = "/LoadMap/FrontEnd" class = "front-end">
            <div class = "p1">
              <p>front-end</p>
            </div>
            <div class = "show-on-hover">
              <p class = "p2">로드맵</p>
                <div class = "line"></div>
                <p class = "p3">보러가기</p>
            </div>
          </router-link>
          <router-link to="/LoadMap/BackEnd" class = "back-end">
            <div class = "p1">
              <p>back-end</p>
            </div>
            <div class = "show-on-hover">
              <p class = "p2">로드맵</p>
                <div class = "line"></div>
                <p class = "p3">보러가기</p>
            </div>
          </router-link>
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
  }
};
</script>

<style scoped>

  .LoadMap{
    background-color: #F2F2F2;
    width : 100%;
    height: 1024px;
    padding-top: 100px;
  }
  .LoadMap-Content{
    display: flex;
    justify-content: center;
  }
  .menu-title {
    font-size: 40px;
  } 
  .front-end{
    width : 500px;
    height: 500px;
    margin : 50px;
    border-radius: 20px;
    background-image: url("@/assets/frontEnd.jpg");
    background-size : 650px 500px;
    position: relative;
    
    
  }
  .front-end:hover{
    opacity: 50%;
  }
  
  .p1{
    font-size: 60px;
    text-align: center;
    color : white;
    position: relative;
    top : 43%;
    font-family: 'Noto Sans KR', sans-serif;
    font-family: 'Tektur', cursive;
  }
  .front-end:hover .p1{
    opacity: 0%;
    transition-duration:0.7s;
  }
  
  .p2{
    visibility: hidden;
    font-size: 50px;
    color : white;
    position: absolute;
    transform: translate(180px, 40px);
    font-weight: 700;
  }
  .front-end:hover .p2{
    transform: translate(180px, 100px);
    transition-delay: 0.5s;
    transition-duration: 1s;
  }
  .front-end:hover .p2{
    visibility: visible;
    transition-delay: 0.8s;
  }
  .p3{
    visibility: hidden;
    font-size: 50px;
    color : white;
    position: absolute;
    transform: translate(160px, 260px);
    font-weight: 700;
  }
  .front-end:hover .p3{
    transform: translate(160px, 200px);
    transition-delay: 0.5s;
    transition-duration: 1s;
  }
  .front-end:hover .p3{
    visibility: visible;
    transition-delay: 0.8s;
  }

  .line{
    visibility: hidden;
    background-color: white;
    width: 200px;
    height: 3px;
    margin: 0 auto;
    position: absolute;
    transform: translate(140px, 180px);

  }
  .front-end:hover .line{
    visibility: visible;
    transition-delay: 0.5s;
  }
  .back-end{
    width : 500px;
    height: 500px;
    margin : 50px;
    border-radius: 20px;
    background-image: url("@/assets/backEnd.jpeg");
    background-size : 650px 500px;
  }
  .back-end:hover{
    opacity: 50%;
  }
  .back-end:hover .p1{
    opacity: 0%;
    transition-duration:0.7s;
  }
  .back-end:hover .p2{
    transform: translate(180px, 100px);
    transition-delay: 0.5s;
    transition-duration: 1s;
  }
  .back-end:hover .p2{
    visibility: visible;
    transition-delay: 0.8s;
  }
  .back-end:hover .p3{
    transform: translate(160px, 200px);
    transition-delay: 0.5s;
    transition-duration: 1s;
  }
  .back-end:hover .p3{
    visibility: visible;
    transition-delay: 0.8s;
  }
  .back-end:hover .line{
    visibility: visible;
    transition-delay: 0.5s;
  }
  a{
    text-decoration: none;
    
  }
</style>