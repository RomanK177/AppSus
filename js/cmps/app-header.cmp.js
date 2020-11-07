export default {
    template: `
    <!-- <header class="app-header">
         <user-msg/> -->
        <!-- <div class="header-container"> -->
        <!-- <a href="/"> 
            <h1 class="logo">sn<span>app</span></h1>
        </a> -->
        <!-- <h1 class="logo">sn<span>app</span></h1> -->
        <!-- <nav>
            <router-link class="home-nav" to="/" exact>Home</router-link>
            <router-link class="notes-nav" to="/notes" exact>Notes App</router-link>
            <router-link class="mail-nav" to="/mail" exact>Mail App</router-link> -->
            <!-- <router-link to="/about">About Us</router-link> -->
        <!-- </nav>   
        </div>     
    </header> --> 
    <header class="app-container">
    <a href="/"> 
            <h1 class="logo">sn<span>app</span></h1>
        </a>
        <ul class="main-nav"  >
            <li><router-link class="home-nav" to="/" exact>Home</router-link></li>
            <li><router-link class="notes-nav" to="/notes" exact>Notes App</router-link></li>
            <li><router-link class="mail-nav" to="/mail" exact>Mail App</router-link></li>
        </ul>
        <ul class="mobile-nav" v-if="isShown" >
            <li><router-link class="home-nav" to="/" exact>Home</router-link></li>
            <li><router-link class="notes-nav" to="/notes" exact>Notes App</router-link></li>
            <li><router-link class="mail-nav" to="/mail" exact>Mail App</router-link></li>
        </ul>
        <div class="btn-menu-mobile" @click="toggleShowMenu()"><img class="menubtn-img"
                src="assets/imgs/menu.svg"></div>
        <!-- <div class="content">
            <div class=top-bar>
                <div class="navigation-icon" v-if="mobileView">
                    <img class="menu-img" src="assets/imgs/menu.svg">
                 </div>
                 <ul class="main-nav" v-if="!mobileView">
                    <li><router-link class="home-nav" to="/" exact>Home</router-link></li>
                     <li><router-link class="notes-nav" to="/notes" exact>Notes App</router-link></li>
                     <li><router-link class="mail-nav" to="/mail" exact>Mail App</router-link></li>
                 </ul>
              <button class="btn-menu-mobile" v-class="{shown: isShown}" @click="toggleShowMenu()"><img class="menubtn-img"
                src="assets/imgs/menu.svg"></button> -->
            <!-- </div>
        </div>  -->
                
    </header>
    `,
    data() {
        return {
            isShown: false,
        }
    },
    methods: {
        showMenu() {
            document.querySelector('.main-nav').classList.toggle('show');
        },
        toggleShowMenu() {
            this.isShown = !this.isShown
        },


    },

}