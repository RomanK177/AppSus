import homePage from './pages/home-page.cmp.js'
import noteApp from './apps/note/pages/note-app.cmp.js'
import mailApp from './apps/mail/pages/mail-app.cmp.js'
import composeMail from './apps/mail/pages/compose-mail.cmp.js'

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
    {
        path: '/mail/compose',
        component: composeMail
    },
];

export const myRouter = new VueRouter({ routes: myRoutes });