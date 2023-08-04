<template>
  <PageHeader/>
  <div class="home">
    <div class = "scrollMenu">
      <div class = "scrollItem" @click="scrollToElement($refs.s1)">
        <div :class="{ circle: true, activeC: activeSection === 's1' }"></div>
        <p :class="{ p: true, active: activeSection === 's1' }" id = "s1">우리는</p>
      </div>
      <div class = "scrollItem" @click="scrollToElement($refs.s2)">
        <div :class="{ circle: true, activeC: activeSection === 's2' }"></div>
        <p :class="{ p: true, active: activeSection === 's2' }" id = "s2">무엇을</p>
      </div>
      <div class = "scrollItem" @click="scrollToElement($refs.s3)">
        <div :class="{ circle: true, activeC: activeSection === 's3' }"></div>
        <p :class="{ p: true, active: activeSection === 's3' }" id = "s3">어떻게</p>
      </div>
      <div class = "scrollItem" @click="scrollToElement($refs.s4)">
        <div :class="{ circle: true, activeC: activeSection === 's4' }"></div>
        <p :class="{ p: true, active: activeSection === 's4' }" id="s4">때로는</p>
      </div>
      <div class = "bar"></div>
    </div>
    <section class="screen1" ref = "s1">
      <video muted autoplay loop>
        <source src="@/assets/screen1.mp4" type="video/mp4">
        <strong>Your browser does not support the video tag.</strong>
      </video>
      <div class="content">
        <div class="content__container">
          <p class="content__container__text">
            우리는
          </p>
          <ul class="content__container__list">
            <li class="content__container__list__item">Team</li>
            <li class="content__container__list__item">Tag</li>
            <li class="content__container__list__item">JMT</li>
            <li class="content__container__list__item">C ·AERANG</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="screen2" ref = "s2">
      <div class="screen-content">
        <div class = "screen-item">
          <h2>Tag팀은 무엇을 하나요?</h2>
          <p>'Tag' 는 웹(WEB)프로그램의 전반적인 흐름을 이해
          하기 위해 HTML, CSS, JavaScript 등을 통해 웹
          (WEB)프로그램 제작 및 설계 과정을 학습합니다.
          씨애랑에서 제공하는 다양한 커리큘럼을 통해 프론트
           엔드 및 백엔드 역량을 강화할 수 있습니다</p>
        </div>
        <div class = "screen2-item2">
          <img src = "@/assets/screen2.jpg">
        </div>
      </div>
    </section>
    <section class="screen3" ref = "s3">
      <div class="screen-content">
        <div class = "screen-item">
          <h2>어떻게 활동 하나요?</h2>
          <p style="font-size:20px">'Tag'팀은 신입생 교육, 개인 공부 등으로 실력을 쌓은 후, 하계 방학 워크샵에서 개인 또는 팀 프로젝트를 진행합니다.
            또한 하계 방학 워크샵애서는 소프트웨어 전시회를 준비하기 위해 팀 구성, 계획을 하며 워크샵 마지막에는 씨애랑 자체 해커톤을 
            진행하여 개인 역량을 가오하 할 수 있습니다.
          </p>
        </div>
        <div class = "screen3-item2"> 
          <div class="slides2">
            <div class="card">
              <img src="@/assets/신입생교육.jpeg">
              <div class="card-contents">
                <p class = "card-title">신입생교육</p>
                <p class = "card-date">3월 20일 ~ 4월 12일</p>
              </div>
            </div>
            <div class="card">
              <img src="@/assets/팀교육.jpeg">
              <div class="card-contents">
                <p class = "card-title">팀교육</p>
                <p class = "card-date">5월 01일 ~ 5월 26일</p>
              </div>
            </div>
            <div class="card">
              <img src="@/assets/하계워크샵.jpeg">
               <div class="card-contents">
                <p class = "card-title">하계워크샵</p>
                <p class = "card-date">7월 03일 ~ 7월 28일</p>
              </div>
            </div>
            <div class="card">
              <img src="@/assets/해커톤.jpeg">
               <div class="card-contents">
                <p class = "card-title">해커톤</p>
                <p class = "card-date">7월 31일 ~ 8월 2일</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="screen4" ref = "s4">
      <div class="content-wrapper" style = "flex : 1;">
      <div class="screen-content">
        <div class = "screen-item">
          <h2>때로는 놀기도 하는!</h2>
          <p>선/후배 간의 친목을 다지기 위해 때로는 회식과 미니게임과 같은 활동으로 분위기를 띄우기도 합니다! </p>
        </div>
        <div class = "screen4-item2"> 
          <ul class="slides">
    <input type="radio" name="radio-btn" id="img-1" checked />
    <li class="slide-container">
		<div class="slide">
			<img src="@/assets/노는2.jpg" />
        </div>
		<div class="nav">
			<!-- <label for="img-6" class="prev">&#x2039;</label> -->
			<label for="img-2" class="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-2" />
    <li class="slide-container">
        <div class="slide">
			<img src="@/assets/노는1.jpg" />
        </div>
		<div class="nav">
			<label for="img-1" class="prev">&#x2039;</label>
			<label for="img-3" class="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-3" />
    <li class="slide-container">
        <div class="slide">
			<img src="@/assets/노는3.jpg" />
        </div>
		<div class="nav">
			<label for="img-2" class="prev">&#x2039;</label>
			<label for="img-4" class="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-4" />
    <li class="slide-container">
        <div class="slide">
			<img src="@/assets/노는4.jpg" />
        </div>
		<div class="nav">
			<label for="img-3" class="prev">&#x2039;</label>
			<label for="img-5" class="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-5" />
    <li class="slide-container">
        <div class="slide">
			<img src="@/assets/노는5.jpg" />
        </div>
		<div class="nav">
			<label for="img-4" class="prev">&#x2039;</label>
		</div>
    </li>
    <li class="nav-dots">
      <label for="img-1" class="nav-dot" id="img-dot-1"></label>
      <label for="img-2" class="nav-dot" id="img-dot-2"></label>
      <label for="img-3" class="nav-dot" id="img-dot-3"></label>
      <label for="img-4" class="nav-dot" id="img-dot-4"></label>
      <label for="img-5" class="nav-dot" id="img-dot-5"></label>
      <label for="img-6" class="nav-dot" id="img-dot-6"></label>
    </li>
