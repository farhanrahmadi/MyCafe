<template>
	<ScrollView>
		<StackLayout>
			<CardView v-for="menu in menuList" class="whiteCard" margin="10" elevation="40" radius="10">
				<GridLayout  rows="200,auto,auto,auto" columns="auto, auto,*">
					<Image class="menu-list" :src="menu.imgSrc" stretch="aspectFill" colSpan="2" row="0" />
					<Label :text="menu.name" class="dish-info" textWrap="true" row="1" colSpan="2" />
					<Label :text="menu.strPrice" class="dish-price" textWrap="true" row="2" colSpan="2" />
					<Button class="good-btn" ripple="true" text="add to order" @tap="ordering(menu)" row="3" col="0" />
					<Button class="info-btn" ripple="true" text="Detail" row="3" col="1" />
				</GridLayout>
			</CardView>
		</StackLayout>
	</ScrollView>
</template>
<script>
const dialogs = require('tns-core-modules/ui/dialogs');
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default{
	methods:{
		...mapActions([
			'ordering'
		])
	},
	computed:{
		...mapGetters([
			'menuList'
		])
	}
}
</script>