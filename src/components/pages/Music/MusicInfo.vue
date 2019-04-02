<template>
    <div id="nihu-music">
		<Header/>

		<loading :active.sync="isLoading" :is-full-page="fullPage" :loader="dots"></loading>
		<div class="container" v-if="!isLoading">
			<div class="wrapper">
				
				<div class="music-info">
					<p class="shows-txt3">{{ details.name }} </p>
					<p class="shows-txt4">Bayo Gee <span class="red1">| 2/6/2019</span> </p>
					<div class="row">
						<div class="col-md-10 left-row">
							<img :src="details.image" class="image-info mb">
							<ul class="sharing">
								<li class="red2">359</li>
								<li><button class="sharefbbtn btn-bounce"><span><i class="fab fa-facebook-f"></i></span>  Share on Facebook</button></li>
								<li><button class="sharetwtbtn btn-bounce"><span><i class="fab fa-twitter"></i></span>  Share on Twitter</button></li>
								<li><button class="sharebtn btn-bounce"><i class="fas fa-ellipsis-h"></i></button></li>
							</ul>
							<p class="info-text">{{ details.description}}</p>

							<div class="mt mb">
								<p>DOWNLOAD AUDIO</p>
								<div class="row audio-play">
									<div class="col-md-2 d1">
										<div class="playbtn">
											<a href=""> <i class="far fa-play-circle pla"></i></a>
										</div>
									</div>
									<div class="col-md-10 d2">
									<ul class="download-section">
										
										<li class="artist">Olamide Baddo - Woske
										<p>Olamide</p>
										<button class="download-btn ">210 Downloads</button>
										</li>
										<li class="d3"><i class="fa fa-share-square"></i></li>
										<li class="d4"><button class="downloadbtn">Download</button></li>
										
									</ul>
									<ul class="line">
										<li>00:00</li>
										<li>03:44</li>
									</ul>
									</div>
								</div>
							</div>
							<div class="row">
							<div class="col-md-12 ">
								<div class="comments">
									<p align="center" class="bold">COMMENTS</p>
									<ul align="center" class="border_bottom">
										<li><a href="" class="site active">OUR SITE</a></li>
										<li><a href="" class="site"><span><i class="fab fa-facebook"></i></span> FACEBOOK</a></li>
									</ul>
									<div class="see-more">
										<button class="replybtn btn-bounce">LEAVE A REPLY</button>
									</div>
								</div>

								<!-- comments container -->
		<div class="comment_block">

		 <!-- new comment -->
		 <div class="new_comment">
			<!-- build comment -->
		 	<ul class="user_comment">

		 		<!-- current #{user} avatar -->
			 	<div class="user_avatar">
			 		<img src="/assets/img/avata.jpg">
			 	</div><!-- the comment body --><div class="comment_body">
			 		<p><span class="user">John Smith:</span><br>Gastropub cardigan jean shorts, kogi Godard PBR&B lo-fi locavore. Organic chillwave vinyl Neutra. Bushwick Helvetica cred freegan, crucifix Godard craft beer deep v mixtape cornhole Truffaut master cleanse pour-over Odd Future beard. Portland polaroid iPhone.</p>
			 	</div>

			 	<!-- comments toolbar -->
			 	<div class="comment_toolbar">
			 		<!-- inc. date and time -->
			 		<div class="comment_details">
			 			<ul>
			 				<li><i class="fa fa-clock-o"></i> 13:94</li>
			 				<li><i class="fa fa-calendar"></i> 04/01/2015</li>
			 				<li><i class="fa fa-reply"></i></li>
			 			</ul>
			 		</div><!-- inc. share/reply and love -->
			 	</div>

			 	<!-- start user replies -->
		 	<li>
		 		<!-- current #{user} avatar -->
			 	<div class="user_avatar">
			 		<img src="/assets/img/avata.jpg">
			 	</div><!-- the comment body --><div class="comment_body">
                         <div class="replied_to">
                            <p>
                                <span class="user">John Smith:</span>
                                <br>Gastropub cardigan jean shorts, kogi Godard PBR&B lo-fi locavore. Organic chillwave vinyl Neutra. Bushwick Helvetica cred freegan, crucifix Godard craft beer deep v mixtape cornhole Truffaut master cleanse pour-over Odd Future beard. Portland polaroid iPhone.
                            </p>
                        </div>That's exactly what I was thinking!
                    
			 	</div>

			 	<!-- comments toolbar -->
			 	<div class="comment_toolbar">
			 		<!-- inc. date and time -->
			 		<div class="comment_details">
			 			<ul>
			 				<li><i class="fa fa-clock-o"></i> 14:52</li>
			 				<li><i class="fa fa-calendar"></i> 04/01/2015</li>
			 				<li><i class="fa fa-reply"></i></li>
			 			</ul>
			 		</div><!-- inc. share/reply and love -->
			 	</div>
		 	</li>

		 	</ul>

		 </div>

<!-- new comment -->

		</div>

							</div>
						</div>
						</div>


						<div class="col-md-2 right-row">
							<ul>
								<li class=""><img src="/assets/img/subscribe.svg"></li>
								<li><img src="/assets/img/advert.jpg">
								Danny S - Show Baby</li>
								<li><img src="/assets/img/advert.jpg">Danny S - Show Baby</li>
								<li><img src="/assets/img/advert.jpg">Danny S - Show Baby</li>
								<li><img src="/assets/img/advert.jpg">Danny S - Show Baby</li>
								<li><img src="/assets/img/advert.jpg">Danny S - Show Baby</li>
							</ul>
						</div>
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
			};
		},
		components: {Header, Loading},

		methods: {
			async getDetails(){
                return axios
                    .get('https://nihu.herokuapp.com/api/v1/open/music/music-detail/' + this.$route.params.uuid)
                    .then( function(response){
                        return response
                })
            },
		},
		
		async created() {
			this.details = (await this.getDetails().then((res) => res.data)).message;
			if(this.details != null){
				this.isLoading = false;
			}	
		}
	}
</script>
