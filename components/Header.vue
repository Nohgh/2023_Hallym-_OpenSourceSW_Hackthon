<template>
    <header :class= "isHomePage ? 'home-header' : 'default-header'">
        <router-link to='/' class = "header-logo" v-if = "isHomePage">
            <img src = "@/assets/LogoWhite.png">
        </router-link>
        <router-link to='/' class = "header-logo" v-else >
            <img src = "@/assets/LogoBlack.png">
        </router-link>
        <div class = "header-menu">
            <div :class= "isHomePage ? 'home-menu-item' : 'menu-item'" >
                <router-link to='/' >
                    <div :class= "isHomePage ? 'home-menu-icon' :'menu-icon'">
                        <img src = "@/assets/Home.svg" >
                    </div>
                    <span>홈</span>
                </router-link>
            </div>
            <div :class= "isHomePage ? 'home-menu-item' : 'menu-item'">
                <router-link to='/Board'>
                    <div :class= "isHomePage ? 'home-menu-icon' :'menu-icon'">
                        <img src = "@/assets/alarm.svg" >
                    </div>
                    <span>공지</span>
                </router-link>
            </div>
            <div :class= "isHomePage ? 'home-menu-item' : 'menu-item'">
                <router-link to = '/LoadMap'>
                    <div :class= "isHomePage ? 'home-menu-icon' :'menu-icon'">
                        <img src = "@/assets/LoadMap.svg">
                    </div>
                    <span>로드맵</span>
                </router-link>
            </div>

            <div :class= "isHomePage ? 'home-menu-item' : 'menu-item'">
                <router-link to ='/ShowWorks'>
                    <div :class= "isHomePage ? 'home-menu-icon' :'menu-icon'">
                        <i class="fa-solid fa-panorama"></i>
                    </div>
                    <span>작품</span>
                </router-link>
            </div>
            <div :class= "isHomePage ? 'home-menu-item' : 'menu-item'">
                <router-link to = '/Schedule'>
                    <div :class= "isHomePage ? 'home-menu-icon' :'menu-icon'">
                        <i class="fa-solid fa-calendar-days"></i>
                    </div>
                    <span>일정</span>
                </router-link>
            </div>
            <div :class= "isHomePage ? 'home-menu-item' : 'menu-item'">
                <router-link to = '/FrequentlyQuestion'>
                    <div :class= "isHomePage ? 'home-menu-icon' :'menu-icon'">
                        <img src = "@/assets/Q&A.svg">
                    </div>
                    <span>FAQ</span>
                </router-link>
            </div>
        </div>
    </header> 
</template>
<script>

export default{
    name: 'PageHeader',
    computed: {
        isHomePage() {
            // 현재 페이지가 홈 페이지인지 확인
            return this.$route.path === '/';
            },
    },
};
</script>

<style scoped>
/*header.css*/
.header{
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    z-index: 101;
    height: 70px;
}
.home-header{
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    z-index: 101;
    height: 70px;
}
.default-header{
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    z-index: 101;
    height: 70px;
    background-color: white;
}

.header-logo{
    display: flex;
    align-items: center;
    margin : 0 0 0 10px;
}
.header-logo img{
    width : 200px;
    height : 60px;
}

.home-menu-icon i{
    font-size: 25px;
    color : white;
    margin-top: 3px;
    margin-bottom: 7px;
    
}
.home-menu-icon img{
    width:30px;
    height: 30px; 
    filter: brightness(0) invert(1); 
}
.menu-icon i{
    font-size: 25px;
    color : #9F9D9C;
    margin-top: 3px;
    margin-bottom: 7px;
}
.menu-icon img{
    width:30px;
    height: 30px; 
}

.header-menu{
    display : flex;
    padding-top : 5px;
}
.menu-item{
    width: 80px;
    padding: 3px 0px 3px 0px;
    margin-top: 2px;
    margin-bottom: 3px;
    cursor: pointer;
}
.home-menu-item{
    width: 80px;
    padding: 3px 0px 3px 0px;
    margin-top: 2px;
    margin-bottom: 3px;
    cursor: pointer;
}

.home-menu-item span{
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    color: white;
    position: relative;
    font-family: 'Black Han Sans', sans-serif;
}
.menu-item span{
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    color: #9F9D9C;
    position: relative;
    font-family: 'Black Han Sans', sans-serif;
}
a{
    text-decoration: none;
}
</style>
