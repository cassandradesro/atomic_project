'use strict';

var router = new VueRouter({
	routes: [{ path: '/home', component: HomeComponent }, { path: '/shop', component: ShopComponent }, { path: '/buy', component: BuyComponent }]
});

var app = new Vue({
	el: "#app",
	router: router,
	data: {
		username: localStorage.getItem("username"),
		seconds: 20,
		status: [],
		localtimeleft: 0
	},
	created: function created() {},
	methods: {}
});
//# sourceMappingURL=main.js.map
