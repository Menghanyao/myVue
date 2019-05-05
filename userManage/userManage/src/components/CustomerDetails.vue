<template>
  <div class="details container">
    <router-link to="/" class="btn btn-default">返回主页</router-link>
    <h1 class="page-header">{{customers.name}}
      <span class="pull-right">
        <router-link class="btn btn-default" v-bind:to="'/edit/'+customers.id">编辑</router-link>
        <button class="btn btn-default" @click="deleteCustomer(customers.id)">删除</button>
      </span>
    </h1>

    <ul class="list-group">
      <li class="list-group-item">电话：
        <span class="glyphicon glyphicon-phone">&nbsp;{{customers.phone}}</span>
      </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">邮箱：
        <span class="glyphicon glyphicon-envelope">&nbsp;{{customers.email}}</span>
      </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">学历：
        <span class="glyphicon glyphicon-education">&nbsp;{{customers.education}}</span>
      </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">毕业院校：
        <span class="glyphicon glyphicon-stats">&nbsp;{{customers.graduationschool}}</span>
      </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">职业：
        <span class="glyphicon glyphicon-jpy">&nbsp;{{customers.profession}}</span>
      </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">个人简介：
        <span class="glyphicon glyphicon-modal-window">&nbsp;{{customers.profile}}</span>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'customerdetails',
  data () {
    return {
      customer:"",
      customers:[],
    }
  },
  methods:{
    fetchCustomers(id){
      this.$http.get("http://localhost:3000/users/"+id)
      .then(function(response){
        //console.log(response);
        this.customers=response.body;

      })
    },
    deleteCustomer(id){
     // console.log(id);
     this.$http.delete("http://localhost:3000/users/"+id)
     .then(function(response){
      this.$router.push({path:"/",query:{alert:"用户列表已更新！"}});
     })
    },
  },
  created(){
    this.fetchCustomers(this.$route.params.id);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
