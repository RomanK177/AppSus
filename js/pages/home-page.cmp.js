// import { myRouter } from "../routes.js";
export default {
    // router: myRouter,
    template: `
    <section class="homepage">
        <div class="homepage-txt">
            <h1>Welcome to the Home Page!</h1>
            <p>Your favorite new book app! Where you can find books in our library, read about them, rate them, and buy them!</p>
            <router-link to="/notes" >Notes App</router-link>
            <!-- <router-view></router-view> -->
            <p>Enjoy!</p>
        </div>
    </section>
    `,
};