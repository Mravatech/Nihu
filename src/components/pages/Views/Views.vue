<template>
    <div id="nihu-music">
		<Header/>
		<loading :active.sync="isLoading" :is-full-page="fullPage" :loader="dots"></loading>
		<div class="container" v-if="!isLoading">
			<div class="wrapper">
				
				<ul class="mb">
					<li>
						<router-link :to="`/ourviews/category/` + data.details[0].uuid">
							<img src="assets/img/discussion_board.svg" class="board hvr-bounce-in">
						</router-link>
					</li>
					<li>
						<router-link :to="`/ourviews/category/` + data.details[1].uuid">
									<img src="assets/img/culture.svg" class="culture hvr-bounce-in">
						</router-link>
					</li>
				</ul>

				<div class="music-update">
					<p>Updates</p>
					<ul>
						<li class="trend_update" v-for="data in data.views.data" :key="data.id"> 
							<img src="assets/img/genevive.jpg" class="trend_img">
							<router-link :to="`/ourviews/details/` + data.uuid" class="lab "> {{ data.category_name }} </router-link>
							<p class="mb-0 tub"><router-link  :to="`/ourviews/details/` + data.uuid" class="trend_update1">{{ data.name }}</router-link></p>
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
				data: null,
				recent: null,
				isLoading: true,
				fullPage: true
			};
		},
		components: {Header, Loading},

		methods: {
		async getCategory(){
			return axios
					.get('https://nihu.herokuapp.com/api/v1/open/views/list-category')
					.then( function(response){
							return response
				})
			},
		},
	
	async mounted() {
			this.data = (await this.getCategory().then((res) => res.data)).message;
			if(this.data != null){
				this.isLoading = false;
			}
		}
	}
</script>