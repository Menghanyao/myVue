<template>
  <div class="customers container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">用户管理系统</h1>
    <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">
    <hr>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th>完整度</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="customer in filterBy(customers,filterInput)" v-rainbow>
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td v-if="customer.education&&customer.graduationschool&&customer.profession&&customer.profile">√</td>
          <td v-if="!(customer.education&&customer.graduationschool&&customer.profession&&customer.profile)">待完善</td>

          <td><router-link class="btn btn-defaule" v-bind:to="'/customer/'+customer.id">详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Alert from './Alert'
export default {
  name: 'customers',
  data () {
    return {
      customers:[],
      alert:"",
      filterInput:"",
    }
  },
  methods:{
    fetchCustomers(){
      this.$http.get("http://localhost:3000/users")
      .then(function(response){
        //console.log(response);
        this.customers=response.body;
      })
    },
    filterBy(customers,filterInput){
      var value=filterInput;
      return customers.filter(function(customer){
        
        if (customer.name.match(value)) {
          return customer.name.match(value);
        } 
        else if (customer.phone.match(value)) {
          return customer.phone.match(value)
        }
        else if (customer.email.match(value)) {
         return customer.email.match(value)
        }


      })
    }
  },
  created(){
    if (this.$route.query.alert) {
      this.alert=this.$route.query.alert;
    }
    this.fetchCustomers();
  },
  updated(){

  },
  components:{
    Alert,
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
