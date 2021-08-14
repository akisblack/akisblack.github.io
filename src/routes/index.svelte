<svelte:head>
	<link rel="stylesheet" href="/css/index.css">
	<title>Home | akisblack</title>
	<meta property="og:description" content="Home | akisblack">
</svelte:head>

<script>
	let name = "akisblack";
	let sub = "Greek kid exploring the interwebz";
	let pfp = "img/pfp.png";
	let discordLink = "https://discord.gg/Mc9RUxwPrF";
	let twitterLink = "https://twitter.com/akisblack_";
	let emailLink = "mailto:akisblack0@gmail.com";
	let githubLink = "https://github.com/akisblack";
	let matrixLink = "https://matrix.to/#/@akisblack_:matrix.org";
	let discord = "img/discord.svg";
	let twitter = "img/twitter.svg";
	let email = "img/mail.svg";
	let github = "img/github.svg";
	let matrix = "img/matrix.svg";
	let green = "#0bf574";
	let white = "#fff";
	</script>

<main>
	<div id="container">
		<img src={pfp} alt="My PFP" class="pfp">
	
		<div id="stuff">
			<ul>
				<li>
					<h1 class="title">{name}</h1>
					<h2 class="sub">{sub}</h2>
					<div id="social">
						<a href={discordLink}><img src={discord} alt="My Discord server"></a>
						<a href={twitterLink}><img src={twitter} alt="My Twitter"></a>
						<a href={emailLink}><img src={email} alt="My e-Mail"></a>
						<a href={githubLink}><img src={github} alt="My GitHub"></a>
						<a href={matrixLink}><img src={matrix} alt="My Matrix"></a>
					</div>
					<div id="pages">
						<a style="color:{green};" class="bio" href="bio/"><i class="mdi mdi-help-circle-outline"></i> Bio</a>
						<p style="color:{white};" class="line">|</p>
						<a style="color:{green};" class="projects" href="projects/"><i class="mdi mdi-wrench-outline"></i> Projects</a>
					</div>
				</li>
			</ul>
		</div>
	</div>
</main>