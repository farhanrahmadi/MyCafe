const state ={
	menu : [
		{
			index: 1,
			name: 'Coffe Latte',
			price: 10000,
			strPrice: 'Rp.10.000',
			imgSrc: 'http://www.hunterscafe.co.nz/wp-content/uploads/2018/05/caffe.png'
		},
		{
			index: 2,
			name: 'Manual Brew',
			price: 12000,
			strPrice: 'Rp.12.000',
			imgSrc: 'https://www.lahuertacafe.com/wp-content/uploads/2017/11/americano.jpg'
		},
		{
			index: 3,
			name: 'Chezy Chicken spageti',
			price: 18000,
			strPrice: 'Rp.18.000',
			imgSrc: 'https://atmedia.imgix.net/5b51a29905958199bd36b6e142cc72b5bb0b20c3?auto=format&q=45&w=640.0&fit=max&cs=strip'
		},
		{
			index: 4,
			name: 'Beef Lasagna',
			price: 25000,
			strPrice: 'Rp.25.000',
			imgSrc: 'https://static01.nyt.com/images/2015/10/15/dining/15RECIPE20DIN/15RECIPE20DIN-articleLarge.jpg'
		}
	]
}

const getters = {
	menuList: state =>{
		return state.menu;
	}
}

export default{
	state,
	getters
}