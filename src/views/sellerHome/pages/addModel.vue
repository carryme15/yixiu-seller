<template>
  <div class="info">

		<item-header :name="infoName" v-on:backParent="backParent" />

		<van-field
			v-model="brandName"
			label="品牌名称"
			placeholder="品牌名称"
			disabled
		/>

		<!-- <div class="info__name">
			<p>系统推荐型号</p>
			<cube-select
				v-model="model.name"
				:options="phoneModel"
				@change="modelChange"
			/>
		</div> -->

		<div class="info__name">
			<p>系统推荐型号</p>
		</div>

		<div class="info__name">
			<div class="service">
				<selects ref="phone" v-for="(item, index) in phoneModel"
					:type="type"
					:key="index"
					:data="item.text"
					@sendMsg="sendMsg(index, item.text)"
					@remove="remove(index, item.text)"
					:index="index"
				/>
			</div>
		</div>

		<!-- <van-field
			v-model="model.name"
			label="其他型号"
			placeholder="如果没有你想要的型号名,请填写你想要的型号名"
		/> -->

		<!-- <van-field
			v-model="model.desc"
			label="描述"
			placeholder="请输入品牌描述"
		/> -->

		<!-- <van-field
			v-model="model.cover"
			label="封面"
			placeholder="请输入封面地址"
		/> -->

		<!-- <div class="info__name">
			<p>手机颜色</p>
		</div> -->

		<!-- <div class="service">
			<selects ref="select" v-for="(item, index) in phoneModelColor"
				:key="index"
				:data="item"
				v-on:sendMsg="sendMsg"
				v-on:remove="remove"
			/>
		</div> -->

		<!-- <van-field
			v-model="otherColors"
			label="其他颜色"
			placeholder="请输入其他颜色,并以中文逗号相隔"
		/> -->

		<van-button size="large" @click="submit">确认添加</van-button>

	</div>
</template>

<script>
import { Field, Button, Toast } from 'vant'
import ItemHeader from '../components/itemHeader'
import selects from '../components/select'
export default {
	props: {
		brandName: String,
		brandId: String,
		sysModel: Array,
		phoneModel: Array,
		manufacturer: String,
		modelNames: Array
	},
  components: {
		[Field.name]: Field,
		[Button.name]: Button,
		ItemHeader,
		selects
	},
	watch: {
		modelNames: function (val) {
			val.map( (item, index) => {
				this.phoneModel.map( (phoneItem, phoneIndex) => {
					item == phoneItem.text ? this.phoneModel.splice(phoneIndex, 1) : '';
				})
			})
		}
	},
	async mounted () {
		// const toast = this.$createToast({
		// 	txt: '加载中...',
		// 	type: 'loading'
		// })
		// toast.show();
	},
	data () {
		return {
			infoName: '添加手机型号',
			colors: ['黑色', '白色', '银灰色'],
			otherColors: [],
			phoneName: [],
			models: [],
			phoneInfo: [],
			type: 'model',
			// phoneModel: [],
			phoneModelAlias: '',
			phoneModelInfo: [],
			phoneModelColor: [],
			phoneModelColorRes: [],
			colorType: 'color',
			model: {
				name: '',
				// shop: '5ac83157bcbe58709c9bd47a',
				shop: JSON.parse(sessionStorage.getItem('shopData'))._id,
				color: [],
				manufacturer: ''
			}
		}
	},
	methods: {
		sendMsg (index, name) {

			// console.log(this.modelNames);
			// 颜色
			let tempColor;
			this.sysModel.map(item => {
				item.name == name ? tempColor = item.color : null;
			})

			this.models.push({
				name: name,
				shop: JSON.parse(sessionStorage.getItem('shopData'))._id,
				color: tempColor,
				manufacturer: this.manufacturer
			})
		},
		remove (index, name) {
			this.models.map( (item, index) => {
				item.name == name ? this.models.splice(index, 1) : null;
			})
		},
		// sendMsg (data) {
		// 	this.model.color.push(data);
		// },
		// remove(data) {
		// 	this.model.color.map( (item, index) => {
		// 		item == data ? this.model.color.splice(index, 1) : null
		// 	})
		// },
		backParent () {
			this.phoneModelColor = [];
			this.model.name = '';
			this.$emit('backParent', true);
		},
		modelChange (value, index, text) {
			this.modelName = text;
			this.sysModel.map(item => {
				item._id == value ? this.model.color = item.color : null;
			})

			// this.model['name'] = value;
			// this.phoneModelColor = this.phoneModelInfo[ index ].color;
			
		},
		async submit () {
			let status = true;

			if (this.models.length == 0) {
				alert('请选择需要添加的手机型号');
				return;
			}

			if (status) {
				const toast = Toast.loading({
					duration: 0,
					forbidClick: true, 
					message: '请稍等...'
				});
				this.models.map(async item => {
					let modelRes = await this.$api.sendData('https://m.yixiutech.com/phone/model', item);
					if (modelRes.code !== 200) {
						this.prompt(modelRes.errMsg, 'error').show();
						return;	
					}
					this.prompt(`添加${item.name}成功!`, 'correct').show();
				})
				toast.clear();

				// 重置
				this.models = [];
				this.$refs.phone.map(item => {
					item.hasBorder ? item.selectOn() : '';
				})

				this.$emit('updateModel', true);
			}
		}
	}
}
</script>

<style scoped>
.info {
	background: #fff;
}
.info__name {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0 15px;
	margin: 10px 0;
	font-size: 14px;
}

.info__name p {
	width: 90px;
}

.van-button {
	margin-top: 50px;
}

.service {
	width: 92%;
	display: flex;
	flex-wrap: wrap;
	justify-content:space-start;
	padding: 4%;
}

.info__name .cube-select {
	width: 60%;
}
</style>
