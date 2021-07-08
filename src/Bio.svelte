<svelte:head>
	<link rel="stylesheet" href="css/Bio.css">
</svelte:head>

<script>
  export let bioText;
</script>

<main>
<div id="container">
  <div id="text">
      <a href="/" class="home">Home</a>
      <h1 class="title">Bio</h1>
      <hr class="line">
      <h2 class="sub">{bioText}</h2>

  </div>
</div>
</main>
