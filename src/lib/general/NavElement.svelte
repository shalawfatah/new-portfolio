<script>
    import { page } from '$app/stores';
    export let path;
    export let text;

</script>

<li class="nav-element text-sm font-bold text-white" class:active={$page.url.pathname === path}>
    <a href={path}>{text}</a>
</li>

<style>
    .nav-element {
        border-bottom: 2px solid transparent;
    }
    .active {
        border-bottom: 2px solid white;
    }
</style>