<template>
	<div id="single-blog">
		<h1>{{blog.title}}</h1>
		<p>正文：</p>
		<article>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {{blog.content}}</article>
		<hr>
		<p>作者：{{blog.author}}</p>
		<hr>
		<p>分类：</p>
		<ul>
			<li v-for="category in blog.categories">
				{{category}}
			</li>
		</ul>
		<button @click="deleteSingleBlog()">删除博客</button>
		<router-link :to="'/edit/'+id" class="editbutton">编辑博客</router-link>
	</div>
</template>

<script>
	export default{
		name:"single-blog",
		data(){
			return {
				id:this.$route.params.id,
				blog:{}
			}
		},
		created(){
			
			//https://jsonplaceholder.typicode.com/posts/
			this.$http.get('https://vue-myblog-532f5.firebaseio.com/posts/'+this.id+'.json')
			.then(function(data){
				//console.log(data);
				//this.blog=data.body;
				return data.json();
			})
			.then(function(data){
				this.blog=data;
			})
		},
		methods:{
			deleteSingleBlog(){
				this.$http.delete('https://vue-myblog-532f5.firebaseio.com/posts/'+this.id+'.json').then(
					response =>{
					this.$router.push({path:'/'})
				},alert("删除博客成功！"))
			},
		},
	}
</script>
<style>
	#single-blog{
		max-width: 960px;
		margin: 0 auto;
		padding: 20px;
		background: #eee;
		border:1px dotted #aaa;
	}
button{
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border:0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;


}
.editbutton{
  width: 72px;
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border:0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
	text-decoration: none;

}

</style>