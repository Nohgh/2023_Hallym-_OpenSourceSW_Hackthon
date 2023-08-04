import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import SignUp from '../views/SignUpView.vue'
import Board from '../views/BoardView.vue'
import LoadMap from '../views/LoadMapView.vue'
import Schedule from '../views/ScheduleView.vue'
import FrontEnd from '../views/FrontEnd-LM.vue'
import BackEnd from '../views/BackEnd-LM.vue'
import RoadmapArticle_Front from '../views/RoadmapArticle_Front.vue'
import RoadmapArticle_Back from  '../views/RoadmapArticle_Back.vue'
import ShowWorks from '../views/ShowWorks.vue'
import ArticleView from '../views/ArticleView.vue'
import FrequentlyQuestion from '../views/FrequentlyQuestion.vue'
import EditBoard from '../views/EditBoardView.vue'
import TestView from '../views/testView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component : SignUp
  },
  {
    path : '/Board',
    name : 'Board',
    component : Board
  },
  {
    path : '/Board/:id',
    name : 'Article',
    component : ArticleView
  },
  {
    path : '/LoadMap',
    name : 'LoadMap',
    component : LoadMap
  },
  {
    path : '/ShowWorks',
    name : 'ShowWorks',
    component : ShowWorks
  },
  {
    path : '/LoadMap/FrontEnd',
    name : 'FrontEnd',
    component : FrontEnd
  },
  {
    path : '/LoadMap/FrontEnd/RoadmapArticle_Front',
    name : 'FrontRoadmapArticle',
    component : RoadmapArticle_Front,  
  },
  {
    path : '/Board/EditBoard', //있어야됨 새게시글 작성
    name : 'EditBoard',
    component : EditBoard,
  },
  {
    path : '/Board/EditBoard/:id', //있어야됨 수정 삭제 
    name : 'EditBoardId',
    component : EditBoard,
  },
  {
    path : '/LoadMap/BackEnd',
    name : 'BackEnd',
    component : BackEnd
  },
  {
    path : '/LoadMap/BackEnd/RoadmapArticle_Back',
    name : 'BackendRoadmapArticle',
    component : RoadmapArticle_Back,
  },
  {
    path : '/Schedule',
    name : 'Schedule',
    component : Schedule
  },
  {
    path : '/FrequentlyQuestion',
    name : 'FrequentlyQuestion',
    component : FrequentlyQuestion
  },
  {
    path : '/Test',
    name : 'Test',
    component : TestView
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
