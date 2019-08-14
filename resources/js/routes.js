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
import Ep6 from './components/practical_vue_components/Ep6';
import Ep7 from './components/practical_vue_components/Ep7';
import Ep36 from './components/whatcha_working_on/Ep36';
import Ep38 from './components/whatcha_working_on/Ep38';
import Ep21 from './components/whatcha_working_on/Ep21';
import Ep23 from './components/vuextodo/Ep23';
import NestVueSlot from './components/vue_knowhow/NestVueSlot';

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

        {
            path: '/practical_vue_components/ep6',
            component: Ep6
        },

        {
            path: '/practical_vue_components/ep7',
            component: Ep7
        },

        {
            path: '/whatcha_working_on/ep36',
            component: Ep36
        },

        {
            path: '/whatcha_working_on/ep38',
            component: Ep38
        },

        {
            path: '/whatcha_working_on/ep21',
            component: Ep21
        },

        {
            path: '/vuextodo/ep23',
            component: Ep23
        },

        {
            path: '/vue-knowhow/nest-vue-slot',
            component: NestVueSlot
        },
    ]
}
