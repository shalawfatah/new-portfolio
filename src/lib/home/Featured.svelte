<script>
    export let image;
    export let title;
    export let description;
    export let live;
    export let github;
</script>

<div style="background:linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url({image}); background-size:cover; background-position:center;" class="w-full max-w-sm bg-white border-4 border-gray-200 rounded-lg shadow p-2">
    <div class="flex flex-col items-center pb-2">
        <h5 class="mb-1 text-xl font-medium text-white">{title}</h5>
        <p class="p-4 text-sm text-white">{@html description.split(' ').slice(0, 32).join(' ') + ' --- More in projects page...'}</p>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <a href={live} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-[#FF7B7B] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Live</a>
            <a href={github} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ">Github</a>
        </div>
    </div>
</div>
