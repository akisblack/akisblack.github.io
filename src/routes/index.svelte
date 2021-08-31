<svelte:head>
	<title>Home | akisblack</title>
	<meta property="og:description" content="Home | akisblack">
</svelte:head>

<script>
	let name = "akisblack";
	let sub = "Greek kid exploring the interwebz";
	import pfp from "$img/pfp.png";
	import SocialLink from '$lib/SocialLink.svelte';
	import socials from "$lib/SocialLink.json";
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