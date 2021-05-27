import Vue from "vue";
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue'
import Withdrawal from './views/Withdrawal.vue'
Vue.use(Router);



export default new Router({
  mode: "history",
  routes: [
	{
		path: "/",
		name: "index",
		component: ()=> import("./views/Home")
	},
	{
		path: "/login",
		name: "login",
		component: ()=> import("./views/Login")
	},
	{
		path: "/signup",
		name: "signup",
		component: ()=> import("./views/Signup")
	},
	{
		path: "/forgot-password",
		name: "forgot-password",
		component: ()=> import("./views/ForgotPassword")
	},
	{
		path: "/initial",
		redirect: "/dashboard",
		component: () => import("@/layouts/DashboardLayout"),
		children: [
			{
				path: "/dashboard",
				name: "dashboard",
				components: { default: Dashboard},
			},{
				path: "/withdraw",
				name: "withdraw",
				components: { default: Withdrawal},
			}
		]
	}
  ]
});
