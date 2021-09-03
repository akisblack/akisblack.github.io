<svelte:head>
	<title>Home | akisblack</title>
	<link rel="stylesheet" href="RemoveNav.css">
</svelte:head>

<script>
	let name = "akisblack";
	let sub = "Greek kid exploring the interwebz";
	import pfp from "$img/pfp.png";
	import socials from "$lib/Socials.json";
</script>

<div id="container">
	<img src={pfp} alt="My PFP" class="pfp">

	<div id="stuff">
		<ul>
			<li>
				<h1 class="title">{name}</h1>
				<h2 class="sub">{sub}</h2>
				<div id="social">
				{#each socials as {url, img, title} }
					<a href={url}><img src={img} alt={title}></a>
				{/each}
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

<style lang="postcss">
	#container {
		transform: translate(-50%, -50%);
		top: 50%;
		left: 50%;
		position: absolute;
		white-space: nowrap;
	}

	#stuff {
		display: inline-flex;
		vertical-align: middle;
	}

	.pfp {
		vertical-align: middle;
		height: 175px;
		border-radius: 15px;
		border: 4px solid var(--orange);
	}

	.title {
		font-size: 30px;
		color: var(--green);
	}

	.sub {
		font-size: 18px;
		color: var(--white);
		padding-bottom: 4px;
	}

	ul {
		line-height: 35px;
		list-style: none;
	}

	#social > a {
		padding-inline-end: 8px;
	}

	#pages {
		margin-top: -10px;
		font-size: 18px;
		color: var(--white);

		& > * {
			display: inline-flex;
		}
	}

	@media screen and (max-width: 750px) {

		.pfp {
			transform: translateY(-100%);
		}

		#stuff {
			text-align: center;
			left: -50%;
			position: absolute;
		}
	}
</style>