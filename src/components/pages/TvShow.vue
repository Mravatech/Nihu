<template>
    <div id="nihu-tvshow">
				<Header/>


		<loading :active.sync="isLoading" :is-full-page="fullPage" :loader="dots"></loading>
		<div class="wrapper" v-if="!isLoading">
			<div id="demo" class="carousel slide" data-ride="carousel">
						  <ul class="carousel-indicators">
						    <li data-target="#demo" data-slide-to="0" class="active"></li>
						    <li data-target="#demo" data-slide-to="1"></li>
						    <li data-target="#demo" data-slide-to="2"></li>
						    <li data-target="#demo" data-slide-to="3"></li>
						    <li data-target="#demo" data-slide-to="4"></li>
						  </ul>
						  <div class="carousel-inner">
						    <div class="carousel-item active">
						      <img src="assets/img/jenevive_nnaji.jpg" class="content-slider" alt=" " width="100%" height="">
						      <div class="play-now1 carousel-caption">
						      	<ul class="slide-caption">
						      	<li><h1>Genevieve Nnaji on her<br> new sets on Hollywood.</h1></li><br>
						      	<li class="tvshow-txt">vero eos et accusamus et iusto odio dignissimos ducimus qui<br> blanditiis praesentium voluptatum deleniti atque corrupti quos</li><br>
						      	<li><button class="playnowbtnn hvr-bounce-in"><i class="fas fa-bars"></i> READ NOW</button></li>
						      	</ul>
						  	  </div>
						    </div>
						    <div class="carousel-item">
						      <img src="assets/img/jenevive_nnaji.jpg" class="content-slider" alt="" width="100%" height="">
						       <div class="play-now1 carousel-caption">
						      	<ul class="slide-caption">
						      	<li><h1>Genevieve Nnaji on her<br> new sets on Hollywood.</h1></li><br>
						      	<li class="tvshow-txt">vero eos et accusamus et iusto odio dignissimos ducimus qui<br> blanditiis praesentium voluptatum deleniti atque corrupti quos</li><br>
						      	<li><button class="playnowbtnn hvr-bounce-in "><i class="far fa-play-circle"></i> READ NOW</button></li>
						      	</ul>
						  	  </div>
						    </div>
						    <div class="carousel-item">
						      <img src="assets/img/jenevive_nnaji.jpg" class="content-slider" alt="" width="100%" height="">
						       <div class="play-now1 carousel-caption">
						      	<ul class="slide-caption">
						      	<li><h1>Genevieve Nnaji on her<br> new sets on Hollywood.</h1></li><br>
						      	<li class="tvshow-txt">vero eos et accusamus et iusto odio dignissimos ducimus qui<br> blanditiis praesentium voluptatum deleniti atque corrupti quos</li><br>
						      	<li><button class="playnowbtnn hvr-bounce-in "><i class="far fa-play-circle"></i> READ NOW</button></li>
						      	</ul>
						  	  </div>
						    </div>
						    <div class="carousel-item">
						      <img src="assets/img/jenevive_nnaji.jpg" class="content-slider" alt="" width="100%" height="">
						       <div class="play-now1 carousel-caption">
						      	<ul class="slide-caption">
						      	<li><h1>Genevieve Nnaji on her<br> new sets on Hollywood.</h1></li><br>
						      	<li class="tvshow-txt">vero eos et accusamus et iusto odio dignissimos ducimus qui<br> blanditiis praesentium voluptatum deleniti atque corrupti quos</li><br>
						      	<li><button class="playnowbtnn hvr-bounce-in "><i class="far fa-play-circle"></i> READ NOW</button></li>
						      	</ul>
						  	  </div>
						    </div>
						    <div class="carousel-item">
						      <img src="assets/img/jenevive_nnaji.jpg" class="content-slider" alt=" " width="100%" height="">
						       <div class="play-now1 carousel-caption">
						      	<ul class="slide-caption">
						      	<li><h1>Genevieve Nnaji on her<br> new sets on Hollywood.</h1></li><br>
						      	<li class="tvshow-txt">vero eos et accusamus et iusto odio dignissimos ducimus qui<br> blanditiis praesentium voluptatum deleniti atque corrupti quos</li><br>
						      	<li><button class="playnowbtnn hvr-bounce-in "><i class="far fa-play-circle"></i> READ NOW</button></li>
						      	</ul>
						  	  </div>
						    </div>
						  </div>
						  <a class="carousel-control-prev" href="#demo" data-slide="prev">
						    <span class="carousel-control-prev-icon"></span>
						  </a>
						  <a class="carousel-control-next" href="#demo" data-slide="next">
						    <span class="carousel-control-next-icon"></span>
						  </a>
						</div>
		</div>

		<div class="container">
			
				<div class="original_content">
					<p class="tvshow_headtxt">Find a TV Show</p>
					<ul>
						<li v-for="cat in categories" :key="cat.uuid" class="original_content1"> 
							<router-link  v-bind:to="`tvshow/category/info/` + cat.uuid" class="original_content2">{{ cat.name }}</router-link>
						</li>
					</ul>

					<p class="tvshow_headtxt1">Recent TV Show</p>
					<div class="row">
						<div class="col-md-6" :key="data.uuid" v-for="data in recent">
							<div class="row ">
								<div class="col-md-6 ">
									<div class="recent_tv"> 
										<a href=""><p class="tv-author">Bayo Gee<span class="red1"> | {{ data.created_at }} </span></p>
										<p class="tv-title">{{ data.name }}</p>
										<p class="tv-description">{{ data.overview }}</p></a>
									</div>
								</div>
								<div class="col-md-6">
									<li class="recent_tv"> 
										<a href=""><img :src="data.image_url"></a>
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
						<div class="col-md-6" v-for="data in recent" v-bind:key="data.uuid">
							<div class="row ">
								<div class="col-md-6 ">
									<div class="recent_tv"> 
										<a href=""><p class="tv-author">Bayo Gee<span class="red1"> | {{ data.created_at }} </span></p>
										<p class="tv-title">{{ data.name }}</p>
										<p class="tv-description">{{ data.overview }}</p></a>
									</div>
								</div>
								<div class="col-md-6">
									<li class="recent_tv"> 
										<a href=""><img :src="data.image_url"></a>
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
						recent: null,
        };
		},
		components: {Header, Loading},
	methods: {
		async getCategory(){
			return axios
								.get('https://nihu.herokuapp.com/api/v1/open/tvshow/list-category')
								.then( function(response){
										return response
							})
				},

		async recentTV(){
			return axios
								.get('https://nihu.herokuapp.com/api/v1/open/tvshow/list-recent')
								.then( function(response){
										return response
							})
		}
	},
	
	async created() {
		 	this.categories = (await this.getCategory().then((res) => res.data)).message;
			this.recent = (await this.recentTV().then((res) => res.data)).message;
			if(this.categories != null && this.recent != null){
				this.isLoading = false;
			}	
	}
}
</script>

