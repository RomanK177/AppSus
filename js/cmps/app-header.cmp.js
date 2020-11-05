export default {
    template: `
    <header class="app-header">
        <!-- <user-msg/> -->
        <h1 class="logo">sn<span>app</span></h1>
        <nav>
            <router-link class="home-nav" to="/" exact>Home</router-link>
            <router-link class="notes-nav" to="/notes" exact>Notes App</router-link>
            <router-link class="mail-nav" to="/mail" exact>Mail App</router-link>
            <!-- <router-link to="/about">About Us</router-link> -->
        </nav>        
    </header>
    `,
    components: {
        // userMsg,
    }
}