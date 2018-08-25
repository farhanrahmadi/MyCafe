const state ={
	order : []
}

const getters = {
	orderList: state => {
		return state.order;
	},
	emptyOrder: state =>{
		if(state.order.length == 0){
			return true;
		}else{
			return false;
		}
	}
}

const mutations = {
	addingOrder: (state,order) => {
		let exist = 0;
		state.order.map(so =>{
			if (so.index == order.index) {
				exist += 1;
			}
		})
		if (exist > 0) {
			alert('item sudah ada')
		}else{
			state.order.push(order);
		}
	},
	removingOrder:(state,index) => {
		state.order.splice(index,1);
	},
	cleanOrder: (state) =>{
		state.order.splice(0, state.order.length)
	}
}

const actions = {
	ordering: ({commit,state},order) => {
		order.qty = 0;
		commit('addingOrder',order)
	},
	removeOrder: ({commit},index) =>{
		commit('removingOrder',index);
	}
}

export default{
	state,
	getters,
	actions,
	mutations
}