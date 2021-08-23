<!--
Copyright (C) 2021 akisblack
This work is free. You can redistribute it and/or modify it under the terms
of the akisblack Software License, which can be found here: http://github.com/akisblack/akisblack-software-license.
-->

<svelte:head>
	<link rel="stylesheet" href="/css/pages.css">
	<title>Bio | akisblack</title>
	<meta property="og:description" content="Bio | akisblack">
</svelte:head>

<script>
	let bioText = "Not done yet."
</script>

<main>
	<div id="container">
		<div id="stuff">
			<a href="/" class="home"><i class="mdi mdi-home-outline"></i> Home</a>
			<h1 class="title">Bio</h1>
			<hr class="line">
			<h2 class="bio-text">{bioText}</h2>
		</div>
	</div>
</main>
