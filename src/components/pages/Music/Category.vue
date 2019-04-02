<template>
    <div id="nihu-music">
		<Header/>

		<loading :active.sync="isLoading" :is-full-page="fullPage" :loader="dots"></loading>
		<div class="container" v-if="!isLoading">
			<div class="wrapper">
				
				<div class="music-release">
					<p>Music News </p>
					<ul>
						<li v-for="data in details.music" :key="data.uuid"  class="music_update"> 
							<p class="mb"><router-link :to="`/music/details/` + data.uuid" class="rate ">{{ data.category_name }}</router-link></p>
							<router-link :to="`/music/details/` + data.uuid" class="music_update1">{{ data.name }}</router-link>
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
				details: null,
				recent: null,
				isLoading: true,
				fullPage: true
			};
			},
			components: {Header, Loading},

			methods: {
			async getCategory(){
				return axios
                        .get('https://nihu.herokuapp.com/api/v1/open/music/category-detail/' +  this.$route.params.uuid)
                        .then( function(response){
                                return response
                    })
                },
			},
		
		async created() {
				this.details = (await this.getCategory().then((res) => res.data)).message;
				if(this.details != null){
					this.isLoading = false;
				}
			// console.log(this.categories = response.message)
		}
	}
</script>