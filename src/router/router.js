import { createRouter, createWebHistory  } from "vue-router"
import ProductList from '../components/ProductList.vue'
import ProductDetails from '../components/ProductDetails.vue'
import NavigationBar from '../components/NavigationBar.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
    {
        path: "/",
        name: "products", 
        components: 
        {
            default: ProductList,
            navbar: NavigationBar
        }
    },
    {
        path: "/product/:id",
        name: "product",
        components: {
            default: ProductDetails,
            navbar: NavigationBar
        }
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        components: {
            default: NotFound,
            navbar: NavigationBar
        }
    }
]

export const router = createRouter({
    history:createWebHistory(),
    routes
})