</ul>
        </div>
      </div>
      </div>
      <PageFooter/>
    </section>
  </div>
  
</template>

<script>
import PageHeader from '@/components/Header.vue'
import PageFooter from '@/components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    PageHeader,
    PageFooter,
  },
  data(){
    return{
      activeSection: 's1',
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    // 컴포넌트가 파기되기 전에 스크롤 이벤트 리스너 해제
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods : {
    scrollToElement(targetElement){
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    },
     handleScroll() {
      // 현재 스크롤 위치 확인
      const scrollPosition = window.scrollY;

        // 각 섹션의 위치 파악
        // eslint-disable-next-line no-unused-vars
        const s1Position = this.$refs.s1.offsetTop;
        const s2Position = this.$refs.s2.offsetTop;
        const s3Position = this.$refs.s3.offsetTop;
        const s4Position = this.$refs.s4.offsetTop;

        // 현재 활성화된 섹션 확인하여 해당하는 "scrollItem"의 circle과 p의 색상 변경
        if (scrollPosition >= s4Position) {
          this.activeSection = 's4';
        } else if (scrollPosition >= s3Position) {
          this.activeSection = 's3';
        } else if (scrollPosition >= s2Position) {
          this.activeSection = 's2';
        } else {
          this.activeSection = 's1';
        }
    },
  }
};
</script>
<style scoped lang="scss">
   .content__container__list{
    display: inline-block;
    
  }
  .content__container{
    height: 50px
  }
  .home{
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden ;
  }
  section{
    width : 100vw;
    height : 100vh;
  }
  .screen1{
    overflow: hidden;
    margin: 0px auto; 
    position: relative;
  }

  .screen2{
    background-image: url("@/assets/BackImg1.jpeg");
    display: flex;
    
    align-items: center;
  }
  .screen3{
    background-image: url("@/assets/BackImg2.jpeg");
  }
  .screen4{
    background-image: url("@/assets/BackImg3.jpeg");
    display: flex;
    flex-direction: column;
  }
  #s1:hover{
    position: absolute;
    left : 35px;
  }
  #s2:hover{
    position: absolute;
    left : 35px;
  }
  #s3:hover{
    position: absolute;
    left : 35px;
  }
  #s4:hover{
    position: absolute;
    left : 35px;
  }
  .scrollMenu{
    position: fixed;
    top : 40%;
    left: 50px;
    z-index: 2;
    width : 150px;
    height: 50px;
  }
  .scrollMenu .scrollItem{
    width: 150px;
    height: 50px;
    display: flex;
    align-items: center;
    font-size : 25px;
  }
  .p{
    width: 100px;
  }
  .scrollItem .p.active {
  /* 활성화된 섹션의 p 색상 */
    color: white;
    opacity: 100%;
  } 
  .scrollItem .p{
    color : white;
    opacity: 50%;
  }
  .scrollItem .circle.activeC{
  /* 활성화된 섹션의 circle 색상 */
    background-color : white;
    
  }   
  .scrollItem .circle{
    background-color: #ababab;
    width : 20px;
    height: 20px;
    border-radius: 50px;
    margin-right: 10px;
    z-index: 2;
  }
  .scrollMenu .bar{
    z-index : 1;
    width: 2px;
    height: 150px;
    background-color:#F6F6F6;
    opacity: 50%;
    position: absolute;
    top : 20px;
    left: 9px;
  }
  .screen-content{

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 300px;
  }
  
  .screen-content .screen-item{
    margin : 20px 70px 20px 20px;
    height: 40vh;
  }
  .screen-item h2{
    font-size: 4.5vh;
    margin-bottom: 80px;
    text-align: left;
    color : white;
  }
  .screen-item p{
    font-size: 25px;
    text-align: left;
    color : white;
    width : 50vh;
  }
  .screen-content .screen2-item2{
    margin-left: 20px;
  }
  .screen3 .screen-item{
    margin-right: 50px;
  }
  .screen2-item2 img{
    width: 700px;
    height: 400px;
   
  }
  .screen-item{
    margin-left: 40px;
  }
  video{
    width : 100vw;
    height : 100vh;
    object-fit: fill;
  }

