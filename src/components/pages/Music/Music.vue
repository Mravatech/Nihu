<template>
    <div id="nihu-music">
		<Header/>
		<loading :active.sync="isLoading" :is-full-page="fullPage" :loader="dots"></loading>
		<div class="container" v-if="!isLoading">
			<div class="wrapper">
				<div class="row mb">
					<div class="col-md-6 new-release">
						<router-link :to="`music/details/` + categories.latestOne.uuid || ''">
						<div class="shows-txt">
							<router-link :to="`details` + categories.latestOne.uuid" class="shows-txt1to">{{ categories.latestOne.name }}</router-link>
						</div></router-link>
					</div>
					<div class="col-md-6 categories" >
						<ul >
							<li v-for="cat in categories.categories" :key="cat.uuid" class="hvr-bounce-in select">
								<router-link :to="`music/category/` + cat.uuid"> {{ cat.name }} </router-link>
							</li>
						</ul>
					</div>
				</div>

				<div class="music-update">
					<p>Music Updates</p>
					<ul>
						<li v-for="data in categories.top_ten" :key="data.uuid"  class="music_update"> 
							<p class="mb"><router-link :to="`details` + data.uuid" class="rate ">{{ data.category_name }}</router-link></p>
							<router-link :to="`details` + data.uuid" class="music_update1">{{ data.name }}</router-link>
						</li>
					</ul>
					<div class="load-more">
						<button class="loadbtn btn-bounce">Load More</button>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>
<script>
	import axios from 'axios'
	import Header from '@/components/common/Header'
	import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css';


	export default {
		data: function () {
			return {
				categories: null,
				recent: null,
				isLoading: true,
				fullPage: true
			};
		},
		components: {Header, Loading},

		methods: {
		async getCategory(){
			return axios
					.get('https://nihu.herokuapp.com/api/v1/open/music/list-category')
					.then( function(response){
							return response
				})
			},
		},
	
	async created() {
			this.categories = (await this.getCategory().then((res) => res.data)).message;
			if(this.categories != null){
					this.isLoading = false;
			}
		// console.log(this.categories = response.message)
	}
	}
</script>
