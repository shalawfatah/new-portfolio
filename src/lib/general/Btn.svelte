<script>
    export let text;
    export let link;
    export let target;
</script>
<div class="bg-[#111727] text-white font-bold py-1 px-4 rounded-sm inline">
    <a target={target} href={link}>{text}</a>
</div>