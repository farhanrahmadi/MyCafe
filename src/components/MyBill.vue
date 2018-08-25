<template>
	<StackLayout>		
		<ScrollView v-if="!emptyBill">
			<FlexboxLayout flexDirection="column" marginTop="25" marginRight="25" marginLeft="25">
				<GridLayout v-for="(order,index) in listBill.bill" marginBottom="15" columns="100,100,100" rows="*,auto">
					<Label class="order-name" :text="order.name" row="0" col="0"/>
					<Label :text="`x ${order.qty}`" class="qty" row="0" col="1" />
					<label text="x" class="sub-price" :text="`Rp.${order.price * order.qty}`" row="0" col="2" />
				</GridLayout>
				<TextView editable="false" :text="`pesan tambahan: \n${listBill.message}`" />
				<Button text="Selesai" class="info-btn" ripple="true" />
			</FlexboxLayout>
		</ScrollView>
		<Image v-else src="~/images/empty-cart.png" marginTop="50" strech="none"/>
	</StackLayout>
</template>
<script>
	import { mapGetters } from 'vuex'
	export default{
		computed:{
			...mapGetters([
				'listBill',
				'emptyBill'
				])
		}
	}
</script>