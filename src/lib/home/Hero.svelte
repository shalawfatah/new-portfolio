<script>
  import Github from "./Github.svelte";

</script>
<section class="bg-[#111727]">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-white">Hi, I'm Shalaw Fatah</h1>
            <h1 class="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-white">Software Developer</h1>
            <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">I've worked with frontend, backend and mobile technologies</p>
              <a href="/projects" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#111727] focus:ring-4 focus:ring-primary-300">
                Projects
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex relative">
          <div class="absolute github">
            <Github />
          </div>
          <svg  viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F2F4F8" d="M43.9,-49.3C57.3,-41.1,68.8,-27.6,73.2,-11.6C77.6,4.4,74.8,23,65.2,35.9C55.7,48.7,39.3,55.8,22.2,62.9C5,70,-12.8,77.2,-29.8,74.3C-46.8,71.4,-63,58.6,-71.1,42.2C-79.2,25.8,-79.3,5.9,-75.9,-13.3C-72.4,-32.5,-65.4,-51.1,-52.2,-59.3C-38.9,-67.5,-19.5,-65.4,-2.1,-62.9C15.3,-60.4,30.5,-57.5,43.9,-49.3Z" transform="translate(100 100)" />
          </svg>
          <svg class="absolute top-4 left-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FF7B7B" d="M30.3,-17C43.6,-7.6,61.5,5.3,64,22.8C66.5,40.3,53.6,62.4,33.9,72.9C14.1,83.4,-12.5,82.3,-28.7,70.4C-44.9,58.4,-50.8,35.7,-56.8,12.1C-62.9,-11.4,-69.1,-35.8,-59.7,-44.3C-50.3,-52.9,-25.1,-45.6,-8.3,-39C8.5,-32.4,17.1,-26.4,30.3,-17Z" transform="translate(100 100)" />
          </svg>
        </div>                
    </div>
  </section>
  
  <style>
    .github {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;
    }
  </style>