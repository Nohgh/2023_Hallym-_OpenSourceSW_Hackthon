<template>
  <PageHeader/>
  <div class="Board">
    <div class="board-content">
      <div  class="menu-title">
        <h2>&#60;공지사항&#47;&#62;</h2>
      </div>
      <div class = "search">

        <select name = "category" v-model="category">
          <option value="" selected>전체</option>
          <option value="searchTitle" selected>제목</option>
          <option value="searchContainer">내용</option>
        </select>
        <input type = "text" placeholder="검색어 입력" v-model="keyword">
        <button @click="goToSearch()">검색</button>
      </div>
      <div class = "board-item">
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>조회수</th>
              <th>작성시간</th>
            </tr>
          </thead>
          <tbody v-if = "hasNotices">
            <tr v-for="notice in notices" :key="notice.ID" @click="goToNoticeDetail(notice.ID)">
                <td style = "width : 50px;">{{ notice.serialNum}}</td>
                <td style = "width : 400px;">{{ notice.title }}</td>
                <td style = "width : 50px;">{{ notice.viewCount }}</td>
                <td style = "width : 150px;">{{ notice.writeTime }}</td>
            </tr>
          </tbody>
          <tbody v-else>
            <td colspan="4">등록된 공지사항이 없습니다.</td>
          </tbody>
        </table>
        <!-- 페이지네이션 -->
      </div>
      <div class="pagination">
        <ul>
            <li v-for="page in getTotalPages" :key="page" @click="goToPage(page)">
                {{ page }}
            </li>
        </ul>
      </div>
      <div class = "NewPost">
        <button @click = "isModalOpen=true">글 작성</button>
      </div>
    </div>
    <div class = "modal" v-if="isModalOpen == true" @click="closeModal" >
      <div class="modal_body" @click.stop>
				<div class="login-box-in">
						<div style="font-size:35px">&lt;로그인/&gt;</div>
						<div class="login-porm">
							<p>관리자아이디</p>
							<input type="text" name="userid" v-model="userid">
							<p>비밀번호</p>
							<input type="password" name="passwd" v-model="passwd">
							<button class = "submit-button" @click="submitLogin">로그인</button>
						</div>					
				</div>
			</div>
    </div>  
  </div>
  <PageFooter/>
</template>


<script>
import PageHeader from '@/components/Header.vue'
import PageFooter from '@/components/Footer.vue'
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return{
      isModalOpen : false,
      userid : "",
      passwd : "",
      page : 1,
      selectSerch:""//백에 넘길 선택한 값 
    };
  },
  components :{
    PageHeader,
    PageFooter,
  },
  computed : {
    notices() {
      return this.$store.state.notices;
    },
    hasNotices() {
      return this.$store.getters.hasNotices; // Vuex 스토어의 hasNotices getter 사용
    },
    ...mapGetters(['getTotalPages']),
    ...mapGetters(['getKeyword', 'getCategory']),
  },
  created() {
      this.$store.dispatch('fetchNotices'); // 공지사항 데이터를 서버로부터 가져오기
      console.log("createdㅋㅋㅋㅋ");
  },  
  methods: {
      closeModal(){
        this.isModalOpen = false;
      },
      submitLogin(){
        if(this.userid == "admin" && this.passwd == "1234"){
          this.$router.push('/Board/EditBoard');
        }
      },
      goToNoticeDetail(noticeId) {
        this.$router.push(`/Board/${noticeId}`);
      },
      goToPage(page){

        this.page = page; // 현재 페이지 변경
        this.$store.dispatch('fetchNotices', this.page); // 해당 페이지의 공지사항 데이터를 서버로부터 가져오기
      },
      goToSearch() {
        // 버튼을 누를 때 키워드와 카테고리를 스토어에 저장
        this.$store.commit('setSearchKeyword', this.keyword);
        console.log("goToSearch : setSearchKeyword :  " + this.keyword);
        this.$store.commit('setSearchCategory', this.category);
        console.log("goToSearch : setSearchCategory : " + this.category);
        this.$store.dispatch('fetchNotices', this.page); 
        // 추가로 다른 동작을 수행하거나 검색 결과 페이지로 이동할 수 있음
      },
      ...mapActions(['setKeyword', 'setCategory']),
  },
};
</script>

<style scoped>
  .Board{
    background-color: #F2F2F2;
    width : 100%;
    height: 1124px;
    padding-top: 100px;
    display: flex;
    justify-content: center;
  }
  .board-content{
    width : 1000px;
    height : 800px;
  }
  .menu-title {
    text-align: center;
    height: 50px;
    margin-bottom: 40px;
  }
  .menu-title h2{
    font-size: 40px;
  }
  .search{
    width: 100%;
    height : 50px;
  }
  .search select{
    width: 60px;
    height: 30px;
    margin-right: 10px;
  }
  .search input[type="text"]{
    width: 300px;
    height: 25px;
    margin-right: 10px;
  }
  .search button{
    width : 80px;
    height: 30px;
    background-color: #008D39;
    color : white;
    border-radius: 5px;
    border : 1px solid #008D39;

  }
  
  .board-item{
    width: 100%;
    height: 650px;
    display: flex;
    justify-content: center;
  }
  table{
    text-align: center; 
    border-top:5px solid #dddddd; 
    border-bottom: 5px solid #dddddd;
    width : 100%;
  }
  table th{
    background-color: white;
    
  }
  table tr{
    height: 40px;
  }
  table td{
    background-color: white;
  }
  .pagination{
    display: flex;
    justify-content: center;
    padding: 0;
  }
  .pagination ul{
    display: flex;
  }
  .pagination li{
    list-style: none;
    margin: 10px;
    cursor: pointer;
  }
  .NewPost{
    display: flex;
    flex-direction: row-reverse;
    margin-top: 10px;
  }
  .NewPost button{
    background: #008D39;
    color : white;
    border-radius: 5px;
    border : 1px solid #008D39;
    width : 70px;
    height: 30px;
  }

  /*모달창*/
  .login-box-out {
	height : 400px;
	padding : 24px;
	text-align : center;
	margin-bottom : 20px;
	width : 350px;
	background-color : white;
	border-radius: 8px;
	box-shadow: 0 0 8px 0 rgba(0,0,0,0.08);
}


.login-porm{
	margin : 30px 0 0 0;
}

.login-porm input{
	width : 312px;
	height : 40px;
	font-size : 15px;
	border-radius: 8px;
	border: 0.5px solid black; 
	margin : 0 0 30px 0;
}
.submit-button{
  width : 312px;
	height : 40px;
	font-size : 15px;
	border-radius: 8px;
	margin : 0 0 30px 0;
  color : white; 
	background-color : green; 
  border: 0.5px solid green;
}

.login-porm p{
	text-align : left;
	color : gray;
	margin-left: 20px;
	margin-bottom: 10px;
}
.modal {
	position: fixed;
    top: 0;
    left: 0;
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

  .modal_body {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 350px;
	height: 400px;
	padding: 40px;
	text-align: center;
	background-color: rgb(255, 255, 255);
	border-radius: 10px;
	box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

	transform: translateX(-50%) translateY(-50%);
  }
</style>