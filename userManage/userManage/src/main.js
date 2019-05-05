// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomerDetails from './components/CustomerDetails'
import Edit from './components/Edit'
// import CustomerDetails from './components/CustomerDetails'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

// 自定义指令：
Vue.directive('rainbow',{
	bind(el,binding,vnode){
		el.style.color="#"+Math.random().toString(16).slice(2,8);
	}
})

const router =new VueRouter({
	mode:"history",
	base:__dirname,
	routes:[
		{path:"/",component:Customers},
		{path:"/about",component:About},
		{path:"/add",component:Add},
		{path:"/Customer/:id",component:CustomerDetails},
		{path:"/edit/:id",component:Edit},



	]
})



/* eslint-disable no-new */
new Vue({
	router,
  //el: '#app',
  // components: { App },
  template: `
  <div id="App">
	    <nav class="navbar navbar-default">
	      <div class="container">
	        <div class="navbar-header">
	          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	            <span class="sr-only">Toggle navigation</span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	          </button>
	          <a class="navbar-brand" href="#">User Management System</a>
	        </div>
	        <div id="navbar" class="collapse navbar-collapse">
	          <ul class="nav navbar-nav">

	            <li><router-link to="/">主页</router-link></li>
	            <li><router-link to="/关于我们">About</router-link></li>

	          </ul>
	        </div><!--/.nav-collapse -->

	        
	          <ul class="nav navbar-nav navbar-right">

	            <li><router-link to="/add">添加用户</router-link></li>
	           
	          </ul>
	        
	      </div>
	    </nav>
	<router-view></router-view>
  </div>`
}).$mount("#app")
