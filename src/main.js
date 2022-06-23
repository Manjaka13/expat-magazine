import Vue from "vue";
import VueRouter from "vue-router";
import "@/helpers/icons.js";
import "@/styles/index.scss";
import store from "@/store";
import VueLazyLoad from "vue-lazyload";
import routes from "./routes.js";
import App from "@/layouts/App.vue";

/*
	Entry point
*/

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueLazyLoad, {
	preLoad: 1.3,
	loading: "/assets/loading.jpg",
	error: "/assets/error.jpg"
});

const router = new VueRouter({
	routes,
	linkActiveClass: "active",
	mode: "history"
});

new Vue({
	render: (h) => h(App),
	store,
	router,
}).$mount("#app");
