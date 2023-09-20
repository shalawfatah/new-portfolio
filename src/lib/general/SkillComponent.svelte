<script>
    export let title;
    export let description;
    export let data;
</script>
<div
  class="relative block lg:w-96 sm:w-auto md:w-96 rounded-lg m-4 text-white bg-[#1E2331] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
  <div class="p-10">
    <h5
      class="mb-2 text-2xl font-black leading-tight">
      {title}
    </h5>
    <p class="text-base text-gray-400 italic">
      {description}
    </p>
  </div>
  <ul class="w-full">
    {#each data as item}
    <li
      class="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-2 dark:border-opacity-5">
      {item}
    </li>
    {/each}
  </ul>
</div>