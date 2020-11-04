import { myRouter } from "./routes.js";
const options = {
    el: "#app",
    router: myRouter,
    template: `
        <section>
            <!-- <app-header /> -->
            <main>
        
                    <router-view></router-view>
               
            </main>
           
        </section>
    `,
    created() {
        // eventBus.$on('carDeleted', () => {
        //     console.log('deletedddddd');
        // })
    },
    destroyed() {
        // eventBus.$off('carDeleted', () => {
        //     console.log('deletedddddd');
        // })
    },
    components: {},
};

const app = new Vue(options);