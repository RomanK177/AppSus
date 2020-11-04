export default {
    template: `
    <header class="app-header">
        <user-msg/>
        <h1>AppSus</h1>
        <nav>
            <router-link to="/" exact>Home</router-link>|
            <router-link to="/notes" exact>Notes App</router-link>|
            <router-link to="/mail" exact>Mail App</router-link>|
            <!-- <router-link to="/about">About Us</router-link> -->
        </nav>        
    </header>
    `,
    components: {
        // userMsg,
    }
}