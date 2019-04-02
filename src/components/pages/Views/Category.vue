<template>
    <div id="nihu-music">
		<Header/>

		<loading :active.sync="isLoading" :is-full-page="fullPage" :loader="dots"></loading>
		<div class="container" v-if="!isLoading">
			<div class="wrapper">
				<div class="start">
					<button class="startbtn btn-bounce">Start a Discussion</button>
				</div>
				<ul class="discussion">
					<li class="board">Discussion Board</li>
					<li class="red">Trending</li>
				</ul>

				<div class="music-update">
					<ul>
						<li class="trend_update" v-for="data in data.trending" :key="data.uuid"> 
							<img src="/assets/img/genevive.jpg" class="trend_img">
							<router-link :to="`/ourviews/details/` + data.uuid" class="lab "> {{ data.category_name }} </router-link>
							<p class="mb-0 tub"><router-link  :to="`/ourviews/details/` + data.uuid" class="trend_update1">{{ data.name }}</router-link></p>
						</li>
                    </ul>

					
					<div class="see-more">
						<button class="loadbtn btn-bounce">See More</button>
					</div>
				</div>

				<ul class="discussion bt">
					<li class="board">Discussion Board</li>
					<li class="red">Trending</li>
				</ul>

				<div class="music-update">
					
					<ul>
						<li class="trend_update" v-for="data in data.trending" :key="data.uuid"> 
							<img src="/assets/img/genevive.jpg" class="trend_img">
							<router-link :to="`/ourviews/details/` + data.uuid" class="lab "> {{ data.category_name }} </router-link>
							<p class="mb-0 tub"><router-link  :to="`/ourviews/details/` + data.uuid" class="trend_update1">{{ data.name }}</router-link></p>
						</li>
					</ul>
					<div class="see-more">
						<button class="loadbtn btn-bounce">See More</button>
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
			};
		},
		components: {Header, Loading},

		methods: {
		async getCategory(){
			return axios
                    .get('https://nihu.herokuapp.com/api/v1/open/views/category-detail/' +  this.$route.params.uuid)
					.then( function(response){
							return response
				})
			},
		},
	
	async created() {
			this.data = (await this.getCategory().then((res) => res.data)).message;
			if(this.data != null){
				this.isLoading = false;
			}
		// console.log(this.categories = response.message)
	}
	}
</script>