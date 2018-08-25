<template>
	<Page class="page">
		<ActionBar class="action-bar" title="My Cafe"/>
		<TabView :selectedIndex="selectedIndex" iosIconRenderingMode="alwaysOriginal">
			<TabViewItem title="List Menu">
				<menu-list></menu-list>
			</TabViewItem>
			<TabViewItem title="Order Saya">
				<my-order></my-order>
			</TabViewItem>
			<TabViewItem title="Bill">
				<my-bill></my-bill>
			</TabViewItem>
		</TabView>
	</Page>
</template>
<script>
import menuList from './MenuList'
import myOrder from './MyOrder'
import myBill from './MyBill'

export default{
	components:{
		menuList,
		myOrder,
		myBill
	}
}
</script>