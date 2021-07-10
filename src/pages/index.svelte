<svelte:head>
	<link rel="stylesheet" href="../css/index.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="UTF-8">
	<title>Home | akisblack</title>
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<meta property="og:url" content="https://akisblack.github.io">
	<meta property="og:type" content="article">
	<meta property="og:title" content="akisblack's site">
	<meta name="theme-color" content="#ffffff" />
	<meta property="og:description" content="Home | akisblack">
	<meta name="description" content="akisblack's site">
	<meta name="author" content="akisblack">
	<link rel="icon" type="image/png" href="./img/favicon.png">
</svelte:head>

<script>
	let name = "akisblack";
	let sub = "Greek kid exploring the interwebz";
	let pfp = "img/pfp.png";
	let discordLink = "https://discord.gg/Mc9RUxwPrF";
	let twitterLink = "https://twitter.com/akisblack_";
	let emailLink = "mailto:akisblack0@gmail.com";
	let githubLink = "https://github.com/akisblack";
	let discord = "img/discord.svg";
	let twitter = "img/twitter.svg";
	let email = "img/gmail.svg";
	let github = "img/git.svg";
	let green = "#0bf574";
	let white = "#fff";
	import Webring from "./_components/Webring.svelte";
</script>

<body>
<div id="container">
        <img src={pfp} alt="My PFP" class="pfp">

        <div id="stuff">
            <ul>
                <li>
                    <h1 class="title">{name}</h1>
                    <h2 class="sub">{sub}</h2>
					<div id="social">
						<a href={discordLink}><img src={discord} alt="My Discord server" class="discord"></a>
						<a href={twitterLink}><img src={twitter} alt="My Twitter" class="social"></a>
						<a href={emailLink}><img src={email} alt="My e-Mail" class="social"></a>
						<a href={githubLink}><img src={github} alt="My GitHub" class="social"></a>
					</div>
					<div id="pages">
						<a style="color:{green};" class="bio" href="bio/">Bio</a>
						<p style="color:{white};" class="line">|</p>
						<a style="color:{green};" class="projects" href="projects/">Projects</a>
					</div>
                </li>
            </ul>
        </div>
    </div>
<Webring />
</body>