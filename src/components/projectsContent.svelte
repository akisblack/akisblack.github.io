<!--
Copyright (C) 2021 akisblack
This work is free. You can redistribute it and/or modify it under the terms
of the akisblack Software License, which can be found here: http://github.com/akisblack/akisblack-software-license.
-->

<script>
    let websiteText = "I am using this website as a chance to make my Svelte skills better.";
    let aslText = "A license that I use for my current projects."
</script>

<div class="outer-container">
    <div class="container">
        <a href="https://github.com/akisblack/akisblack.github.io" class="project-name"><i class="mdi mdi-web"></i> This Website</a>
        <h2 class="project-text">{websiteText}</h2>
    </div>

    <div class="container">
        <a href="https://github.com/akisblack/akisblack-software-license" class="project-name"><i class="mdi mdi-bank-outline"></i> akisblack Software License (ASL)</a>
        <h2 class="project-text">{aslText}</h2>
    </div>

</div>