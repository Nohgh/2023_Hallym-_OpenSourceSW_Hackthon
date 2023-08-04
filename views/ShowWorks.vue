<template>
    <PageHeader/>
    <div class="Works">
      <div class="Works-Content">
        <h1 id="Works">&#60;Works of Team Tag&#47;&#62;</h1>
         <div class="CardShow">
                <div class="WorksCard" v-for="(image,index) in arr1" :key="index" @click="ClickImage(image)" 
                :style="{ 'background-image': 'url(' + require(`@/assets/${image.url}`) + ')'}">
                  <div class="worksNameUp">
                    <div class="WorksImage" >
                        <p class="WorksName">{{image.name}}</p>
                    </div>
                  </div>
                </div>
        </div>
        <div>
          <div class="container">
              <div class="list">
                    <div class="item">
                    This is a space to introduce the works of Tag Team. Click on the picture to appreciate the work<span>&nbsp;</span></div>
                    <div class="item">This is a space to introduce the works of Tag Team. Click on the picture to appreciate the work<span>&nbsp;</span></div>
                    <div class="item">This is a space to introduce the works of Tag Team. Click on the picture to appreciate the work<span>&nbsp;</span></div>
                    <div class="item">This is a space to introduce the works of Tag Team. Click on the picture to appreciate the work<span>&nbsp;</span></div>
                    
              </div>
              <div class="list">
                  <div class="item">This is a space to introduce the works of Tag Team. Click on the picture to appreciate the work<span>&nbsp;</span></div>
                  <div class="item">This is a space to introduce the works of Tag Team. Click on the picture to appreciate the work<span>&nbsp;</span></div>
                  <div class="item">This is a space to introduce the works of Tag Team. Click on the picture to appreciate the work<span>&nbsp;</span></div>
                  <div class="item">This is a space to introduce the works of Tag Team. Click on the picture to appreciate the work<span>&nbsp;</span></div>
                  
              </div>
          </div>
        </div>
        <div class="CardShow">
                <div class="WorksCard" v-for="(image,index) in arr2" :key="index" @click="ClickImage(image)" 
                :style="{ 'background-image': 'url(' + require(`@/assets/${image.url}`) + ')'}">
                  <div class="worksNameUp">
                    <div class="WorksImage" >
                      
                        <p class="WorksName">{{image.name}}</p>
                    </div>
                        
                  </div>
                </div>
        </div>
      </div>
    </div>
     <div class="modal" v-if="isModalOpen == true" @click="closeModal" >
        <div class="WorkModal"  
        :style="{ 'background-image': 'url(' + require(`@/assets/${clickWorksUrl}`) + ')'}">
        </div>
        <div class="WorkArticle">
          <div class="WorkArticle-box">
              <p id="p1">{{clickWorksName}}</p>
              <p id="p2">{{clickWorksArtice}}</p>
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
  mounted(){
  },
  data(){
    return{
      positionX: 0, // 초기 위치 (x 좌표)
      speed: 2, // 이동 속도 (1프레임당 이동할 거리)
      isModalOpen : false,
      clickWorksName:'',
      clickWorksUrl:'',
      clickWorksArtice:'',
            arr1:[
            {name:'세계문자박물관',article:'이 사이트는 세계문자박물관입니다 \n 잘 되어있는 사이트라고 생각되어 소개합니다.사이트를 만드는데 있어서 참고하면 좋을거 같습니다..',url:'web1.png'},
            {name:'깃허브',article:'깃허브(GitHub)는 소프트웨어 개발자들이 협업하고 소스 코드를 관리하기 위한 웹 기반 호스팅 서비스입니다. 개발자들은 깃(Git) 버전 관리 시스템을 사용하여 프로젝트를 깃허브에 업로드하고, 다른 개발자들과 함께 협업하며 소스 코드를 관리할 수 있습니다.\n 깃허브는 오픈 소스 프로젝트뿐만 아니라 비공개 프로젝트도 호스팅할 수 있으며, 프로젝트의 이슈 트래킹, 위키, 웹페이지 호스팅 등 다양한 기능을 제공합니다. 이를 통해 개발자들은 프로젝트를 효과적으로 관리하고, 다른 개발자들과 협력하여 소프트웨어 개발의 생산성을 높일 수 있습니다.',url:'github.png'},
            {name:'NOTION',article:'노션(Notion)은 온라인 작업 및 협업 도구로서, 사용자들이 노트 작성, 프로젝트 관리, 문서 공유, 작업 일정 관리 등 다양한 작업을 하기 위한 통합된 플랫폼입니다. 노션은 개인 사용자부터 팀과 기업까지 다양한 규모와 분야의 사람들이 사용하는 인기 있는 프로덕티비티 도구입니다.노션은 간단한 텍스트 에디터에서부터 데이터베이스 및 시각적인 요소를 포함한 복잡한 문서를 작성할 수 있는 다양한 기능을 제공합니다. 주요 기능은 다음과 같습니다:',url:'notion.jpg'},
            {name:'백준',article:'백준(BOJ, Baekjoon Online Judge)은 알고리즘과 프로그래밍 문제를 풀고 테스트하는 온라인 저지 사이트입니다. 이 사이트는 프로그래밍 언어를 사용하여 다양한 난이도의 문제들을 해결하고, 사용자들끼리 소스 코드를 비교하고 공유할 수 있는 플랫폼으로 인기가 많습니다.백준 사이트의 특징:다양한 문제: 백준에는 알고리즘, 자료 구조, 수학, 문자열 처리, 동적 계획법 등 다양한 주제의 문제들이 수록되어 있습니다. 난이도에 따라 브론즈, 실버, 골드, 플래티넘 등으로 문제를 구분하여 사용자가 자신의 수준에 맞는 문제를 선택할 수 있습니다.정답을 맞춘 경우에는 채점 결과와 실행 시간, 메모리 사용량 등이 표시됩니다.',url:'baekjoon.png'},
            {name:'velog',article:'Velog(블로그)은 개발자들을 위한 블로그 플랫폼으로, 주로 프로그래밍, 개발, 기술 관련 내용을 공유하고 소통하는 데에 사용됩니다. Velog는 개발자들이 자신의 경험, 지식, 프로젝트를 포스팅하고 다른 개발자들과 지식을 교환하는 데에 매우 인기 있는 사이트 중 하나입니다.Velog의 특징:기술 블로그: Velog는 개발자들을 위한 특화된 블로그 플랫폼으로, 주로 프로그래밍 언어, 프레임워크, 라이브러리 등과 관련된 기술적인 주제를 다룹니다. 개발자들은 자신의 프로젝트, 학습 경험, 개발 팁 등을 포스팅하여 공유할 수 있습니다.Markdown 문법 지원: Velog는 Markdown 문법을 지원하여 글을 작성하고 서식을 쉽게 지정할 수 있습니다. 코드 블록을 포함하여 기술적인 내용을 효과적으로 공유할 수 있습니다.',url:'velog.png'},
            {name:'OKKY',article:'OKKY는 개발자들을 위한 한국의 온라인 커뮤니티 사이트입니다. 주로 소프트웨어 개발과 IT 관련 주제를 다루며, 개발자들이 서로 정보를 공유하고 질문하며 소통하는 데에 사용됩니다.OKKY의 특징커뮤니티: OKKY는 개발자들이 자유롭게 글을 작성하고 질문하며 답변하는 개발자 커뮤니티입니다. 다양한 주제와 기술에 대한 포스트와 토론을 찾을 수 있습니다.다양한 주제: 소프트웨어 개발, 프로그래밍 언어, 프레임워크, 데이터베이스, 클라우드 컴퓨팅, 모바일 개발, 빅데이터 등 IT 관련 다양한 주제를 다룹니다.구직 정보: 개발자들을 위한 구인 정보를 포함하여 취업과 관련된 정보도 제공합니다.',url:'okky.png'}
            ],
            arr2:[
            
            {name:'UDEMY',article:'유데미는 세계에서 가장 큰 온라인 교육 플랫폼 중 하나입니다. 수천 개의 강좌가 다양한 주제로 제공되며, 프로그래밍, 디자인, 비즈니스, 마케팅, 언어 등 다양한 분야에 걸쳐 교육 자료를 제공합니다. 강의는 영상, 슬라이드, 퀴즈 등 다양한 형태로 구성되어 있으며, 학습자들은 웹 브라우저나 모바일 앱을 통해 강의를 수강할 수 있습니다. 유데미는 유료 강좌와 무료 강좌가 모두 있으며, 강의별로 접근 권한을 갖게 됩니다.',url:'유데미.png'},
            {name:'인프런',article:'인프런은 한국의 온라인 교육 플랫폼으로, 개발, 디자인, 비즈니스, 언어 등 다양한 주제의 강좌를 제공합니다. 유료 강좌와 무료 강좌가 있으며, 온라인 강의뿐만 아니라 오프라인 강의도 제공하고 있습니다. 강의 컨텐츠는 영상, 슬라이드, 실습 등 다양한 형태로 구성되어 있으며, 학습자들은 웹 브라우저나 인프런 앱을 통해 수강할 수 있습니다.',url:'인프런.png'},
            {name:'프로그래머스',article:'프로그래머스(Programmers)는 한국의 온라인 프로그래밍 교육 및 코딩 테스트 대비 플랫폼입니다. 주로 개발자를 대상으로 한국어로 운영되며, 다양한 프로그래밍 언어와 알고리즘을 학습할 수 있는 공간을 제공합니다. 아래는 프로그래머스 사이트의 특징과 내용에 대한 간략한 소개입니다.',url:'프로그래머스.png'},
            {name:'피그마',article:'피그마는 디자인 툴로서, 웹 디자이너와 그래픽 디자이너를 위한 협업 및 디자인 플랫폼입니다. 피그마를 이용하여 UI/UX 디자인, 프로토타이핑, 웹 사이트 및 앱 디자인을 할 수 있습니다. 피그마는 클라우드 기반으로 작동하며, 다른 디자이너와 함께 실시간으로 협업하여 디자인 프로젝트를 공유하고 피드백을 주고 받을 수 있습니다.',url:'피그마.png'},
            {name:'ChatGPT',article:'OpenAI에서 개발한 GPT-3.5 기반의 대화형 인공지능 언어 모델로, 다양한 주제에 대한 질문에 답변하고, 자연어로 대화를 수행하는데 사용됩니다. 챗 지피티는 뉴스, 역사, 과학, 기술, 엔터테인먼트 등 다양한 분야에 대한 지식을 가지고 있으며, 정보를 제공하고 질문에 응답하는데 활용될 수 있습니다.',url:'gpt.svg'},
            {name:'1분코딩',article:'css에 관한 내용을 설명해주는 블로그 입니다.',url:"몰라.png"}
            ]
    }

  },
  methods:{
    ClickImage(image){
      console.log(`너는 ${image.name}를 클림함`)
      this.clickWorksName=image.name;
      this.clickWorksUrl=image.url;
      this.clickWorksArtice=image.article
      
      this.ModalOpen(image)
              

     
    },
    ModalOpen(){
        this.isModalOpen=true;
        
    },
    closeModal(){
      this.isModalOpen=false;
      console.log("closeModal")
    }
  }
};


