<template>
    <div id="nihu-tvshow">
		<Header/>
		<loading :active.sync="isLoading" :is-full-page="fullPage" :loader="dots"></loading>
		<div class="wrapper" v-if="!isLoading">
			<div class="row">
				<div class="col-md-1"></div>
				<div class="col-md-7">
					<div class="movie-picture">
						<a href=""><img :src="details.details.image_url" class="movie-picture1"></a>
						
					</div>
				</div>
				<div class="col-md-3">
				<div class="movie-info">
					<h4>{{ details.details.name }}</h4>
					<p></p>
					<p>{{ details.details.description }}</p>
					<p class="txt-bold1"><span class="txt-bold">Synopsis:</span> Unknown</p>
					<p class="txt-bold1"><span class="txt-bold">Release Date:</span> 12/03/2018</p>
					<p class="txt-bold1"><span class="txt-bold">Casts:</span> Hemsworth, Downey, Zoe, Don…</p>
					<p class="txt-bold1"><span class="txt-bold">Director:</span> Olatunde Ahmed</p>
					<p class="txt-bold1"><span class="txt-bold">Genre:</span> Fantacy, Action, Comedy</p>
					
				</div>
				</div>
				<div class="col-md-1"></div>
			</div>
		</div>

		<div class="container">
			
				<div class="original_content">
					
					<p class="tvshow_headtxt1">Recent TV Show</p>
					<div class="row">
						<div :key="recent.uuid" v-for="recent in details.latest" class="col-md-6">
							<div class="row ">
								<div class="col-md-6 ">
									<div class="recent_tv"> 
										<a href="tvshowview.html"> <p class="tv-author">Bayo Gee<span class="red1"> | {{ recent.created_at }} </span></p>
										<p class="tv-title">{{ recent.name }}</p>
										<p class="tv-description">{{ recent.overview }}</p></a>
									</div>
								</div>
								<div class="col-md-6">
									<li class="recent_tv"> 
										<a href="tvshowview.html"><img :src="recent.image_url"></a>
									</li>
								</div>
							</div>
						</div>					
					</div>
					<div class="see-more">
						<div class="row ">
							<div class="col-md-10 line1">
								<div class="line"></div>
							</div>
						
							<div class="col-md-2">
								<button class="loadbtn btn-bounce">See More</button>
							</div>
						</div>
					</div>

					<p class="tvshow_headtxt1">Most Viewed</p>
					<div class="row ">
						<div :key="shows.uuid" v-for="shows in details.tvshows" class="col-md-6">
							<div class="row ">
								<div class="col-md-6 ">
									<div class="recent_tv"> 
										<p class="tv-author">Bayo Gee<span class="red1"> | {{ shows.created_at }} </span></p>
										<p class="tv-title">{{ shows.name }}</p>
										<p class="tv-description">{{ shows.overview }}</p>
									</div>
								</div>
								<div class="col-md-6">
									<li class="recent_tv"> 
										<img :src="shows.image_url">
									</li>
								</div>
							</div>
						</div>
					</div>
					<div class="see-more">
						<div class="row ">
							<div class="col-md-10 line1">
								<div class="line"></div>
							</div>
						
							<div class="col-md-2">
								<button class="loadbtn btn-bounce">See More</button>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>

</template>
    
<script>

import axios from 'axios'
import Header from '../common/Header.vue'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
	data: function () {
        return {
            categories: null,
            details: [],
        };
    },
    components: {Header, Loading},
	methods: {
		async getCategoryDetails(){
			return axios
                .get('https://nihu.herokuapp.com/api/v1/open/tvshow/category-detail/' + this.$route.params.uuid)
                .then( function(response){
                        return response
            })
		},
	},
	
	async created() {
		this.details = (await this.getCategoryDetails().then((res) => res.data)).message;
		if(this.details != null){
			this.isLoading = false;
		}		
	}
}
</script>