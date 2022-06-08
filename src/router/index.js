import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const routes = [
  {
    path: "/",
    name: "Landing",
    component: LoginView, 
  },
  {
    path: "/Home",
    name: "Home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
function UserIsLoggedIn(){
  var user = firebase.auth().currentUser;

if (user) {
 return true;
} 
return false
}
router.beforeEach( async (to, from, next)=>{
    if(UserIsLoggedIn()) next({name: 'Landing'})
    else next()
}
)

export default router;