</script>
<style scoped>
  h1{
    
    text-align: left;
    margin-left: 35px;
  }

  .CardShow{
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    margin-left: 30px;
  } 
  .Works-Content{
      padding-top: 100px;
  }
  .Works{
    background-color: #F2F2F2;
    width : 100%;
    height: 1300px;
    justify-content: center;
    overflow-x: hidden;
  }
  
  
  
   .WorksCard{
      height: 25%; 
      flex-wrap: wrap;
      margin: 20px;
      border-radius: 20px; 
      box-shadow: 4px 4px 4px gray;
      align-content: center; 
      border-radius: 5px;
      background-size:cover;
      background-position: center;
      
   
    
  } 
  .WorksCard:hover{
    box-shadow: 10px 10px 10px gray;

  } 
  
  .WorksCard:hover .WorksName{
    display:block;
  }
  .WorksCard:hover .WorksImage{
        background-color: #0000005a;
        
    
  }

  .WorksImage{
    
    margin: auto;
    text-align: center;
    border-radius: 5px;
    width: 12vw; height: 12vw;
   
  }
  .WorksName{
    display: none;
    font-size: 25px;
    color: #ffffff;
    opacity: 150%;
    position: relative;
    top: 35%;
    font-weight: 500;
  }

  .aboutWorks{
    
    text-align: center;
    
  }
 

  .container {
  display: flex;
  white-space: nowrap;
}

.list {
  display: flex;
  font-size: 3vw;
  -webkit-animation: loop 0s infinite linear;
  animation: loop 70s infinite linear;
}

.item {color: #000000;}

@keyframes loop {
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

.modal{
  position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  
}

  .modal.show {
    display: block;
    }
  .WorkModal{
    margin-top:60px;
    width: 400px;
    height: 400px;
    border-radius: 10px 0px 0px 10px;
     background-size:cover;
      background-position: center;
  }
  .WorkArticle{
    margin-top:60px;
    width: 400px;
    height: 400px;
    background-color: rgba(40, 40, 40, 0.719);
    top: 40px;
    align-content: center;
    overflow: hidden;
    border-radius: 0px 10px 10px 0px;
  }
  
  .WorkArticle p{
    margin:40px 0px 30px 0px;
    color: #F2F2F2  ;
    overflow:hidden;
  }
  #p1{
    margin-top: 10%;
    font-size: 25px;
  }
  #p2{
    margin-top: 10%;
  }
</style>