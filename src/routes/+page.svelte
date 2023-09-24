<script>
  import SkillComponent from "../lib/general/SkillComponent.svelte";
  import Title from "../lib/general/Title.svelte";
  import Hero from "../lib/home/Hero.svelte";
  import {frontend, backend, general} from '../lib/general/data';
  import Featured from "../lib/home/Featured.svelte";
  export let data;
  let image = "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
</script>

<svelte:head>
	<title>Software Developer Portfolio: Shalaw Fatah, Home page</title>
  <meta charset="UTF-8">
  <meta name="description" content="This is the portfolio of Shalaw Fatah, home page, a software Developer">
  <meta name="keywords" content="Javascript, React, Svelte, Software">
  <meta name="author" content="Shalaw Fatah">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<div class="bg-[#111727] min-h-screen">
  <Hero />
  <div class="flex flex-col justify-center items-center my-12">
    <div class="mb-8">
      <Title text="Projects" color={"white"} />
    </div>
    <div class="flex flex-wrap gap-4 justify-center">
      {#each data.data as item}
        <Featured title={item.title} description={item.content} image={item.picture} live={item.live} github={item.github} />
      {/each}
    </div>
  </div>
  <section class="bg-[#111727] gap-4 flex justify-center">
    <div class="max-w-screen-xl ">
      <div class="flex justify-center ">
        <Title text="Skills" color={"white"} />
      </div>
      <div class="flex flex-wrap justify-around my-4">
        <SkillComponent 
            title="Front-end" 
            data={frontend}
            description="Some front-end technologies that I've worked with" 
            />
        <SkillComponent 
            title="Back-end" 
            data={backend}
            description="Some back-end technologies that I've worked with" 
            />
        <SkillComponent 
            title="System Control" 
            data={general}
            description="Some general system administration technologies that I've worked with" 
            />
      </div>
    </div>
  </section>
</div>
