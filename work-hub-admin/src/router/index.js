import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/login",
        name: "登录",
        hidden: true,
        component: () => import("@/views/login/index.vue")
    },
    {
        path: "/home",
        name: "首页",
        hidden: true,
        component: () => import("@/components/HelloWorld.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router


// import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
// import {staticRouter, errorRouter} from "./modules/staticRouter"

// const mode = "hash";

// const routerMode = {
//     hash: () => createWebHashHistory(),
//     history: () => createWebHistory()
// };

// const router = createRouter({
//     history: routerMode[mode](),
//     routes: [...staticRouter, ...errorRouter],
//     strict: false,
    
// });

// router.beforeEach(async (to, from, next) => {
//     next()
// })

// export default router;