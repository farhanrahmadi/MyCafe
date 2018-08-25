<template>
	<StackLayout>
		<ScrollView v-if="!emptyOrder">
			<FlexboxLayout flexDirection="column" marginTop="25" marginRight="25" marginLeft="25">
				<GridLayout v-for="(order,index) in orderList" marginBottom="15" columns="200,50,50" rows="*,auto">
					<Label class="order-name" :text="order.name" row="0" col="0"/>
					<TextField keyboardType="number" v-model:value="order.qty" row="0" col="1" hint="Qty" />
					<Button text="x" class="delete" ripple="true" @tap="removeOrder(index)" row="0" col="2" />
				</GridLayout>
				<TextView v-model="message" :hint="hint" />
				<Button text="Pesan" class="info-btn" @tap="reserveOrder({orderList,message})" ripple="true" />
			</FlexboxLayout>
		</ScrollView>
		<Image v-else src="~/images/empty-cart.png" marginTop="50" strech="none"/>
	</StackLayout>
</template>
<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default{
	data:() =>{
		return {
			message: '',
			hint:'Apakah ada pesanan khusus'
		}
	},
	computed:{
		...mapGetters([
			'orderList',
			'emptyOrder'
		])
	},
	methods:{
		...mapActions([
			'removeOrder',
			'reserveOrder'
		])
	}
}
</script>
