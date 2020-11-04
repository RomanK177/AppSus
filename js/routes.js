import homePage from "./pages/home-page.cmp.js";
import notesApp from './pages/notes-app.cmp.js'
import mailApp from './pages/mail-app.cmp.js'

const myRoutes = [{
        path: "/",
        component: homePage,
    },
    {
        path: '/notes',
        component: notesApp
    },
    {
        path: '/mail',
        component: mailApp
    },
];

export const myRouter = new VueRouter({ routes: myRoutes });