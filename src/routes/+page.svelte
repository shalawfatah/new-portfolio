<script>
  import ContactBlock from "../lib/contact/ContactBlock.svelte";
  import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte';
  import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
  import MdEmail from 'svelte-icons/md/MdEmail.svelte';
  import IoIosPin from 'svelte-icons/io/IoIosPin.svelte';
  import SkillComponent from "../lib/general/SkillComponent.svelte";
  import Title from "../lib/general/Title.svelte";
  import Hero from "../lib/home/Hero.svelte";
  import {frontend, backend, general} from '../lib/general/data';
  import Featured from "../lib/home/Featured.svelte";
  import Github from "../lib/home/Github.svelte";
  export let data;
  console.log(data)
</script>

<svelte:head>
	<title>Software Developer Portfolio: Shalaw Fatah, Home page</title>
  <meta charset="UTF-8">
  <meta name="description" content="This is the portfolio of Shalaw Fatah, home page, a software Developer">
  <meta name="keywords" content="Javascript, React, Svelte, Software">
  <meta name="author" content="Shalaw Fatah">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>
<main class="bg-[#111727] min-h-screen">
  <Hero />
  <section class="flex flex-col justify-center items-center my-12">
    <header class="mb-8">
      <Title text="Projects" color={"white"} />
    </header>
    <article class="flex flex-wrap gap-4 justify-center">
      {#each data.data as item}
        <Featured title={item.title} description={item.content} image={item.picture} live={item.live} github={item.github} />
      {/each}
    </article>
      <a class="my-8 underline hover:text-blue-500 duration-300 cursor-pointer font-black text-white text-xl text-center" href="/projects">More Projects</a>
  </section>
  <section class="bg-[#111727] gap-4 flex justify-center">
    <div class="max-w-screen-xl ">
      <header class="flex justify-center ">
        <Title text="Skills" color={"white"} />
      </header>
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
  <section class="bg-[#111727] text-white gap-4 pb-16 flex justify-center">
    <div class="mt-12">
      <header class="flex justify-center ">
        <Title text="Contact Me" color={"white"} />
      </header>
      <div class="my-4 flex justify-center">
          <div class="flex flex-wrap justify-center gap-4">
              <ContactBlock target="_self" link="#" text="@Canada">
                  <IoIosPin />
              </ContactBlock>
              <ContactBlock link="mailto:shalaw.fatah@gmail.com" text="@shalaw.fatah">
                  <MdEmail />
              </ContactBlock>
              <ContactBlock link="https://linkedin.com/in/shalawfatah" text="@shalawfatah">
                  <FaLinkedin />
              </ContactBlock>
              <ContactBlock link="https://github.com/shalawfatah" text="@shalawfatah">
                  <DiGithubBadge />
              </ContactBlock>
          </div>
      </div>
  </div>
  </section>
</main>
