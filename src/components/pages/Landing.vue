<template>
    <div id="nihu">
		<header class="header ">
			<a href="login.html">LOGIN</a>
		</header>
		<div class="container">
			<div class="wrapper">
				<div class="logo">
					<router-link to="/"><img src="assets/img/nihu-logo.svg" class="logo1"></router-link>
				</div>
				<div class="row">
					<div class="col-md-6 " >
						<div id="demo" class="carousel slide" data-ride="carousel">
						  <ul class="carousel-indicators">
						    <li data-target="#demo" data-slide-to="0" class="active"></li>
						    <li data-target="#demo" data-slide-to="1"></li>
						    <li data-target="#demo" data-slide-to="2"></li>
						  </ul>
						  <div class="carousel-inner">
						    <div class="carousel-item active">
						      <img src="assets/img/tinsel.jpg" class="shows" alt="Nihu" width="515" height="410">
						      <div class="shows-txt">
								<p class="shows-txt1"><b>Tinsel:</b> What we think about</p>
								<p class="shows-txt2">Bayo Gee <span class="red">| 2/6/2019</span> </p>
							  </div>  
						    </div>
						    <div class="carousel-item">
						      <img src="assets/img/tinsel.jpg" class="shows" alt="Nihu" width="515" height="410">
						      <div class="shows-txt">
								<p class="shows-txt1"><b>Tinsel:</b> What we think about</p>
								<p class="shows-txt2">Bayo Gee <span class="red">| 2/6/2019</span> </p>
							  </div>  
						    </div>
						    <div class="carousel-item">
						      <img src="assets/img/tinsel.jpg" class="shows" alt="Nihu" width="515" height="410">
						      <div class="shows-txt">
								<p class="shows-txt1"><b>Tinsel:</b> What we think about</p>
								<p class="shows-txt2">Bayo Gee <span class="red">| 2/6/2019</span> </p>
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
						<!-- <a href=""><img src="assets/img/tinsel.jpg" class="shows">
						<div class="shows-txt">
							<p class="shows-txt1"><b>Tinsel:</b> What we think about</p>
							<p class="shows-txt2">Bayo Gee <span class="red">| 2/6/2019</span> </p>
						</div></a> -->
					</div>
					<div class="col-md-6 categories" >
						<ul class="home-icon">
							<li class="hvr-bounce-in home-icon1"><router-link  to="/tvshow"><img src="assets/img/tv-show.svg" class="category1">
								</router-link>
							</li>
							<li class="hvr-bounce-in home-icon1"><router-link to="/music"><img src="assets/img/music.svg" class="category1">
								</router-link>
							</li>
						</ul>
						<ul class="home-icon">
							<li class="hvr-bounce-in home-icon1"><router-link to="/ourviews"><img src="assets/img/our-views.svg" class="category1">
								</router-link>
								</li>
							<li class="hvr-bounce-in home-icon1"><router-link to="/original"><img src="assets/img/original-content.svg" class="category1">
								</router-link>
								</li>
						</ul>
					
					</div>
					
				</div>
	
			</div>
		</div>
	</div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400');
body{
	margin: 0;
	padding: 0;
	background-color: #1a1a1a !important;
	height: 100vh;
	font-family: 'Montserrat', sans-serif;
}
#nihu{
	background-color: #1a1a1a;
	height: 100vh;
	font-family: 'Montserrat', sans-serif;
}
.header{
	display: flex;
	justify-content: flex-end;
	text-align: right;
	padding: 1.5em;
}
.header a{
	color: #fff;
	font-size: 18px;
}
.header a:hover{
	color: #EB0028;
}
.container{
	padding: 3em 20em 0 20em;
	display: flex;
	justify-content: center;
	min-height: 85%;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  padding: 0em 1em;
}
a{
	text-decoration: none !important;
	color: #fff;
	font-family: 'Montserrat', sans-serif;
}
p{
	font-family: 'Montserrat', sans-serif;
}
.logo{
	margin-top: 1em;
	margin-bottom: 2em;
	text-align: center;
}
.logo1{
	width: 12em;
}
.carousel-inner img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
}
.home-icon{
	/*padding: 0;
	margin: 0;*/
}

.shows{
	border-radius: 15px;
}
/* Bounce In */
.hvr-bounce-in {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
.hvr-bounce-in:hover, .hvr-bounce-in:focus, .hvr-bounce-in:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
}
.shows-txt{
	position: absolute;
	z-index: 1;
	color: #fff;
	margin-top: -80px;
	padding: 1em 1.5em;
	width: 100%;
	background-image: linear-gradient(-180deg, rgba(0,0,0,0.00) 0%, #000000 100%);
}
.shows-txt1{
	z-index: 1;
	color: #fff;
	font-size: 22px;
	line-height: 0.5em;
}
.shows-txt2{
	z-index: 1;
	color: #fff;
	font-size: 14px;
	line-height: 0.5em;
}
.red{
	color: red;
}
.category{
	color: #fff;
	font-size: 14px;
	text-align: center;
}
footer{
	vertical-align: text-bottom;
}
.foot{
	height: 30px;
	position: relative;
	vertical-align: text-bottom;
    flex-shrink: 0;
}
.copyright{
	text-align: center;
	color: gray;
	/*margin-top: 5em;*/
	font-size: 12px;
}
</style>
