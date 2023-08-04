<template>
    <footer :class= "isHomePage ? 'home-footer' : 'footer'">
        <div>
            <p>(24252)강원특별자치도 춘천시 한림대학길 1</p>
            <p>대표 033-248-1000</p>
            <p>HALLYM UNIVERSITY C · AERANG TEAM TAG</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'PageFooter',
    data(){
       return{
      isModalOpen : false,
      
    };
    },
    computed: {
        isHomePage() {
            // 현재 페이지가 홈 페이지인지 확인
            return this.$route.path === '/';
        },
    },
};
</script>

<style>
  .footer{
    width: 100%;
    height: 100px;
    background-color: white;
    padding: 10px 20px 20px 20px;
    text-align: left;
  }
  .home-footer{
    width: 100%;
    height: 100px;
    background-color: black;
    padding: 10px 20px 20px 20px;
    text-align: left;
    opacity: 50%;
  }
  .footer p{
    color : #9F9D9C;
  }
  .home-footer p{
    color : white;
  }
  button{
    background-color: rgb(237, 237, 237);
  }
</style>
