import Vue from "vue"
import Router from "vue-router"
import Show from "./components/Show.vue"
import Memos from "./components/Memos.vue"
import Add from "./components/Add.vue"

Vue.use(Router)

const routes = [
  {
    path: "*",
    redirect: "/memos"
  },
  {
    path: "/memos",
    component: Memos
  },
  {
    path: "/memos/add",
    component: Add
  },
  {
    path: "/memos/:id",
    component: Show,
    props: true
  }
]

export default new Router({
  mode: "history",
  routes: routes
})
