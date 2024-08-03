import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import {staticRouter, errorRouter} from "./modules/staticRouter"

const mode = "hash";

const routerMode = {
    hash: () => createWebHashHistory(),
    history: () => createWebHistory()
};

const router = createRouter({
    history: routerMode[mode](),
    routes: [...staticRouter, ...errorRouter],
    strict: false,
    
});

router.beforeEach(async (to, from, next) => {
    next()
})

export default router;