.content {
  position: absolute;
  top: 50%;
  left: 53%;
  transform: translate(-50%, -40%);
  height: 160px;
  overflow:hidden;
  
  font-family: 'Lato', sans-serif;
  font-size: 60px;
  line-height: 100px;
  color: #ecf0f1;
  
  &__container {
    font-weight: 600;
    overflow: hidden;
    height: 100px;
    padding: 0 40px;

    &:before {
      content: '[';
      left: 0;
    }

    &:after {
      content: ']';
      position: absolute;
      right: 0;
    }

    &:after, &:before {
      position: absolute;
      top: 0;
      
      color: #16a085;
      font-size: 60px;
      line-height: 100px;
      
      -webkit-animation-name: opacity;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
      animation-name: opacity;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }

    &__text {
      display: inline;
      float: left;
      margin: 0;
    }

    &__list {
      margin-top: 0;
      padding-left: 30px;
      text-align: left;
      list-style: none;
      
      -webkit-animation-name: change;
      -webkit-animation-duration: 10s;
      -webkit-animation-iteration-count: infinite;
      animation-name: change;
      animation-duration: 10s;
      animation-iteration-count: infinite;

      &__item {
        line-height:100px;
        margin:0;
      }
    }
  }
}

@-webkit-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-webkit-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@-o-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-o-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@-moz-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-moz-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}
/* screen4 item2*/
.slides {
    padding: 0;
    width: 609px;
    height: 420px;
    display: block;
    margin: 0 auto;
    position: relative;
}

.slides * {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
}

.slides input { display: none; }

.slide-container { display: block; }

.slide {
    top: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    transform: scale(0);
    transition: all .7s ease-in-out;
}

.slide img {
    width: 100%;
    height: 100%;
}
.nav{
  width: 120%;
}
.nav label {
    width: 20%;
    height: 100%;
    display: none;
    position: absolute;
    opacity:0;
    z-index:9;
    cursor:pointer;
    transition: opacity .2s;
    color: #FFF;
    font-size: 156pt;
    text-align: center;
    line-height: 380px;
    font-family: "Varela Round", sans-serif;
    background-color: rgba(255, 255, 255, .3);
    text-shadow: 0px 0px 15px rgb(119, 119, 119);
}

.slide:hover + .nav label { opacity: 0.5; }

.nav label:hover { opacity: 1; }

.nav .next { right: 0; }

input:checked + .slide-container  .slide {
    opacity: 1;

    transform: scale(1);

    transition: opacity 1s ease-in-out;
}

input:checked + .slide-container .nav label { display: block; }

.nav-dots {
	width: 100%;
	bottom: 9px;
	height: 11px;
	display: block;
	position: absolute;
	text-align: center;
}

.nav-dots .nav-dot {
	top: -5px;
	width: 11px;
	height: 11px;
	margin: 0 4px;
	position: relative;
	border-radius: 100%;
	display: inline-block;
	background-color: rgba(0, 0, 0, 0.6);
}

.nav-dots .nav-dot:hover {
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.8);
}

input#img-1:checked ~ .nav-dots label#img-dot-1,
input#img-2:checked ~ .nav-dots label#img-dot-2,
input#img-3:checked ~ .nav-dots label#img-dot-3,
input#img-4:checked ~ .nav-dots label#img-dot-4,
input#img-5:checked ~ .nav-dots label#img-dot-5,
input#img-6:checked ~ .nav-dots label#img-dot-6 {
	background: rgba(0, 0, 0, 0.8);
}

/*슬라이더*/
.slides2 {
  display:grid;
  gap:1rem;
  grid-auto-flow:column;
  overflow-x: auto;
  overscroll-behavior-x:contain;
  scroll-snap-type:x mandatory;
  scrollbar-width:none;
  width:  45vw;
  height: 50vh;
}
.card{
  box-shadow: 10px 5px 10px black;
  background-color: white;
}
.card-contents{
  padding: 15px;  
}
.card-contents .card-title{
  font-size : 25px;
  font-weight: 600;
  
}
.card-contents .card-date{
  font-size : 20px;
}
.slides2::-webkit-scrollbar {
  display: none;
}

.slides2 img {
/*   scroll-snap이 달라붙는 item 기준 start, end, center */
  scroll-snap-align: start;
  width: 400px;
  height:350px;
}
</style>