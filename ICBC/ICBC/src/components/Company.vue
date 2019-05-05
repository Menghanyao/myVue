<template>
	<div class="company">
		<h1>保险公司</h1>
		<div class="welcome">
			<Alert v-bind:message="alert"></Alert>
		</div>
		<div class="container" :class="{showing:one}">
			<div>
				<h2 @click="clickOne">添加保险</h2>
				
				<div v-if="!one" style="width: 250px;margin: auto auto;">
					<br>
					<br>
					<h4>在这里你可以添加车辆信息，以便为其购买保险。</h4>
				</div>
				<div v-if="one">
					<br>
					<form class="form-signin" style="width: 50%">
				        <h2 class="form-signin-heading">在此处添加保险信息</h2><br>

				        <input type="email" id="inputEmail" class="form-control" placeholder="保险编号" required autofocus v-model="insurance.number">
	
				        <input type="text" id="inputPassword" class="form-control" placeholder="保险名称" required v-model="insurance.name">

				        <input type="text" id="inputPassword" class="form-control" placeholder="有效时长(年)" required v-model="insurance.duration">

				        <input type="text" id="inputPassword" class="form-control" placeholder="价格" required v-model="insurance.price">

				        <input type="text" id="inputPassword" class="form-control" placeholder="赔付金额" required v-model="insurance.compensation">
				      
				        <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="addInsurance">点此添加</button>
						
				        <br>				        
				        <button class="btn btn-lg btn-secondary btn-block" @click.prevent="clickOne">返回</button>

     				 </form>

				</div>

			</div>
		</div>
		<div class="container" :class="{showing:two}">
			<div>
				<h2 @click="clickTwo">所有保险</h2>

				<div v-if="!two" style="width: 250px;margin: auto auto;">
					<br>
					<br>
					<h4>在这里你可以查看公司的所有保险方案</h4>
				</div>

				<div v-if="two">
				 <div style="background-color: #ddd;width: 70%;margin: 30px auto;">
					<table class="table table-striped">
					    <thead>
					        <tr>
					          <!-- <th>系统识别号</th> -->
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保险序号</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保险名称</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有效时长（年）</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;售卖价格</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;赔付金额</th>
							  <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保险状态</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
					        </tr>
					      </thead>

					      <tbody>
					        <tr v-for="item in insurances" v-rainbow>
					          <!-- <td>{{item.id}}</td> -->
					          <td>{{item.number}}</td>
					          <td>{{item.name}}</td>
					          <td>{{item.duration}}</td>
					          <td>{{item.price}}</td>
					          <td>{{item.compensation}}</td>
					          <td>{{item.state}}</td>
							  <td v-if="item.state=='在售'"><button @click="invalid(item)" class="btn btn-defaule btn-primary btn-block">下架</button></td>
							  <td v-if="item.state=='已下架'"><button @click="valid(item)" class="btn btn-defaule btn-primary btn-block">继续售卖</button></td>

					          <!-- <td v-if="item.insuranceId">{{item.insuranceId}}</td>
					          <td v-if="!item.insuranceId">暂无</td>

					          <td><router-link class="btn btn-defaule" v-bind:to="'/cars/'+item.id">详情</router-link></td> -->
					        </tr>
					    </tbody>
					</table>
					<button @click="two=!two" class="btn btn-lg btn-secondary btn-block">返回</button>
				 </div>
				</div>

			</div>
		</div>
		<div class="container" :class="{showing:three}">
			<div>
				<h2 @click="clickThree">售卖保险</h2>
				
				<div v-if="!three" style="width: 250px;margin: auto auto;">
					<br>
					<br>
					<h4>保险从这里卖出，你可以看到买家的车辆信息</h4>
				</div>

				<div v-if="three">
				 <div style="background-color: #ddd;width: 70%;margin: 30px auto;">
					<table class="table table-striped">
					    <thead>
					        <tr>
					          <!-- <th>系统识别号</th> -->
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;客户姓名</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;客户电话</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车辆名称</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车辆年数</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欲购保险</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;购买状态</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
					        </tr>
					      </thead>

					      <tbody>
					        <tr v-for="item in buyRecords" v-rainbow>
					          <!-- <td>{{item.id}}</td> -->
					          <td>{{item.buyerName}}</td>
					          <td>{{item.buyerPhone}}</td>
					          <td>{{item.carName}}</td>
					          <td>{{item.carAge}}</td>
					          <td>{{item.insuranceName}}</td>
					          <td>{{item.state}}</td>
							  <td><router-link class="btn btn-defaule" v-bind:to="'/sales/'+item.id">详情</router-link></td>
							 
					        </tr>
					    </tbody>
					</table>
					<button @click="three=!three" class="btn btn-lg btn-secondary btn-block">返回</button>
				 </div>
				</div>

			</div>
		</div>
		<div class="container" :class="{showing:four}">
			<div>
				<h2 @click="clickFour">重置密码</h2>

				 <div v-if="!four" style="width: 250px;margin: auto auto;">
					<br>
					<br>
					<h4>您可以修改登录密码</h4>
				</div>

				<div v-if="four">
					<br>
					<br>
					<form class="form-signin" style="width: 45%;">
				        <h2 class="form-signin-heading">修改密码</h2><br>
			        				        	
				        <input type="Password" id="inputEmail" class="form-control" placeholder="原始密码" required autofocus v-model="oldPassword">
				        <input type="Password" id="inputEmail" class="form-control" placeholder="新密码" required autofocus v-model="newPassword">
				        <input type="Password" id="inputEmail" class="form-control" placeholder="确认密码" required autofocus v-model="confirmPassword">
				      
				        <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="updatePassword">确定更改</button>						
				        <br>				        
				        <button class="btn btn-lg btn-secondary btn-block" @click.prevent="four=!four">返回</button>
     				 </form>
				</div>
			</div> 
		</div>
		<div class="container" :class="{showing:five}">
			<div>
				<h2 @click="clickFive">事故理赔</h2>

				<div v-if="!five" style="width: 250px;margin: auto auto;">
					<br>
					<br>
					<h4>用来查看客户车辆的事故信息，和来自警方的责任判定</h4>
				</div>

				<div v-if="five">
					<br>
					<h3 class="form-signin-heading">在您公司投保的以下车辆发生了事故：</h3><br>
				 <div style="background-color: #ddd;width: 70%;margin: 30px auto;">
					<table class="table table-striped">
					    <thead>
					        <tr>
					          <!-- <th>系统识别号</th> -->
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牌照</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时间</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;地点</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车速</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;损伤</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;责任</th>
					          <th></th>
					        </tr>
					      </thead>

					      <tbody>
					        <tr v-for="item in accidents" v-rainbow>
					          <td>{{item.carId}}</td>
					          <td>{{item.carName}}</td>
					          <td>{{item.time}}</td>
					          <td>{{item.site}}</td>
					          <td>{{item.speed}}</td>
					          <td>{{item.damage}}</td>
					          <td>{{item.responsibility}}</td>				          
					          <td><router-link class="btn btn-defaule" v-bind:to="{path:'/accidents/'+item.id,query:{type:'company'}}">详情</router-link></td>
					        </tr>
					    </tbody>
					</table>
					<button @click="five=!five" class="btn btn-lg btn-secondary btn-block">返回</button>
				 </div>
				</div>

			</div>
		</div>
		<div class="container" :class="{showing:six}">
			<div>
				<h2 @click="clickSix">正在施工</h2>
			</div>
		</div>
	</div>
