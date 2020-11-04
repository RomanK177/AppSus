import homePage from "./pages/home-page.cmp.js";
import notesApp from './apps/note/pages/note-app.cmp'
import mailApp from './apps/mail/pages/mail-app.cmp'

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