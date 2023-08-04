<template>
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
            <div class="submitBox">
              <button class="submit" @click="uploadData">등록</button>
            </div>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>

import axios from 'axios';

export default {
  data(){
    return {
      selectedFile : null,
      board:{
        title : '',
        contents : '',
        link : '',
      },
    };
  },
  methods: {
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
        }catch(error){
          console.error('에러 발생:',error.response.data);
          alert('게시물 등록 중 에러가 발생했습니다. 다시 시도해주세요.');
        }
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
  
</style>