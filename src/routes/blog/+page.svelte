<script>
    export let data;
</script>

<svelte:head>
	<title>Software Developer Portfolio: Shalaw Fatah, Blog page</title>
  <meta charset="UTF-8">
  <meta name="description" content="This is the portfolio of Shalaw Fatah, blog page, a software Developer">
  <meta name="keywords" content="Javascript, React, Svelte, Software">
  <meta name="author" content="Shalaw Fatah">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

  <div class="flex justify-center py-4 bg-[#111727] min-h-screen">
      <div class="max-w-screen-xl">
            <h1 class="text-4xl font-bold text-center mb-4 text-white">Technical Writings</h1>
          {#each data.data as blog}
          <a href={blog.link} target="_blank" class="text-white" >
              <div class="shadow-md shadow-[#373737] m-4 p-8 rounded-md bg-[#1e2331] hover:bg-[#354676] duration-300">
                  <h2 class="text-2xl font-bold ">{blog.title}</h2>
                  <p class="my-2">{blog.excerpt}</p>
              </div>
          </a>
          {/each}
      </div>
  </div>