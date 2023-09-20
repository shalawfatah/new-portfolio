<script>
  import Btn from "../../lib/general/Btn.svelte";

    export let data;
</script>
<div class="bg-[#111727] py-8  min-h-screen">
    <div class="max-w-screen-xl mx-auto">
        <h1 class="text-4xl font-bold text-center text-white">Sample Projects</h1>
        {#each data.data as project}
        <a href={`projects/${project.id}`}>
            <div class="bg-[#2f3852] shadow-md shadow-[#2e2d45] m-4 p-4 rounded-md hover:bg-[#34509C] transition-all duration-300">
                <h2 class="text-2xl font-bold text-white">{project.title}</h2>
                <div class="flex gap-x-3 text-xs my-4">
                    {#each project.techstack as item}
                    <p class="bg-gray-200 px-2 rounded-sm">{item}</p>
                    {/each}
                </div>
            </div>
        </a>
        {/each}
    </div>
</div>