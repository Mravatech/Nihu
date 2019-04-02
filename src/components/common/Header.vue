<template>
    	<header>
			<div class="nav-bar topnav" id="myTopnav">
				<router-link to="/"><img src="/assets/img/nihu-music.svg" class="active logo-music"></router-link>
				<ul class="nav" id="myTopnav">
					<li class="nav1"><div class="searchbox nav2"><input class="form-control " name="search" type="search" placeholder="Search"><span><i class="fa fa-search"></i></span> </div> </li>
					<li class="nav1"><router-link to="/tvshow"> <img src="/assets/img/tv.svg"></router-link></li>
					<li class="nav1"><router-link to="/music"><img src="/assets/img/music-icon-red.svg"></router-link></li>
					<li class="nav1"><router-link to="/ourviews"><img src="/assets/img/team1.svg"></router-link></li>
					<li class="nav1"><router-link to="/original"><img src="/assets/img/play.svg"></router-link></li>
					<li class="nav1"><router-link to=""><img src="/assets/img/profile_img.png"></router-link></li>
					<li><a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars"></i></a></li>
				</ul>
			</div>
		</header>
</template>
<script>
export default {
	name: "Header",
}
</script>
