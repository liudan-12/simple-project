
import Home from '../views/Home.vue'
import Share from '../views/Share.vue'
import Infos from '../views/Infos.vue'
const Carousel = [
    {
        path: '/index/home',
        name: "home",
        component: Home,
    },
    {
        path: '/index/share',
        name: "share",
        component: Share,
    },
    {
        path: '/index/infos',
        name: "infos",
        component: Infos,
    }
]
export default Carousel