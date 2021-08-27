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
	let bioText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ad voluptatibus, eaque libero quasi distinctio quis ipsa aperiam iste facere voluptates, officia autem inventore molestias deserunt, ut quia necessitatibus vel?"
</script>

<div id="container">
	<h1 class="title">Bio</h1>
	<h2 class="bio-text">{bioText}</h2>
</div>