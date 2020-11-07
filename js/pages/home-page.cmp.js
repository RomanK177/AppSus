// import { myRouter } from "../routes.js";
// import mailApp from '../pages/mail-app.cmp.js';
export default {
    // router: myRouter,
    template: `
    <section class="homepage">
        <div class="homepage-txt">
            <h1>Welcome to the Home Page!</h1>
            <p>Welcome to snapp- your new favorite app! Your emails and notes are available to you with the snap of finger!</p>
            <router-link to="/notes">
        <img class="mail-icon" src="assets/imgs/note2.svg" />
        </router-link>
            <router-link to="/mail" >
            <img class="mail-icon" src="assets/imgs/email1.svg" />
        </router-link>

            <router-view></router-view>
            <p>Enjoy!</p>
        </div>
    </section>
    `,
};