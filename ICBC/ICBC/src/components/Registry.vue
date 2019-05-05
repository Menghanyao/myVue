<template>
  <div class="registry">
    <!-- <h1>注册</h1>
    <form> 
      <div>
        <label>您的姓名：</label>
        <input type="text" v-model="user.name" required="true" placeholder="姓名">
      </div>
      
      <div>
        <label>您的性别：</label>
        男：<input type="radio" v-model="user.gender" required="true" value="男">
        女：<input type="radio" v-model="user.gender" required="true" value="女">
      </div>
      
      <div>
        <label>您的电话:</label>
        <input type="text" v-model="user.phone" required="true" placeholder="电话">
      </div>
      
      <div>
        <label>您的密码:</label>
        <input type="password" v-model="user.password" required="true" placeholder="密码">
      </div>
      
      <div>
        <label>确认密码:</label>
        <input type="password" v-model="confirm" required="true" placeholder="密码">
      </div>
      
      <div>
        <label>用户类型:</label>
        <select v-model="user.type">
        <option v-for="type in types">{{type}}</option>
        </select>
      </div>
      
      <button @click.prevent="addUser">成为新用户</button>
      <br>
      <router-link to="/login">已有账户？去登录</router-link>>
     
    </form> -->


<div class="container">

      <form class="form-signin">
        <h2 class="form-signin-heading">欢迎注册</h2>

        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="您的名字" required autofocus v-model="user.name">

        <div>
        <label>您的性别：</label>
        男：<input type="radio" v-model="user.gender" required="true" value="男">
        女：<input type="radio" v-model="user.gender" required="true" value="女">
      </div>

        <label for="inputPassword" class="sr-only">Password</label>
        <input type="text" id="inputPassword" class="form-control" placeholder="您的电话" required v-model="user.phone">

        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="您的密码" required v-model="user.password">

        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="确认密码" required v-model="confirm">

        <div>
        <label>您的身份:</label>
        <select v-model="user.type">
        <option v-for="type in types">{{type}}</option>
        </select>
        </div>



        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="addUser">成为新用户</button>

        <br>
        <router-link to="/login">已有账户？去登录</router-link>>

      </form>

    </div> <!-- /container -->





  </div>
</template>

<script>
export default {
  name: 'registry',
  data () {
    return {
      user:{
        name:'',
        gender:'',
        phone:'',
        password:'',
        type:''
      },
      confirm:'',
      types:['车主','保险公司','交警']
    }
  },
  methods:{
    addUser(e){
      //alert(this.user);
      //console.log(this.user);
      if (!this.user.name||!this.user.gender||!this.user.phone||!this.user.password||!this.confirm||!this.user.type) {
      alert("请把信息补充完整！");
     }
     else if (this.user.password!=this.confirm) {
      alert("两次密码输入不一致");
     }
     else{
      let newUser={
        name:this.user.name,
        phone:this.user.phone,
        gender:this.user.gender,
        password:this.user.password,
        type:this.user.type,
      }
      this.$http.post("http://localhost:3000/users",newUser)
      .then(function(response){
        console.log(response);
        alert("您的ID是："+response.body.id+"    请牢记!");

        this.$router.push({path:'/login'})
        // alert("信息添加成功！");
        //this.$router.push({path:"/",query:{alert:"用户信息添加成功！"}});
      })
  
    }
    e.preventDefault();
  }
}
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
form{
  width: 300px;
  margin: 10px auto;

}
</style>
