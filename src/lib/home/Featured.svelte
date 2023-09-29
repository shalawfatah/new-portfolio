<script>
    export let image;
    export let title;
    export let live;
    export let github;
</script>

<div class="relative">
    <img src={image} alt={title} class="opacity-60 hover:opacity-100 duration-300 w-96 h-60 rounded-lg shadow-sm shadow-gray-300" />
    <h5 class="mb-1 text-xl font-medium text-white my-4 text-center">{title}</h5>
    <div class="flex justify-center items-center">
        <div class="absolute bottom-16 flex mt-4 space-x-3 md:mt-6">
            <a target="_blank" href={live} class="shadow-md shadow-black inline-flex items-center px-8 py-2 text-sm font-black text-center text-gray-900 bg-[#FF7B7B] rounded-lg hover:bg-blue-800 hover:text-white focus:ring-4 duration-300 focus:outline-none focus:ring-blue-300 ">Live</a>
            <a target="_blank" href={github} class="shadow-md shadow-black inline-flex items-center px-8 py-2 text-sm font-black text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-blue-800 durtion-300  focus:ring-4 focus:outline-none focus:ring-gray-200 ">Github</a>
        </div>
    </div>
</div>