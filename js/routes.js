<<<<<<< HEAD
import homePage from "./pages/home-page.cmp.js";
import notesApp from './apps/note/pages/note-app.cmp'
import mailApp from './apps/mail/pages/mail-app.cmp'
=======
import homePage from './pages/home-page.cmp.js'
import noteApp from './apps/note/pages/note-app.cmp.js'
import mailApp from './apps/mail/pages/mail-app.cmp.js'
>>>>>>> 5d7bf5e1dcc63147bdb205cd3737cd9dbe75f310

const myRoutes = [{
        path: "/",
        component: homePage,
    },
    {
        path: '/notes',
        component: noteApp
    },
    {
        path: '/mail',
        component: mailApp
    },
];

export const myRouter = new VueRouter({ routes: myRoutes });