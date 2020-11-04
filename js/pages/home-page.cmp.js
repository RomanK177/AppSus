// import { myRouter } from "../routes.js";
// import mailApp from '../pages/mail-app.cmp.js';
export default {
    // router: myRouter,
    template: `
    <section class="homepage">
        <div class="homepage-txt">
            <h1>Welcome to the Home Page!</h1>
            <p>Your favorite new app- that holds a mail app, a notes app, and even a book store!</p>
            <router-link to="/notes" >Notes App</router-link>
            <router-link to="/mail" >Mail App</router-link>


            <router-view></router-view>
            <p>Enjoy!</p>
        </div>
    </section>
    `,
};