<template>
    <PageHeader/>
    <div id = "SignUp">
        <div class="signup-content">
            <div class="menu-title-wrapper">
                <h2 class="menu-title">&#60;회원가입&#47;&#62;</h2>
            </div>
            
            <div id = "body">
                <div class = "content">
                    <h2>Tag팀 계정으로 사용할 이메일<br>
                    주소와 회원정보를 입력해주세요 </h2>
                    <form @submit.prevent="submitForm">
                        <div class = "input-form">
                            <p>이메일(아이디)</p>
                            <input type = "email" placeholder="로그인시, 사용할 이메일을 입력해주세요"  v-model="user.email">
                        </div>
                        <div class = "input-form">
                            <p>비밀번호</p>
                            <input type = "password" placeholder="영/특수문자/숫자를 조합하여 8자리 이상 입력해주세요" v-model="user.password">
                        </div>
                        <div class = "input-form">
                            <p>비밀번호 확인</p>
                            <input type = "password" placeholder="비밀번호를 한번 더 입력해주세요" @input="checkPassword" v-model="user.repassword">
                            <p>{{user.nopassword}}</p>
                        </div>
                        <div class = "input-form">
                            <p>이름(실명)</p>
                            <input type = "text" placeholder="본인의 실명을 입력해주세요" v-model="user.name">
                        </div>
                        <div class = "input-form">
                            <p>생년월일</p>
                            <input type = "text" placeholder="생년월일을 입력해주세요(ex.2000.01.01)" v-model="user.birth">
                            
                        </div>
                        <div class = "input-form">
                            <p>성별</p>
                            <div class="radio">
                                <input type = "radio" id = "man" value = "man" name = "gender" v-model="user.gender">
                                <label for = "man">남자</label>
                            </div>
                            <div class="radio">
                                <input type = "radio" id = "woman" value = "woman" name = "gender" v-model="user.gender">
                                <label for = "woman">여자</label>
                            </div>
                            <div class="radio">
                                <input type = "radio" id = "notgender" value = "notgender" name = "gender" v-model="user.gender">
                                <label for = "manotgendern">비공개</label>
                            </div>
                        </div>
                        <div class = "input-form">
                            <p>Tag팀 코드</p>
                            <input type = "text" placeholder="팀장님께 받은 팀코드를 입력해주세요 " v-model="user.teamcode">
                        </div>
                        <input class = "submit" type="submit" value="회원가입"><!--이거누르면 지금까지 입력한 내용 검사(빠진내용 있는지 확인 후 ) 저장된 변수들 axios로 post -->
                    </form>
                </div>
            </div>
        </div>
    </div>
    <PageFooter/>
</template>
<script>
import PageHeader from '@/components/Header.vue'
import PageFooter from '@/components/Footer.vue'

import {useRouter} from 'vue-router'
const router=useRouter
// const route=useRoute
//const HOST="/SignUp";
// const passwordlen=0

export default {
  components :{
    PageHeader,
    PageFooter,
  },
   data(){
        return {
            user:{
                email:'',
                password:'',
                repassword:'',
                nopassword:'',
                name:'',
                birth:'',
                teamcode:null,
                gender:''
            }
         // /loginto
        }
    },
    methods:{
        // clearAll(){
        //     this.user.email='',
        //     this.user.password='',
        //     this.user.name='',
        //     this.user.birth='',
        //     this.user.teamcode=null,
        //     this.user.gender=''


        // },
        
        submitForm(){
            //여기서 post를 하기 전에 user들에 들어가면 안되는 정보를 뺸다.
            let sendUser={
                email:this.user.email,
                password:this.user.password,
                name:this.user.name,
                birth:this.user.birth,
                teamcode:this.user.teamcode,
                gender:this.user.gender
            }
            const jsonData=JSON.stringify(sendUser);
            this.$axios.post("/api/login2",jsonData,{headers:{
                    'Content-Type':'application/json'
                }})
            .then((res)=>{
                console.log(res);
                console.log("post로 데이터 전송 완료");
                router.push("/")
                // this.clearAll();
            })
            .catch((error)=>{
                console.log(this.user.email)
                console.log(error)
            })
        },
        checkPassword(){
            if(this.user.repassword != this.user.password){
                this.user.nopassword='❌'
            }
            else{
                this.user.nopassword='⭕'
            }
            
        }
        

            
       
    }
};
</script>

<style scoped>
  #SignUp{
    width : 100%;
    height: 1400px;
    background-color: #F2F2F2;
}
.signup-content{
    padding-top: 100px;
}
.menu-title-wrapper {
    text-align: center;
}

.menu-title {
    font-size: 40px;
}
.content{
    width : 850px;
    height : 800px;
    background-color: white;
    margin: 0 auto;
    padding : 80px;
}
.content h2{
    font-size : 25px;
    font-weight: bold;
    margin-bottom: 60px;
}
.input-form{
    display : flex;
    width : 100%;
    height: 40px;
    border-bottom: 2px solid #dddddd;
    margin-bottom: 30px;
}
.input-form p{
    margin-right: 60px;
    margin-top : 6px;
    font-size: 15px;
    font-weight: bold;
    width: 100px;
}
.input-form input{
    width: 400px;
    height: 30px;
    font-size: 15px;
    border-radius: 8px;
    border: 0.5px solid white;
}
.submit{
    background-color: #008D39;
    color: white;
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 25px;
    font-size: 20px;
}
.radio{
    display: flex;
    margin-right: 40px;
}
.input-form .radio input{
    width: 25px;
}
.input-form .radio label{
    margin-top:5px ;
}
/* join.css */

/* 생년월일 입력 폼 스타일 */
.bir_wrap {
    display: flex;
    align-items: center;
  }
  
  .bir_yy,
  .bir_mm,
  .bir_dd {
    margin-right: 10px;
  }
  
  /* 입력 폼 년, 월, 일 select 스타일 */
  .sel {
    width: 80px;
    height: 30px;
    border-radius: 8px;
    border: 0.5px solid #dddddd;
    font-size: 15px;
    padding-left: 5px;
  }
  
  /* 입력 폼 일 input 스타일 */
  .int {
    width: 80px;
    height: 30px;
    border-radius: 8px;
    border: 0.5px solid #dddddd;
    font-size: 15px;
    padding-left: 5px;
  }
  
</style>