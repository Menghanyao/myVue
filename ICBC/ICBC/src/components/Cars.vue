<template>
	<div class="cars">
		<h2>这是您的某辆车</h2>
		<Alert v-bind:message="alert"></Alert>
		<div class="left">

			<div>
				<h3>车辆信息</h3>
			
				<ul class="list-group">
			      <li class="list-group-item">车辆编号：
			        <span class="glyphicon glyphicon-phone">&nbsp;{{car.id}}</span>
			      </li>
			    </ul>

			    <ul class="list-group">
			      <li class="list-group-item">车牌号码：
			        <span class="glyphicon glyphicon-envelope">&nbsp;{{car.number}}</span>
			      </li>
			    </ul>

			    <ul class="list-group">
			      <li class="list-group-item">车辆名称：
			        <span class="glyphicon glyphicon-education">&nbsp;{{car.name}}</span>
			      </li>
			    </ul>

			    <ul class="list-group">
			      <li class="list-group-item">车辆年数：
			        <span class="glyphicon glyphicon-stats">&nbsp;{{car.age}}</span>
			      </li>
			    </ul>

			    <ul class="list-group">
			      <li class="list-group-item">车主识别号：
			        <span class="glyphicon glyphicon-jpy">&nbsp;{{car.ownerId}}</span>
			      </li>
			    </ul>

			    <ul class="list-group">
			      <li class="list-group-item">保险名称：
			        <span class="glyphicon glyphicon-modal-window" v-if="car.insuranceId">&nbsp;{{car.insuranceId}}</span>
			        <span class="glyphicon glyphicon-modal-window" v-if="!car.insuranceId">&nbsp;暂无保险</span>
			      </li>
			    </ul>
			</div>
		</div>


		<div class="right" v-if="buyRecord">
			<div>
				<h3>保险信息</h3>

				<ul class="list-group">
			      <li class="list-group-item">订单编号：
			        <span class="glyphicon glyphicon-phone">&nbsp;{{buyRecord.insuranceId}}</span>
			      </li>
			    </ul>

			    <ul class="list-group">
			      <li class="list-group-item">保险名称：
			        <span class="glyphicon glyphicon-envelope">&nbsp;{{buyRecord.insuranceName}}</span>
			      </li>
			    </ul>

			    <ul class="list-group">
			      <li class="list-group-item">保险时长：
			        <span class="glyphicon glyphicon-education">&nbsp;{{buyRecord.insuranceDuration}}年</span>
			      </li>
			    </ul>

			    <ul class="list-group">
			      <li class="list-group-item">保险价格：
			        <span class="glyphicon glyphicon-stats">&nbsp;{{buyRecord.insurancePrice}}</span>
			      </li>
			    </ul>

			    <ul class="list-group">
			      <li class="list-group-item">赔偿金额：
			        <span class="glyphicon glyphicon-jpy">&nbsp;{{buyRecord.insuranceCompensation}}</span>
			      </li>
			    </ul>

			    <ul class="list-group">
			      <li class="list-group-item">保险名称：
			        <span class="glyphicon glyphicon-modal-window">&nbsp;{{buyRecord.insuranceName}}</span>
			       
			      </li>
			    </ul>
			</div>
		
		</div><!-- right jover-->

		<div class="right">
			<div>
				<h3>保险公司信息</h3>
			    <ul class="list-group">
			      <li class="list-group-item">公司法人：
			        <span class="glyphicon glyphicon-envelope">&nbsp;{{buyRecord.companyName}}</span>
			      </li>
			    </ul>

			    <ul class="list-group">
			      <li class="list-group-item">联系方式：
			        <span class="glyphicon glyphicon-education">&nbsp;{{buyRecord.companyPhone}}</span>
			      </li>
			    </ul>
			</div>		
		</div>

		<div class="right four">
			<div>
				<h3>其他信息</h3>
			    <ul class="list-group">
			      <li class="list-group-item">到期时间：
			        <span class="glyphicon glyphicon-envelope">&nbsp;{{buyRecord.overtime}}</span>
			      </li>
			    </ul>

			    <ul class="list-group">
			      <li class="list-group-item">保险状态：
			        <span class="glyphicon glyphicon-education">&nbsp;{{buyRecord.state}}</span>
			      </li>
			    </ul>
			</div>
		</div><!-- right jover-->
		<br>
		<div>
			<button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="back">返回</button>
		</div>

	</div>
</template>

<script>
	import Alert from './Alert'
	export default{
		name:"cars",
		components:{
			Alert
		},
		data(){
			return{
				car:{},
				insurance:{},
				alert:'',
				buyRecord:{},
			}
		},
		created(){
			this.$http.get("http://localhost:3000/cars/"+this.$route.params.id)
			.then(function(result){
				this.car=result.body;
				console.log(this.car);
				if (this.car.insuranceId) {
					//去请求保险
					this.$http.get("http://localhost:3000/buyRecords?carId="+this.$route.params.id)
					.then(function(result){
						//this.buyRecord=result.body;
						//console.log(result);
						this.buyRecord=result.body[0];
						console.log(this.buyRecord);
						this.alert="到期时间："+this.buyRecord.overtime+"     保险状态："+this.buyRecord.state;
					})
					
				}
				else{
					this.alert="您的车辆还未投保哦！"
				}



			})
		},
		methods:{
			back(){
				this.$router.go(-1);
			}
		}
}
</script>

<style>
	.left{
		width: 33%;
		float: left;
		background-color: #00925f;
		padding: 10px;
	}
	ul{
		width: 70%;
		margin: 10px auto;
	}
	.right{
		width: 33%;
		float: left;
		background-color: #00925f;
		padding: 10px;
		margin-left: 5px;
	}
	.four{
		margin-top: 48px;
	}
</style>