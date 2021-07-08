<svelte:head>
	<link rel="stylesheet" href="css/App.css">
</svelte:head>

<script>
	export let name;
	let pfp = "img/pfp.png";
	export let sub;
	let discordLink = "https://discord.gg/Mc9RUxwPrF";
	let twitterLink = "https://twitter.com/akisblack_";
	let emailLink = "mailto:akisblack0@gmail.com";
	let githubLink = "https://github.com/akisblack";
	let discord = "img/discord.svg";
	let twitter = "img/twitter.svg";
	let email = "img/gmail.svg";
	let github = "img/git.svg";
	export let green;
	export let white;
	import Webring from './components/Webring.svelte';
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
						<a href={discordLink}><img src={discord} alt="My Discord server" class="discord"></a>
						<a href={twitterLink}><img src={twitter} alt="My Twitter" class="social"></a>
						<a href={emailLink}><img src={email} alt="My e-Mail" class="social"></a>
						<a href={githubLink}><img src={github} alt="My GitHub" class="social"></a>
					</div>
					<div id="pages">
						<a style="color:{green};" class="bio" href="bio.html">Bio</a>
						<p style="color:{white};" class="line">|</p>
						<a style="color:{green};" class="projects" href="projects.html">Projects</a>
					</div>
                </li>
            </ul>
        </div>
    </div>
<Webring />
</main>