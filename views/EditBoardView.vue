<template>
  <PageHeader/>
  <div class="Board">
    <div class="Board-Content">
      <h2 class="menu-title">&#60;게시물 작성&#47;&#62;</h2>
      <div class="board-container">
        <div class="board-form">
            <div class="board-item">
                <p>게시글 제목</p>
                <input type = "text" placeholder= "게시물 제목을 입력해주세요" v-model = "board.title">
            </div>
            <div class="board-item">
                <p>게시글 내용</p>
                <textarea placeholder= "게시글 내용" v-model = "board.contents"></textarea>
            </div>
            <div class="board-item">
                <p>링크</p>
                <input type = "text" placeholder= "링크가 있다면 올려주세요" v-model = "board.link">
            </div>
            <div class="board-item">
                <p style = "font-size : 18px">파일</p>
                <input type = "file" name="image" @change="onFileChange"> 
            </div>
            <div v-if="idCheck(this.noticeId)" class = "editBox">
              <div class="submitBox">
                <button class="submit" @click="deleteData">삭제</button>
              </div>
              <div class="submitBox">
                <button class="submit" @click="updateData">수정</button>
              </div>
            </div>
            <div v-else class="submitBox" >
              <button class="submit" @click="uploadData">등록</button>
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
import axios from 'axios';

export default {
  components :{
    PageHeader,
    PageFooter,
  },
  created() {
    this.noticeId = this.$route.params.id; // 라우터에서 현재 게시물 ID 가져오기
    this.fetchBoardData(this.noticeId); // 서버로부터 해당 ID의 게시물 정보 가져오기
  },
  data(){
    return {
      noticeId : null,
      selectedFile : null,
      board:{
        title : '',
        contents : '',
        link : '',
      },
    };
  },
  methods: {
    async fetchBoardData(noticeId) {
      try {
        if (noticeId) {
          const response = await axios.get(`/api/notice/modify/${noticeId}`);
          this.board = response.data;
        } else {
          // 새로운 게시물 작성 시에는 빈 입력 폼으로 시작합니다.
          this.board = {
            title: '',
            contents: '',
            link: '',
          };
        }
      } catch (error) {
        console.error('게시물 정보 가져오기 실패:', error.response.data);
        alert('게시물 정보를 가져오는 중 에러가 발생했습니다. 다시 시도해주세요.');
      }
    },
      onFileChange(event){
        this.selectedFile = event.target.files[0];
      },
      async uploadData(){
        try{
          const url = '/api/notice/writeNotice'
          const jsonData = {
            title: this.board.title,
            contents: this.board.contents,
            link: this.board.link,
          };
          const formData = new FormData();
          formData.append('jsonData', JSON.stringify(jsonData));
          formData.append('image', this.selectedFile);
          
          const response = await axios.post(url, formData);
          console.log('서버 응답:',response.data);
          alert('게시물이 성공적으로 등록되었습니다.');
          this.$router.push(`/Board`);
        }catch(error){
          console.error('에러 발생:',error.response.data);
          alert('게시물 등록 중 에러가 발생했습니다. 다시 시도해주세요.');
        }
      },
      async deleteData(){
        try{
          const url = `/api/notice/deleteNotice/${this.noticeId}`
          const id = this.noticeId;
          const response = await axios.post(url,id);
          console.log('서버 응답:',response.data);
          alert('게시물이 성공적으로 삭제되었습니다.');
          this.$router.push(`/Board`);
        }catch(error){
          console.error('삭제하는 과정에서 에러 발생:',error.response.data);
          alert('삭제하던 중 에러가 발생했습니다. 다시 시도해주세요.');
        }
      },
      async updateData(){
        try{
          const url = `/api/notice/updateNotice`;
          const jsonData = {
            title: this.board.title,
            contents: this.board.contents,
            link: this.board.link,
            id : this.noticeId,
          };

          const formData = new FormData();
          formData.append('jsonData', JSON.stringify(jsonData));
          formData.append('image', this.selectedFile);

          const response = await axios.post(url, formData);
          console.log('서버 응답:',response.data);
          alert('게시물이 성공적으로 수정되었습니다.');
          this.$router.push(`/Board`);

        }catch(error){
          console.error('수정하는 과정에서 에러 발생:',error.response.data);
          alert('수정하던 중 에러가 발생했습니다. 다시 시도해주세요.');
        }
      },   
      idCheck(noticeId){
        return noticeId !== null && noticeId !== undefined && noticeId !== "";
      },
      
  },
};
</script>
<style scoped>
  .Board-Content{
      padding-top: 100px;
  }
  .Board{
    background-color: #F2F2F2;
    width : 100%;
    height: 1024px;
  }
  .menu-title {
    font-size: 40px;
  }
  .board-container{
    margin-top : 50px;
    display: flex;
    justify-content: center;
  }
  .board-form{
    width : 1000px;
    height: 700px;
    background: white;
    padding-top: 10px;
    border-radius: 10px;
  }
  .board-item{
    display: flex;
    margin: 30px;
  }
  .board-item p {
    width: 100px;
    height: 40px;
    margin-top : 5px;
    margin-right: 30px;
    font-size: 20px;
  }
  .board-item select{
    width: 300px;
    height: 40px;
    border: 2px solid #9F9D9C;
    border-radius: 10px;
    background-color: white;
    color: #555;
    font-size: 18px;
    padding: 5px;

  }
  .board-item input[type="text"]{
    width: 800px;
    border-radius: 10px;
    border: 2px solid #9F9D9C;
  }
  .board-item textarea{
    width : 800px;
    height : 250px;
    border-radius: 10px;
    border: 2px solid #9F9D9C;
    font-size: 15px;
  }
  .submit{
    background-color: #008D39;
    color : white;
    border-radius: 5px;
    width: 80px;
    height: 40px;
    border:none;
    margin-left: auto;
    font-size: 18px;
    font-weight: 600;
  }
  .submitBox{
    display: flex;
    flex-direction: column; /* 세로 방향으로 요소 정렬 */
    align-items: flex-start;
    padding-right: 30px;
  }
  .editBox{
    display: flex;
    flex-direction: row-reverse;
  }
</style>