import {HOME_URL, LOGIN_URL} from "@/config";

export const staticRouter = [
    {
        path: "/",
        redirect: HOME_URL
    },
    {
        path: LOGIN_URL,
        name: "login",
        component: () => import("@/views/login/index.vue"),
        meta: {
            title: "登录"
        }
    },
    {
        path: "/hello",
        name: "hello",
        component: () => import("@/components/HelloWorld.vue"),
        meta: {
            title: "Hello"
        }
    }
]

export const errorRouter = [

]