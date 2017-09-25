<template>
	<div id="app">
		<table>
			<thead>
				<tr><th>学生信息</th></tr>
			</thead>
			<tbody>
				<tr v-for='(item,index) in persons'>
					<td>{{index+1}}</td>
					<td>{{item.name}}</td>
					<td>{{item.age}}</td>
				</tr>
			</tbody>
			<tfoot>
				<tr col='3'>
					<td>
						<input type="button" value="add" @click='open'>	
					</td>
				</tr>
			</tfoot>
		</table>
		<modal :on-off='onOff' :event-hub='eventHub' :value='value' @input='change'>
		</modal>
		<h1>{{value}}</h1>
	</div>
</template>
<script type="text/javascript">
	import modal from './modal.vue';
	import Vue from 'vue';
	export default {
		name:'app',
		data(){
			return {
				persons:[],
				onOff:false,
				eventHub:new Vue(),
				value:''
			}
		},
		components:{
			modal
		},
		methods:{
			open(){
				this.onOff = true;
			},
			updateValue(data){
				if(data.person){
					this.persons.push(data.person);
				}
				this.onOff=data.onOff;
			},
			change(val){
				this.value=val;
			}
		},
		created:function(){
			this.eventHub.$on('update',function(data){
				if(data.person){
					this.persons.push(data.person);
				}
				this.onOff=data.onOff;
			}.bind(this))
		}
	}
</script>
<style lang="scss">
	#app{
		text-align: center;
		height: 100%; 
		table{
			margin: 10px auto;
			border: 1px solid black;

		}
	}
</style>