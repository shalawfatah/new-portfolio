<script>
    export let title;
    export let description;
    export let data 
</script>

<div
  class="relative 
         block lg:w-96 
         sm:w-auto md:w-96 
        rounded-lg m-4 
       text-white bg-[#1E2331] 
         shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
         pb-10
        ">
  <div class="px-10 pt-10 pb-2">
    <h3
      class="mb-2 text-2xl font-black leading-tight">
      {title}
    </h3>
    <p class="text-base text-gray-400 italic">
      {description}
    </p>
  </div>
  <ul class="w-full">
    {#each data as item}
    <li
      class="w-full border-b-[1px] border-[#151924] px-10 p-[6px]">
      {item}
    </li>
    {/each}
  </ul>
</div>