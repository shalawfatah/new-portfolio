<script>
    export let link;
    export let text;
    export let target = "_blank"
</script>

<div class="hover:bg-gray-800 trasnition-all duration-300 icon rounded-md shadow-sm shadow-gray-200 p-4">
    <a href={link} target={target}>
        <div class="w-24 mx-auto">
            <slot />
        </div>
        <div>
            <p>{text}</p>
        </div>
    </a>
</div>