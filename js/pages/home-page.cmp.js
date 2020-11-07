// import { myRouter } from "../routes.js";
// import mailApp from '../pages/mail-app.cmp.js';
export default {
    // router: myRouter,
    template: `
    <section class="homepage">
        <div class="homepage-txt">
            <h1>Welcome to Snapp, Your Favorite App!</h1>
            <p>Welcome to snapp- your new favorite app! Your emails and notes are available to you with the snap of finger!</p>
            <router-link to="/notes">
                <img class="notes-icon" src="assets/imgs/note2.svg" />
                <h2>Notes</h2>
            </router-link>
            <router-link to="/mail" >
                <img class="mail-icon" src="assets/imgs/email1.svg" />
                <h2>Mail</h2>

            </router-link>
            
            <router-view></router-view>
        </div>
    </section>
    `,
};