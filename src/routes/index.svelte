<!--
Copyright (C) 2021 akisblack
This work is free. You can redistribute it and/or modify it under the terms
of the akisblack Software License, which can be found here: http://github.com/akisblack/akisblack-software-license.
-->

<svelte:head>
	<link rel="stylesheet" href="css/index.css">
	<title>Home | akisblack</title>
	<meta property="og:description" content="Home | akisblack">
</svelte:head>

<script>
	let name = "akisblack";
	let sub = "Greek kid exploring the interwebz";
	import pfp from "$img/pfp.png";
	import SocialLink from '$components/SocialLink.svelte';
	import socials from "$components/SocialLink.json";
</script>

<div id="container">
	<img src={pfp} alt="My PFP" class="pfp">

	<div id="stuff">
		<ul>
			<li>
				<h1 class="title">{name}</h1>
				<h2 class="sub">{sub}</h2>
				<div id="social">
					<SocialLink social={socials.Discord}/>
					<SocialLink social={socials.Twitter}/>
					<SocialLink social={socials.Email}/>
					<SocialLink social={socials.GitHub}/>
					<SocialLink social={socials.Matrix}/>
				</div>
				<div id="pages">
					<a href="bio"><i class="mdi mdi-help-circle-outline"></i> Bio</a>
					<p>|</p>
					<a href="projects"><i class="mdi mdi-wrench-outline"></i> Projects</a>
					<p>|</p>
					<a href="blog"><i class="mdi mdi-book-outline"></i> Blog</a>
				</div>
			</li>
		</ul>
	</div>
</div>