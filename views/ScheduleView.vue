<template>
  <PageHeader/>
  <div class="Schedule">
    <div class="Schedule-Content">
      <h1>&#60; 일정 &#47;&#62;</h1>
      <div class="calendar-box">
        <div class="calendar">
          <!-- 이전 달 화살표 -->
          <div class="arrow-two ">
            <i class="fa-solid fa-angle-left"  @click="changeMonth(-1)"></i>
            
            <h2>{{ getMonthName(month) }}</h2>
            <!-- 다음 달 화살표 -->
            <i class="fa-solid fa-chevron-right"  @click="changeMonth(1)"></i>
          </div>
          
          <table>
            <thead>
              <tr>
                <td v-for="day in daysOfWeek" :key="day">{{ day }}</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="week in getWeeks(month,year)" :key="week">
                <td v-for="date in getDates(month,year,week)" :key="date">
                <span :class="getDateClass(date)">{{ getDateContent(date) }}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="addEvent gradient01" >
          <ul v-for="event in eventday" :key="event">
            <li>
              <span>{{event.name}}</span> <span>{{parseEventDays(event.days)}}</span>
              
            </li>
          </ul>
        </div>
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
  data(){
    return{
      year:new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      daysOfWeek:["일", "월", "화", "수", "목", "금", "토"],
      eventday:[{name:'회식',days:'2023-7-14'},{name:'해커톤',days:'2023-7-31~2023-8-1'},
      {name:"개강",days:'2023-8-28'},
      {name:"추석 연휴",days:'2023-9-28~2023-9-30'}]
    };
  },
  methods:{
     getDateContent(date) {
    if (date === null) return '';

    const day = new Date(this.year, this.month - 1, date).getDate();
    const dateString = `${this.year}-${this.month}-${day}`;

    const event = this.eventday.find((item) => {
      if (item.days.includes('~')) {
        const [startDate, endDate] = item.days.split('~');
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);
        const currentDateObj = new Date(dateString);
        return currentDateObj >= startDateObj && currentDateObj <= endDateObj;
      } else {
        return item.days === dateString;
      }
    });

    if (event) {
      // 이벤트가 있는 날이면 이벤트 이름과 날짜를 함께 반환
      return `${day}일 ${event.name} `;
    } else {
      // 이벤트가 없는 날은 날짜만 반환
      return day;
    }
  },
  getDateClass(date) {
    const day = new Date(this.year, this.month - 1, date).getDate();
    const dateString = `${this.year}-${this.month}-${day}`;

    const event = this.eventday.find((item) => {
      if (item.days.includes('~')) {
        const [startDate, endDate] = item.days.split('~');
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);
        const currentDateObj = new Date(dateString);
        return currentDateObj >= startDateObj && currentDateObj <= endDateObj;
      } else {
        return item.days === dateString;
      }
    });

    return event ? 'event-date' : 'regular-date';
  },
    getMonthName(month){
      const months=["1월","2월","3월","4월","5월","6월","7월","8월","9월"
      ,"10월","11월","12월"];
      return months[month -1]; //12월 달라고 하면 12-1인 11번 인덱스의 값을 줘야함 
    },
    getWeeks(month,year){
      const firstDay = new Date(year,month-1,1).getDay();//해당 달의 첫번째 요일 숫자로 반환
      //->일:0, 월:1, 화:2 ,수:3...토:6
      const daysInMonth=new Date(year,month,0).getDate();//몇일 있는지 불러옴(31일)
      return Math.ceil((firstDay+daysInMonth)/7) //ceil: 반올림
    },
    getDates(month, year, week) {
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const start = (week - 1) * 7 - firstDay + 1;
  const end = Math.min(start + 7, daysInMonth + 1);

  const dates = [];
  for (let i = start; i < end; i++) {
    dates.push(i > 0 ? i : null);
  }

  return dates;
},

    
      // 올바른 요일에 맞추어 배열을 반환
  
      //array.from: 주어진 길이만큼 배열만듬, 콜백함수로 배열 요소 생성 
      //start를 시작으로 end-start길이 만큼의 배열을 만듬 
      //각 요소는 해당 인덱스에 start를 더한 값으로 생성됨 이렇게 생성된 배열을 해당 주차에 하단하는 날짜를 담음
  
  changeMonth(offset){
    const currentMonth = this.month;
    const currentYear=this.year;
    const newMonth=currentMonth+offset;
    if(newMonth <1){
      this.year=currentYear-1;
      this.month=12;
    }
    else if(newMonth > 12){
      this.year=currentYear+1;
      this.month=1
    }
    else{
      this.month=newMonth;
    }
  },
   parseEventDays(days) {
      if (days.includes('~')) {
        const [startDate, endDate] = days.split('~');
        const [startYear, startMonth, startDay] = startDate.split('-');
        const [endYear, endMonth, endDay] = endDate.split('-');

        if (startMonth === endMonth && startYear === endYear) {
          // 시작일과 종료일의 달과 년도가 같은 경우
          return `${parseInt(startMonth)}월 ${parseInt(startDay)}일~${parseInt(startMonth)}월 ${parseInt(endDay)}일까지`;
        } else {
          // 달과 년도가 다른 경우
          return `${parseInt(startMonth)}월 ${parseInt(startDay)}일~ ${parseInt(endMonth)}월 ${parseInt(endDay)}일까지`;
        }
      } else {
        // 단일 날짜인 경우
        const [year,month, day] = days.split('-');
        year==0
        return `${parseInt(month)}월 ${parseInt(day)}일`;
      }
    },
  },
};
/**
 * 달력 표시 
 * 1. date 내장객체 가져와서 1년에 있는 달(month) 가지고옴
 * 2. 현재 달 가지고 옴,해당 달로 이동해서 달이 몇일까지 있는지, 처음 시작 요일을 가지고 옴
 * 3. 현재 달 화면 출력 
 * 4.화살표 추가 
 * 저번달 클릭(다음달)
 * 요번달 -1 한 month를 가지고 온다 (이후 달력 표시와 같게 해당 달의 요일, 날짜로 박스 출력 )
 * 
 * 일정 표시 
 * 특정 색상, 날짜, 이벤트 이름 출력 
 * 
 * 일정추가(요거 그냥 우리가 fix하는게 좋을거 같음 )
 * 시작일 ,종료일 입력 받음 , 색상 부여 

 */
