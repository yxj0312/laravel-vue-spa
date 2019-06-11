import Logo from './components/Logo';
import LogoSymbol from './components/LogoSymbol';
import Colors from './components/Colors';
import Typography from './components/Typography';
import Mascot from './components/Mascot';
import Illustrations from './components/Illustrations';
import Wallpapers from './components/Wallpapers';
import SiteStats from './components/SiteStats';
import NotFound from './components/NotFound';
import Achievements from './components/Achievements';
import Ep1 from './components/practical_vue_components/Ep1';
import Ep2 from './components/practical_vue_components/Ep2';
import Ep3 from './components/practical_vue_components/Ep3';
import Ep4 from './components/practical_vue_components/Ep4';
import Ep5 from './components/practical_vue_components/Ep5';

let LoadersAndAnimations = () =>
    import(/* webpackChunkName: "loaders-and-animations.bundle" */ './components/LoadersAndAnimations');

export default {
    mode: 'history',

    linkActiveClass: 'font-bold',

    routes:[
        {
            path: '*',
            component: NotFound
        },

        {
            path: '/',
            component: Logo
        }, 

        {
            path: '/logo-symbol',
            component: LogoSymbol,
            // name: 'about'
        },

        {
            path: '/colors',
            component: Colors,
        },

        {
            path: '/typography',
            component: Typography
        },

        {
            path: '/mascot',
            component: Mascot
        },

        {
            path: '/illustrations',
            component: Illustrations
        },

        {
            path: '/loaders-and-animations',
            component: LoadersAndAnimations
        },

        {
            path: '/wallpapers',
            component: Wallpapers
        },

        {
            path: '/site-stats',
            component: SiteStats
        },

        {
            path: '/achievements',
            component: Achievements
        },

        {
            path: '/practical_vue_components/ep1',
            component: Ep1
        },

        {
            path: '/practical_vue_components/ep2',
            component: Ep2
        },

        {
            path: '/practical_vue_components/ep3',
            component: Ep3
        },

        {
            path: '/practical_vue_components/ep4',
            component: Ep4
        },

        {
            path: '/practical_vue_components/ep5',
            component: Ep5
        },
    ]
}