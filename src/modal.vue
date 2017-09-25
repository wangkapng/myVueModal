<template>
	<div id="modal" v-if='onOff'>
		<div class="modal">
			<div class="header">
				<b>X</b>
			</div>
			<div class="body">
				<input ref='name' type="text" v-model='person.name' placeholder="name">	
				<input ref='age' type="text" v-model='person
				.age' placeholder="age">
				<input type="text" ref='in' @blur='change'>	
			</div>
			<div class="footer">
				<div class="cancel" @click='upDate(false)'>取消</div>
				<div class="ensure" @click='upDate(true)'>确定</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	module.exports = {
		name:'modal',
		data:function(){
			return {
				msg:'dada',
				person:{
					name:'',
					age:''
				}
			}
		},
		props:{
			onOff:{
				type:Boolean,
				default:false
			},
			eventHub:{
				type:Object
			},
			value:{
				type:String
			}
		},
		methods:{
			upDate(type){
				if(type){
					this.eventHub.$emit('update',{person:{name:this.person.name,age:this.person.age},onOff:false});
				}else{
					this.eventHub.$emit('update',{onOff:false});
				}
				this.person={};
			},
			change(){
				this.$emit('input',this.$refs.in.value);
			}
		}
	}
</script>
<style lang="scss">
	body,html{
		margin: 0;
		overflow: hidden;
		height:100%;
		#modal{
			width:100%;
			height:100%;
			background: rgba(0,0,0,.3);
			position: absolute;
			top: 0;
			z-index: 9999;
			.modal{
				width:400px;
				height: 300px;
				border: 1px solid black;
				position: absolute;
				left: 50%;
				top:50%;
				margin-left: -200px;
				margin-top:-150px;
				z-index: 10000;
				background: #fff;
				border-radius: 10px;
				box-sizing: border-box;
				.header{
					height: 50px;
					text-align: center;
					line-height: 50px;
					background: red;
					width: 100%;
					border-top-left-radius: 10px;
					border-top-right-radius: 10px;
					position: relative;
					padding: 0;
					margin: 0;
					b{
						position: absolute;
						right: 5px;
						top: 0px;
						font-size: 30px;
						cursor: pointer;
						
					}
				}
				.footer{
					height: 50px;
					width: 100%;
					line-height: 50px;
					box-sizing: border-box;
					position:absolute;
					bottom: 0;
					border-bottom-left-radius: 10px;
					border-bottom-right-radius: 10px;
					div{
						height: 100%;
						width: 50%;
						color: white;
						float: left;
						text-align: center;
						font-size: 20px;
						box-sizing: border-box;
						cursor: pointer;
					}
					.cancel{
						background: red;
						border-bottom-left-radius: 10px;
					}
					.ensure{
						background: green;
						border-bottom-right-radius: 10px;
					}
				}
			}	
		}
	}
</style>