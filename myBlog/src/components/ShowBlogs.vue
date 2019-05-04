<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">

    <div class="single-blog" v-for="blog in filteredBlogs" >
    	<router-link v-bind:to="'/blog/'+blog.id">
    		<h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
   		 

    	<article>{{blog.content | snippet}}</article>
    	</router-link>
    </div>

  </div>

</template>

<script>

export default {

  name: 'show-blogs',

  data(){
  	return{
  		blogs:[],
  		search:"",
  	}
  },
  created(){https://jsonplaceholder.typicode.com/posts
  	this.$http.get('https://vue-myblog-532f5.firebaseio.com/posts.json')
  		.then(function(data){
  			//console.log(data.json());
  			return data.json()
  			//this.blogs=data.body.slice(0,10);
  			//console.log(this.blogs);
  	})
  		.then(function(data){
  			var blogsArray=[];
  			for(let key in data){
  				//console.log(key);
  				//console.log(data[key]);
  				data[key].id=key;
  				blogsArray.push(data[key]);
  			}
  			//console.log(blogsArray);
  			this.blogs=blogsArray;
  		});
  },
  computed:{
  	filteredBlogs:function(){
  		return this.blogs.filter((blog)=>{
  			return blog.title.match(this.search);
  		})
  	},
  },
  filters:{
  	"to-uppercase":function(value){
  		return value.toUpperCase();
  	},
  }

}
</script>

<style>
#show-blogs{
	max-width: 800px;
	margin: 0 autp;
}
.single-blog{
	padding: 20px;
	margin: 20px 0;
	box-sizing: border-box;
	background: #ddd;
	border:1px dotted #aaa;
}
#show-blogs a {
	color: #444;
	text-decoration: none;
  }
  input[type="text"]{
  	padding: 8px;
  	width: 100%;
  	box-sizing: border-box;

  }

</style>