</script>

<style scoped>
    .Schedule{padding-top: 100px;

      background-color: #F2F2F2;
      width : 100%;
      height: 1300px;
    }
    
  
    .calendar-box{
      margin-top: 30px;
      display: flex;
    }
    .calendar{
      border-radius: 20px 0px 0px 20px;
      width: 50vw; height: 65vh;
      margin-left: 15vw;
      background-color: rgb(255, 255, 255);  
    }

  
    .arrow-two{
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      margin-top: 15px;
    }
    .arrow-two h2{
      display: inline-block;
      width: 10vw;
    }
    table{
      font-size: 30px;
      margin: auto;
      margin-top: 3vh;
      justify-content: center;
      align-content: center;
      
    }
    td{
      width: 90px;
      height: 50px;
    }
    .event-date {
    /* 이벤트 날짜에 대한 스타일을 지정하세요. 예: 이벤트 날짜는 굵은 글꼴(bold)로 표시 */
      font-weight: bold;
      font-size: 16px;
      color: rgb(120, 118, 118); /* 예: 이벤트 날짜는 빨간색으로 표시 */
    }

  .regular-date {
    /* 일반 날짜에 대한 스타일을 지정하세요. 예: 일반 날짜는 기본 글꼴(normal)로 표시 */
    font-weight: normal;
    
    color: black; /* 예: 일반 날짜는 검정색으로 표시 */
  }
  
  ul{
    width:30vw;
    /* height:vh; */
    padding:0px;
    font-size: 20px;
    /* margin-bottom: 10px; */
    margin-left: 0px;
    align-content: center;
    
    /* background-color:turquoise; */
  }

    .addEvent{
      width: 20vw; height: 65vh;
      margin-right: 5vw;
      background-color: rgb(235, 235, 231);
      border-radius: 0px 20px 20px 0px;

    }
    .addEvent li{
      line-height: 20px;
      list-style: none;
      float: left;
      margin-top: 20px;
    }
    .addEvent li:first-child{
      width: 18vw;
      
      
    }
    .addEvent span{
      display: inline-block;
      width: 200px;
      border-radius: 8px;
      font-size: 17px;
    
    }
  .addEvent span:first-child{
    width: 190px;
    background-color: white;
  }
  .addEvent span:last-child{
    margin-top: 10px;
    margin-left: 10px;
    text-align: center;
  }
  .gradient01{  background : linear-gradient(to left, #b8ceef 0%, #C0F5FB 100%);}
</style>