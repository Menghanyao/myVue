<template>
  <div class="login">

    <div class="container">

      <form class="form-signin">
        <h2 class="form-signin-heading">在此登录</h2>
        
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="您的id" required autofocus v-model="user.id">

        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="您的密码" required v-model="user.password">
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="userLogin">Start！！</button>
        <br>
        <router-link to='/registry'>没有账户？去注册</router-link>

      </form>

    </div> <!-- /container -->


















  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user:{
        name:'',
        gender:'',
        phone:'',
        password:'',
        type:'',
        id:''
      },
      confirm:'',
      type:'',
    }
  },
  methods:{
    userLogin(e){

      //alert(this.user);
      //console.log(this.user);
      if (!this.user.id||!this.user.password) {
      alert("请把信息补充完整！");
     }
     else {
       this.$http.get("http://localhost:3000/users/"+this.user.id)
       .then(function(result){
          this.confirm=result.body.password;
          this.type=result.body.type;
          if (this.type=='车主') {
            this.type='owner';
          }
            else if (this.type=='保险公司') {
              this.type='company';
            }
              else if (this.type=='交警') {
                this.type='police';
              }

          console.log('1'+this.confirm);

          console.log('2'+this.user.password);
          console.log('3'+this.confirm);
          console.log('4'+this.type);

         if(this.user.password===this.confirm){
            alert("登录成功！");

            this.$router.push({path:'/'+this.type+'/'+this.user.id});
            //this.$router.push({path:"/",query:{}})


         }
          else{
            alert("密码输入错误");
          }

        });//取回密码

     }
     
   
    e.preventDefault();
  },
  


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
  padding-top: 20px;
  color: #42b983;
}

form{
  width: 300px;
  margin: 10px auto;

}

</style>
