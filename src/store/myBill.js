const state = {
	billing: [],
	message: ''
}

const mutations = {
	addingBilling: (state,item) =>{
		state.billing.push(item)
	},
	removeBilling: (state,index) =>{
		state.billing.splice(index,1)
	},
	messageUpdate:(state,message) =>{
		state.message = message
	}
} 

const actions = {
	reserveOrder: ({commit,state},payload) => {
		let indexFound = new Array();
		for(let order of payload.orderList){
			let isFound = state.billing.findIndex(i =>{
				return i.index == order.index
			})
			if(isFound != -1){
				let qty = parseInt(state.billing[isFound].qty)
				order.qty = qty + parseInt(order.qty)
				console.log({
					order: order.qty,
					billing: qty,
					item: "ke duar"
				})
				commit('removeBilling',isFound)				
				commit('addingBilling',order)
				commit('cleanOrder')
			}else {
				commit('addingBilling',order)
			}
		}
	}
}

const getters = {
	listBill: state =>{
		return {
			bill :state.billing,
			message: state.message
		}
	},
	emptyBill: state =>{
		if (state.billing.length == 0) {
			return true;
		} else {
			return false;
		}
	}
}

export default{
	state,
	getters,
	actions,
	mutations
}