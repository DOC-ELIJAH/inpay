import Vue from "vue";
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue'
import Withdrawal from './views/Withdrawal.vue'
import Merchant from './views/Merchant.vue'
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
			},
			{
				path: "/merchant-profile",
				name: "merchantprofile",
				component: ()=> import("./views/MerchantProfile"),
			},
			{
				path: "/merchant",
				name: "merchant",
				component: ()=>import("./views/MerchantProfile"),
				
			}
		]
	},
	{	
		path: "/auth",
		component:() => import("@/layouts/AuthLayout"),
		children:[
			{
				path: "/auth/login",
				name: "login",
				component: ()=> import("./views/Login"),
				meta: {
					disableIfLoggedIn: true
				}
			},
			{
				path: "/auth/signup",
				name: "signup",
				component: ()=> import("./views/Signup"),
				meta: {
					disableIfLoggedIn: true
				}
			},
			{
				path: "/auth/otp",
				name: "otp",
				component: ()=> import("./views/Otp"),
				meta: {
					disableIfLoggedIn: true
				}
			},
			{
				path: "/forgot-password",
				name: "forgot-password",
				component: ()=> import("./views/ForgotPassword")
			},
			{
				path: "/auth/reset-password",
				name: "reset-password",
				component: ()=> import("./views/ResetPassword")
			},
			{
				path: "/auth/account-confirm/:token",
				name: "account-confirmation",
				component: ()=> import("./views/AccountConfirmation")
			}
		]
	},
  ]
});
