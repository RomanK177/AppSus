import userMsg from './user-msg.cmp.js'

export default {
    template: `
    <header class="app-container">
    <user-msg/>
        <router-link to="/">
            <h1 class="logo">sn<span>app</span></h1>
            </router-link>
        <ul class="main-nav"  >
            <li><router-link class="home-nav" to="/" exact>Home</router-link></li>
            <li><router-link class="notes-nav" to="/notes" exact>Notes</router-link></li>
            <li><router-link class="mail-nav" to="/mail" exact>Mail</router-link></li>
        </ul>
        <ul class="mobile-nav" v-if="isShown" >
            <li><router-link class="home-nav" to="/" exact>Home</router-link></li>
            <li><router-link class="notes-nav" to="/notes" exact>Notes</router-link></li>
            <li><router-link class="mail-nav" to="/mail" exact>Mail</router-link></li>
        </ul>
        <div class="btn-menu-mobile" @click="toggleShowMenu()"><img class="menubtn-img"
                src="assets/imgs/menu.svg"></div>
  
                
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
    components: {
        userMsg,
    }

}