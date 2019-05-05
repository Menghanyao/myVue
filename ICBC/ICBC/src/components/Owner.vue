<template>
	<div class="owner">
		<h1>车主</h1>
		<div class="welcome">
			<!-- <p>欢迎您，{{user.name}}{{user.gender=='男'?'先生':'女士'}}</p> -->
			<Alert v-bind:message="alert"></Alert>
		</div>
		<div class="container" :class="{showing:one}">
			<div>
				<h2 @click="clickOne">添加车辆</h2>
				<div v-if="!one" style="width: 250px;margin: auto auto;">
					
					<br>
					<br>
					<h4>在这里你可以添加车辆信息，以便为其购买保险。</h4>

				</div>
				<div v-if="one">
					
					<br>
					

					<form class="form-signin">
				        <h2 class="form-signin-heading">在此处添加车辆信息</h2><br>

				        <label for="inputEmail" class="sr-only">Email address</label>
				        <input type="email" id="inputEmail" class="form-control" placeholder="车辆牌照" required autofocus v-model="car.number">
	
				        <label for="inputPassword" class="sr-only">Password</label>
				        <input type="text" id="inputPassword" class="form-control" placeholder="车辆名称" required v-model="car.name">

				        <label for="inputPassword" class="sr-only">Password</label>
				        <input type="text" id="inputPassword" class="form-control" placeholder="车辆年数" required v-model="car.age">

				      
				        <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="addCar">点此添加</button>
						
				        <br>
				        
				        <button class="btn btn-lg btn-secondary btn-block" @click.prevent="clickOne">返回</button>

     				 </form>

				</div>
			</div>
		</div>

		<div class="container clickTwo" :class="{showing:two}">
			<div>
				<h2 @click="clickTwo">所有车辆</h2>
				
				<div v-if="!two" style="width: 250px;margin: auto auto;">
					<br>
					<br>
					<h4>在这里你可以查看你的所有车辆，以及为她们购买的保险信息。</h4>
				</div>

				<div v-if="two">
				 <div style="background-color: #ddd;width: 70%;margin: 30px auto;">
					<table class="table table-striped">
					    <thead>
					        <tr>
					          <!-- <th>系统识别号</th> -->
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车牌号码</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车辆名称</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车辆年数</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所购保险</th>
					          <th></th>
					        </tr>
					      </thead>

					      <tbody>
					        <tr v-for="item in cars" v-rainbow>
					          <!-- <td>{{item.id}}</td> -->
					          <td>{{item.number}}</td>
					          <td>{{item.name}}</td>
					          <td>{{item.age}}</td>
					          <td v-if="item.insuranceId">{{item.insuranceId}}</td>
					          <td v-if="!item.insuranceId">暂无</td>

					          <td><router-link class="btn btn-defaule" v-bind:to="'/cars/'+item.id">详情</router-link></td>
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
				<h2 @click="clickThree">信息完善</h2>
				<div v-if="!three" style="width: 250px;margin: auto auto;">
					<br>
					<br>
					<h4>在这里你可以更正个人信息，包括密码，甚至是性别</h4>
				</div>
				<div v-if="three&&!threee" style="width: 50%;margin: auto auto;">
					<br>
					<br>
					<form class="form-signin">
				        <h2 class="form-signin-heading">在此处更改个人信息</h2><br>
			        	
			        	
				        <input type="email" id="inputEmail" class="form-control" placeholder="你的名字" required autofocus v-model="updateUser.name">
				        
				        <div style="font-size: 20px">
					        <label>您的性别：</label>
					        &nbsp;&nbsp;&nbsp;&nbsp;
					        男：<input type="radio" v-model="updateUser.gender" required="true" value="男">
					        &nbsp;&nbsp;&nbsp;&nbsp;
					        女：<input type="radio" v-model="updateUser.gender" required="true" value="女">
					     </div>
				        
				        <input type="text" id="inputPassword" class="form-control" placeholder="您的电话" required v-model="updateUser.phone">
				      
				        <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="updateOwner">确定更改</button>						
				        <br>				        
				        <button class="btn btn-lg btn-secondary btn-block" @click.prevent="clickThree">返回</button>
     				 </form>
     				 <br><br><br><br><br>
					<button class="btn btn-lg btn-primary btn-block" type="submit"   @click="threee=!threee">换个密码</button>
				</div>
				<div v-if="threee">
					<br>
					<br>
					<form class="form-signin">
				        <h2 class="form-signin-heading">修改密码</h2><br>
			        	
			        	
				        <input type="Password" id="inputEmail" class="form-control" placeholder="原始密码" required autofocus v-model="oldPassword">
				        
				        
				        
				        <input type="Password" id="inputEmail" class="form-control" placeholder="新密码" required autofocus v-model="newPassword">
				        <input type="Password" id="inputEmail" class="form-control" placeholder="确认密码" required autofocus v-model="confirmPassword">
				      
				        <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="updatePassword">确定更改</button>						
				        <br>				        
				        <button class="btn btn-lg btn-secondary btn-block" @click.prevent="threee=!threee">返回</button>
     				 </form>

				</div>
			</div>
		</div>
		<div class="container" :class="{showing:four}">
			<div>
				<h2 @click="clickFour">购买保险</h2>

				<div v-if="!four" style="width: 250px;margin: auto auto;">
					<br>
					<br>
					<h4>在这里你可以为爱车投保，只能投一个哦</h4>
				</div>

				<div v-if="four&&!fourr">
					<br>
					<br>
					<h2 class="form-signin-heading">您有这些车辆还未投保哦</h2><br>
				 <div style="background-color: #ddd;width: 70%;margin: 30px auto;">
				 	
					<table class="table table-striped">
						
					    <thead>
					        <tr>
					          <!-- <th>系统识别号</th> -->
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车牌号码</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车辆名称</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;车辆年数</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所购保险</th>
					          <th></th>
					        </tr>
					      </thead>

					      <tbody>
					        <tr v-for="item in cars" v-rainbow v-if="!item.insuranceId">
					          <!-- <td>{{item.id}}</td> -->
					         
					          <td>{{item.number}}</td>
					          <td>{{item.name}}</td>
					          <td>{{item.age}}</td>
					          <td v-if="item.insuranceId">{{item.insuranceId}}</td>
					          <td v-if="!item.insuranceId">暂无</td>
								
					          <td><button @click="BuyButton1(item)" class="btn btn-defaule btn-primary btn-block">选择</button></td>
					          <!-- <td v-if="item.insuranceId"><button @click="BuyButton1(item)" class="btn btn-defaule btn-primary btn-block" v-bind:to="'/cars/'+item.id">查看</button></td> -->
					          
					          
					        </tr>
					    </tbody>
					</table>
					<button @click="four=!four" class="btn btn-lg btn-secondary btn-block">返回</button>
				 </div>
				</div>

				<div v-if="fourr">
					<br>
					<h2 class="form-signin-heading">您可以选择这些保险方案</h2><br>
				 <div style="background-color: #ddd;width: 70%;margin: 30px auto;">
				 	
					<table class="table table-striped">
						
					    <thead>
					        <tr>
					          <!-- <th>系统识别号</th> -->
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保险名称</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所属公司</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有效时长（年）</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;售卖价格</th>
					          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最高赔付</th>
					          <th></th>
					        </tr>
					      </thead>

					      <tbody>
					        <tr v-for="item in insurances" v-rainbow v-if="item.state=='在售'">
					          <!-- <td>{{item.id}}</td> -->
					          <td>{{item.name}}</td>
					          <td>{{item.companyName}}</td>
					          <td>{{item.duration}}</td>
					          <td>{{item.price}}</td>
					          <td>{{item.compensation}}</td>					      					
					          <td><button @click="BuyButton2(item)" class="btn btn-defaule btn-primary btn-block">购买</button></td>
					        </tr>
					    </tbody>
					</table>
					<button @click="fourr=!fourr" class="btn btn-lg btn-secondary btn-block">返回上一页</button>
				 </div>
				</div>

			</div>
		</div>
		<div class="container" :class="{showing:five}">
			<div>
				<h2 @click="clickFive">事故理赔</h2>

				<div v-if="!five" style="width: 250px;margin: auto auto;">
					<br>
					<br>
					<h4>希望您永远不会用到</h4>
				</div>

				<div v-if="five">
					<br>
					<h3 class="form-signin-heading">很不幸地通知您，发生了下面的事故</h3><br>
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
					          <!-- <td>{{item.id}}</td> -->
					          <td>{{item.carId}}</td>
					          <td>{{item.carName}}</td>
					          <td>{{item.time}}</td>
					          <td>{{item.site}}</td>
					          <td>{{item.speed}}</td>
					          <td>{{item.damage}}</td>
					          <td>{{item.responsibility}}</td>				          
					         <!--  <td><router-link class="btn btn-defaule" v-bind:to="'/accidents/'+item.id">详情</router-link></td> -->
					          <td><router-link class="btn btn-defaule" v-bind:to="{path:'/accidents/'+item.id,query:{type:'owner'}}">详情</router-link></td>
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
				<div>✧*｡٩(ˊᗜˋ*)و✧*｡</div>
				<div style="width: 250px;margin: auto auto;">
					<br>
					<br>
					<h4>道路千万条</h4>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	
	import Alert from './Alert'
	export default{
		name:'owner',
		components:{
   			 Alert,
  		},
		data(){
			return{
				one:false,
				two:false,
				three:false,threee:false,//修改密码div
				four:false,fourr:false,//买保险用div
				five:false,
				six:false,

				car:{},//待添加的车辆
				user:{},//登陆进来的用户

				updateUser:{},//更新用户信息时

				alert:'',//消息框

				cars:{},//查询所有车辆信息时存放车辆们的
				greeting:'',//早上好、中午好、下午好
				oldPassword:'',
				newPassword:'',
				confirmPassword:'',//这三个是改密码的

				targetCar:{},//买保险时选择的车辆
				targetInsurance:{},//买保险时选择的保险
				insurances:{},//买保险时待选的保险

				buyRecord:{},//买保险最后一步产生的数据记录
				updateCar:{},//更新车辆的保险位置信息;

				accidents:{},//事故表单
			}
		},
		created(){
			//console.log("this is created hook");
			this.$http.get("http://localhost:3000/users/"+this.$route.params.id)
      .then(function(response){
      	this.car.ownerId=this.$route.params.id;
        //console.log(response);
        this.user=response.body;
        this.updateUser=this.user;
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
        //console.log(new Date().getHours());
        //console.log(this.user);
        //console.log(this.alert);

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
				this.$http.get("http://localhost:3000/cars?ownerId="+this.car.ownerId)
				.then(function(response){
					//console.log(response);
					this.cars=response.body;
				})
			},
			clickThree(){
				this.three=!this.three;
				
			},
			clickFour(){
				this.four=!this.four;
				this.$http.get("http://localhost:3000/cars?ownerId="+this.car.ownerId)
				.then(function(response){
					//console.log(response);
					this.cars=response.body;
				})
			},
			clickFive(){
				this.five=!this.five;
				this.$http.get("http://localhost:3000/accidents?ownerId="+this.user.id)
				.then(function(response){
					this.accidents=response.body;
					console.log(this.accidents);
				})
				
			},
			clickSix(){
				this.six=!this.six;
				
			},
			addCar(){
				if (!this.car.number||!this.car.name||!this.car.age) {
					alert("请把信息补充完整");
				}else{

					//console.log(this.car);
					this.$http.post("http://localhost:3000/cars",this.car)
					.then(function(result){
						//console.log(result);
						this.alert="车辆信息添加成功！";
						this.one=!this.one;
					})

				}
			},
			updateOwner(){
				if (!this.updateUser.name||!this.updateUser.phone) {
					alert('请把信息补充完整');
				}else{
					this.$http.put("http://localhost:3000/users/"+this.updateUser.id,this.updateUser)
					.then(function(response){
						console.log(response);
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
					        this.three=!this.three;
					        if (!this.three) {
					        	this.alert=this.greeting;
					        }
						alert('更新成功啦');
					})
				}

			},
			updatePassword(){
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
						this.threee=!this.threee;
						this.three=!this.three;
						alert('更新成功啦');
					})
				}
			},
			BuyButton1(item){
				this.targetCar=item;
				console.log("打印的目标车辆信息");
				console.log(this.targetCar);
				this.fourr=!this.fourr;
				this.$http.get("http://localhost:3000/insurances")

				.then(function(response){
					this.insurances=response.body;
					console.log("我要打印所有可买的保险了");
					console.log(response);
				})
			},
			BuyButton2(item){
				this.targetInsurance=item;
				console.log("打印的是目标保险信息");
				console.log(this.targetInsurance);

				//下面是生成buyRecords表单的代码
				// 谁， 在 什么时候， 给 谁， 买了 什么东西， 
				this.buyRecord.buyerId=this.user.id;
				this.buyRecord.buyerName=this.user.name;
				this.buyRecord.buyerPhone=this.user.phone;

				this.buyRecord.carId=this.targetCar.id;
				this.buyRecord.carNumber=this.targetCar.number;
				this.buyRecord.carName=this.targetCar.name;
				this.buyRecord.carAge=this.targetCar.age;

				this.buyRecord.companyId=this.targetInsurance.companyId;
				this.buyRecord.companyName=this.targetInsurance.companyName;
				this.buyRecord.companyPhone=this.targetInsurance.companyPhone;

				this.buyRecord.insuranceId=this.targetInsurance.id;
				this.buyRecord.insuranceNumber=this.targetInsurance.number;
				this.buyRecord.insuranceName=this.targetInsurance.name;
				this.buyRecord.insuranceDuration=this.targetInsurance.duration;
				this.buyRecord.insurancePrice=this.targetInsurance.price;
				this.buyRecord.insuranceCompensation=this.targetInsurance.compensation;

				
				var year=parseInt(new Date().getFullYear())+parseInt(this.buyRecord.insuranceDuration);
				var month=new Date().getMonth()+1;
				var day=new Date().getDate();
				this.buyRecord.overtime=year+'-'+month+'-'+day;
				this.buyRecord.state="待确认";
				//console.log(year+'-'+month+'-'+day);
				console.log("将要打印生成的表单");
				console.log(this.buyRecord);


					//console.log("现在更新车辆信息，下面打印更新结果");
					this.updateCar=this.targetCar;
					this.updateCar.insuranceId=this.buyRecord.insuranceName;
					// console.log(this.updateCar);

				this.$http.post("http://localhost:3000/buyRecords/",this.buyRecord)
				.then(function(response){
					// console.log("新建的记录表单发送成功，下面打印返回值");
					// console.log(response);

					

					this.$http.put("http://localhost:3000/cars/"+this.updateCar.id,this.updateCar)
					.then(function(response){
					// console.log("车辆信息更新成功");
					// console.log(response);

					alert("已提交购买申请，等待保险公司确认");
					this.fourr=!this.fourr;

					})


				})











			},

			
		}
	}
</script>

<style>
.owner{

}
	


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

		height: 800px;
		width:100%;
		background-color: #00925f;
		/*float: left;*/
		float: fixed;
		z-index: 5;
	}
	.form-signin{
		width: 420px;
		margin:  auto auto;
	}

	
	. two form{
		border:2px solid #333;
	}
</style>