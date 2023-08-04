<template>
    <PageHeader/>
    <div class="Question">
        <h1 class="menu-title">&#60;자주하는 질문&#47;&#62;</h1>
    <div class="accordion gradient01">
        <p>태그팀에 대해 자주 문의하는 질문을 정리해 보았습니다.</p>
        <p>질문을 클릭해 답변을 확인 해주세요</p>
         <ul>
            <li :class="{'on': activeIndex === 0}" @click="toggleAccordion(0)">
                <div class="title"><span>워크샵은 어떤 활동을 하나요?</span> <i class="fa-solid fa-sort-down"></i></div>
                <div class="desc">
                  워크샵은 주로 특정 주제에 대해 심도 있게 다루는 집중 학습 세션이나, 팀워크와 협업 능력을 향상시키는 팀 빌딩 활동 등을 수행합니다.

                </div>
            </li>
            <li :class="{'on': activeIndex === 1}" @click="toggleAccordion(1)">
                <div class="title"><span>워크샵은 언제 하나요?</span> <i class="fa-solid fa-sort-down"></i></div>
                <div class="desc">하계 워크샵은 보통 1학기 종강후 약 1주후에 실시합니다.</div>
            </li>
            <li :class="{'on': activeIndex === 2}" @click="toggleAccordion(2)">
                <div class="title"><span>회장님 잘생겼나요?</span> <i class="fa-solid fa-sort-down"></i></div>
                <div class="desc">회장님의 외모는 개인의 주관에 따라 다르게 느껴질 수 있습니다. 저는 잘 생겼다고 생각합니다.
                </div>
            </li>
             <li :class="{'on': activeIndex === 3}" @click="toggleAccordion(3)">
                <div class="title"><span>회식 자주 있나요?</span> <i class="fa-solid fa-sort-down"></i></div>
                <div class="desc">매 학기 보통 1회~2회 정도 진행하는 것 같습니다. 정말 재밌습니다!</div>
            </li>
             <li :class="{'on': activeIndex === 4}" @click="toggleAccordion(4)">
                <div class="title"><span>뷰나 리엑트 같은 심화된 내용을 배우나요?</span> <i class="fa-solid fa-sort-down"></i></div>
                <div class="desc">뷰나 리액트 같은 프론트엔드 프레임워크에 대한 교육은 고급 수준의 웹 개발 학습으로, JS 기초가 어느 정도 학습되신 분들은 강의를 통해 프레임워크에 입문하실 수 있습니다.
</div>
            </li>
             <li :class="{'on': activeIndex === 5}" @click="toggleAccordion(5)">
                <div class="title"><span>소프트웨어 전시회는 뭔가요?
</span> <i class="fa-solid fa-sort-down"></i></div>
                <div class="desc">소프트웨어 전시회는 개발자들이 자신들의 프로젝트나 소프트웨어를 공개하고, 이를 통해 피드백을 받거나 네트워킹을 하는 행사입니다.
</div>
            </li>
             <li :class="{'on': activeIndex === 6}" @click="toggleAccordion(6)">
                <div class="title"><span>소프트웨어 전시회는 언제인가요?
</span> <i class="fa-solid fa-sort-down"></i></div>
                <div class="desc">보통 2학기 기말고사 쯤에 진행됩니다. 시험과 동시에 준비하다 보면 바빠질 수 있으니, 팀원들과 미리미리 준비하시는게 
꿀팁입니다!</div>
            </li> 
             <li :class="{'on': activeIndex === 7}" @click="toggleAccordion(7)">
                <div class="title"><span>신규부원 모집은 언제하나요?</span> <i class="fa-solid fa-sort-down"></i></div>
                <div class="desc">태그팀 신규 부원 모집은 5월초에 이루어 집니다. 하지만, 구체적인 일정은 조직의 상황에 따라 달라질 수 있으므로, 정확한 정보는 조직의 공식 안내나 공지를 참조해야 합니다.</div>
            </li>
        </ul>
    </div>
    </div>
    <PageFooter/>
</template>

<script>
import { ref } from 'vue';
import PageHeader from '@/components/Header.vue'
import PageFooter from '@/components/Footer.vue'

export default {
    components: {
        PageHeader,
        PageFooter,
    },
    setup() {
        const activeIndex = ref(0);
        
        function toggleAccordion(index) {
            activeIndex.value = activeIndex.value === index ? -1 : index;
        }

        return {
            activeIndex,
            toggleAccordion,
        };
    }
};
</script>

<style scoped>
  .Question {
    background-color: #F2F2F2;
    width: 100vw;
    height: 1024px;
    padding-top: 100px;
    overflow-x: hidden;
  }
  /* .LoadMap-Content {
    display: flex;
    justify-content: center;
  } */
 
  .accordion {
    margin: auto;
    margin-top: 20px;
    text-align: center;
    background-color: #e8e8e830;
    width: 60vw;
    
  }
  .accordion p{
    background-color: #F2F2F2;
    font-size: 20px;
    padding-bottom: 10px;
  }
  .accordion .title:hover{
    box-shadow: 5px 5px 5px rgb(203, 203, 203);
  }
  .accordion span{
    width: 96%;
    text-align: start;
  }
    .accordion ul{
        padding:0px
    }
  .accordion ul > li {
    overflow: hidden;
    max-height: 40px;
    transition: 0.3s;
  }
  .accordion ul > li.on {
    max-height: 600px;
  }
  .accordion ul > li .title {
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
  }
  .accordion ul > li .desc {
    padding: 0.5rem;
  }
  
</style>
