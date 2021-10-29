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
				path: "/create-product",
				name:"createproduct",
				component: ()=> import ("./views/Products/CreateProduct")
			},
			{
				path: "/product-list",
				name: "productlist",
				component: ()=> import ("./views/Products/ProductList")
			},
			{
				path:"/merchant",
				name : "Merchant Profile View",
				component : ()=>import ("./views/Merchant")
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
				path: "/auth/logout",
				name: "logout",
				component: ()=> import("./views/Logout")
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
