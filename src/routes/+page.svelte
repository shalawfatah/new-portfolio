<script>
  import SkillComponent from "../lib/general/SkillComponent.svelte";
  import Title from "../lib/general/Title.svelte";
  import Hero from "../lib/home/Hero.svelte";
  import {frontend, backend, general} from '../lib/general/data';
</script>

<svelte:head>
	<title>Software Developer Portfolio: Shalaw Fatah, Home page</title>
  <meta charset="UTF-8">
  <meta name="description" content="This is the portfolio of Shalaw Fatah, home page, a software Developer">
  <meta name="keywords" content="Javascript, React, Svelte, Software">
  <meta name="author" content="Shalaw Fatah">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<div clas="bg-[#111727] min-h-screen">
  <Hero />
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
