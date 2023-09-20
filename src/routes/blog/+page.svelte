<script>
    import Btn from "../../lib/general/Btn.svelte";
  
      export let data;
  </script>
  <div class="flex justify-center py-8 bg-[#111727] min-h-screen">
      <div class="max-w-screen-xl">
          <h1 class="text-4xl font-bold text-center my-4 text-white">Technical Writings</h1>
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