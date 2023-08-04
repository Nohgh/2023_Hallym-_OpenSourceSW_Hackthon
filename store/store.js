// import Vue from 'vue';
// import Vuex from 'vuex';
import axios from 'axios';
// Vue.use(Vuex);
import {createStore} from 'vuex'
// export default new Vuex.Store({

const store = createStore({
  state:{
    notices: [],
    totalPages: 0,
    searchCategory: '전체',
    searchKeyword: '',
  },
  mutations: {
    setNotices(state, {noticeListDTOS, totalPages}) {
      state.notices = noticeListDTOS;
      state.totalPages = totalPages;
    },
    setSearchCategory(state, category) {
      state.searchCategory = category;
    },
    setSearchKeyword(state, keyword) {
      state.searchKeyword = keyword;
    },
  },
  actions: {
    async fetchNotices({ commit,state }, page) {
      const { searchCategory, searchKeyword } = state;
      // 서버로부터 공지사항 데이터를 가져오는 비동기 작업
      let apiUrl = `/api/notice/list/${page - 1}`;
      if (searchCategory === "searchTitle") {
        apiUrl += `?searchTitle=${searchKeyword }`;
      }else if(searchCategory === "searchContainer"){
        apiUrl += `?searchContainer=${searchKeyword}`;
      }
      try {
        const response = await axios.get(apiUrl);
        commit('setNotices', response.data);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    }
  },
  getters: {
    hasNotices(state) {
      return state.notices.length > 0; // 게시물이 있는지 여부를 확인하여 반환
    },
    getTotalPages(state) {
      return state.totalPages;
    },
    getKeyword(state) {
      return state.searchKeyword;
    },
    getCategory(state) {
      return state.searchCategory;
    },
  },
});
export default store;