</template>

<script>
	import Alert from './Alert'
	export default{
		name:'company',
		components:{
   			 Alert,
  		},
		data(){
			return{
				one:false,
				two:false,
				three:false,threee:false,//修改密码div
				four:false,
				five:false,
				six:false,
				car:{},
				user:{},
				updateUser:{},
				alert:'',
				cars:{},
				greeting:'',

				insurance:{},//添加保险
				insurances:{},//所有保险
				buyRecords:{},//购买记录

				updateUser:'',
				oldPassword:'',
				newPassword:'',
				confirmPassword:'',//这四个是改密码的

				accidents:{},//这个是存放事故车辆的

			}
		},
		created(){
			//console.log("this is created hook");
			this.$http.get("http://localhost:3000/users/"+this.$route.params.id)
		      .then(function(response){
		      	this.insurance.companyId=this.$route.params.id;

		      	this.user=response.body;
		        this.updateUser=this.user;
		      	this.insurance.companyName=this.user.name;
		      	this.insurance.companyPhone=this.user.phone;
		      	this.insurance.state="在售";
		      	//console.log("this is created hook");
		        //console.log(response);
		        
		        var time=new Date().getHours();
		        if(time<12){
		        	this.alert='上午好，';
		        }
		        else if (time<19) {
		        	this.alert='下午好，';
		        }
		        else{
		        	this.alert='晚上好，';
		        }
		        
		        this.alert+=this.user.name;
		        this.alert+=this.user.gender=='男'?'先生':'女士';
		        this.greeting=this.alert;
		        

		      })
		},
		methods:{
			clickOne(){
				this.one=!this.one;
				if (this.one) {
					this.alert=this.greeting;
				}
				
			},
			clickTwo(){
				this.two=!this.two;
				this.$http.get("http://localhost:3000/insurances?companyId="+this.user.id)
				.then(function(response){
					//console.log(response);
					this.insurances=response.body;
				})
			},
			clickThree(){
				this.three=!this.three;
				if (this.three) {
					this.$http.get("http://localhost:3000/buyRecords?companyId="+this.user.id)
					.then(function(response){
						//console.log(response);
						this.buyRecords=response.body;
						console.log(this.buyRecords);
					})
				}
					
				
			},
			clickFour(){
				this.four=!this.four;
				
			},
			clickFive(){
				this.five=!this.five;
				this.$http.get("http://localhost:3000/accidents?companyId="+this.user.id)
				.then(function(response){
					this.accidents=response.body;
					console.log(this.accidents);
				})
				
			},
			clickSix(){
				this.six=!this.six;
				
			},
			addInsurance(){
				if (!this.insurance.number||!this.insurance.name||!this.insurance.duration||!this.insurance.price||!this.insurance.compensation) {
					alert("请把信息补充完整");
				}
				else {
					this.insurance.companyId=this.user.id;


					console.log(this.insurance);
					this.$http.post("http://localhost:3000/insurances",this.insurance)
					.then(function(result){
						//console.log(result);
						this.alert="新的保险添加成功！";
						this.one=!this.one;
					})
				}

			},
			invalid(item){
				//console.log(item);
				item.state="已下架";
				this.$http.put("http://localhost:3000/insurances/"+item.id,item)
				.then(function(response){
					//console.log(response);
					alert("已将"+item.name+"下架");
					
				})

			},
			valid(item){
				//console.log(item);
				item.state="在售";
				this.$http.put("http://localhost:3000/insurances/"+item.id,item)
				.then(function(response){
					//console.log(response);
					alert("已将"+item.name+"重新上架销售");
					
				})

			},
			updatePassword(){
				this.updateUser=this.user;
				if (!this.newPassword||!this.confirmPassword) {
					alert("不能为空哦");
				}
				else if (this.newPassword!=this.confirmPassword) {
					alert("两个新密码不一致哦");
				}
				else if (this.oldPassword!=this.updateUser.password) {
					alert("原始密码错误，请重新输入");
				}
				else{
					
					this.updateUser.password=this.newPassword;
					this.$http.put("http://localhost:3000/users/"+this.updateUser.id,this.updateUser)
					.then(function(response){
						console.log(response.body);
						this.four=!this.four;
						
						alert('更新成功啦');
					})
				}
			},
		}
	}
</script>

<style>
	.container{
		height: 300px;
		width: 400px;
		background-color: #ccc;
		float: left;
		margin: 10px 10px;
		transition: all 0.5s;
	}
	h2{
		margin: 15px auto;
				transition: all 0.5s;
	}
	

	.container:hover{
		transform: translateY(-10px);
		border-bottom: 2px solid #00925f;
		
	}
	.container:hover h2{
		size: 120%
	}



	.showing{

		height: 600px;
		width:100%;
		background-color: #00925f;
		/*float: left;*/
		float: fixed;
		z-index: 5;
	}
	.form-signin{
		width: 70%;
		margin:  auto auto;
	}
</style>