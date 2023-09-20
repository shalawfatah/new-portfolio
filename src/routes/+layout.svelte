<script>
    import "../app.css";
  import NavElement from "../lib/general/NavElement.svelte";

    const menu_items = [
      {id: 1, text: 'Home', path: '/'},
      {id: 2, text: 'Projects', path: '/projects'},
      {id: 3, text: 'Blog', path: '/blog'},
      {id: 4, text: 'Contact', path: '/contact'},
    ]
  </script>
  
  <nav>
    <ul class="flex justify-center items-center gap-8 py-4 bg-[#111727]">
      {#each menu_items as item}
        <NavElement path={item.path} text={item.text} />
      {/each}
    </ul>
  </nav>
  <slot />