import { createRouter, createWebHistory } from 'vue-router'
import EditData from '../components/pages/EditData.vue'
import HomePage from '../components/pages/HomePage.vue'
import PokemonOverview from '../components/pages/PokemonOverview.vue'

const routes = [
    {
        name: "Home Page",
        path: "/",
        component: HomePage
    },
    {
        name: "Edit data",
        path: "/edit",
        component: EditData
    },
    {
        name: "Pokemon overview",
        path: "/pokemons",
        component: PokemonOverview
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;