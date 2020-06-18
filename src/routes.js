import Home from './views/Home'
import About from './views/About'
import Services from './views/Services'
import Contact from './views/Contact'
import NotFound from './views/NotFound'

export default {
    mode: 'history',

    publicPath: '/',

    linkActiveClass: 'md:text-white md:border-t-2 md:border-white',


    routes: [
        {
            path: '*',
            name: '404',
            component: NotFound
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/services',
            name: 'services',
            component: Services
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
}
