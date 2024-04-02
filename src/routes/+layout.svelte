<script>
	import "../app.css";
	import MobileMenu from "../components/mobile_menu.svelte";
	import { onMount } from 'svelte';
	
	let menu_open = false;

	function handle_menu() {
		menu_open = !menu_open;
	}
</script>

<header class="flex justify-between p-[20px] bg-transparent fixed left-0 top-0 w-screen" >
	<img src="/assets/shared/logo.svg" width="35" height="35" alt="Space Tourism Logo" />
	<button class="min-[668px]:hidden" on:click={handle_menu} >
		<img src="/assets/shared/icon-hamburger.svg" width="25" height="25" alt="Hamburger Mobile Menu" />
	</button>
	<nav class="absolute font-extralight right-0 bg-white/10 opacity-100 backdrop-blur-xl w-[60vw] max-[667px]:hidden">
		  <a href="/" 
			  class={clsx({ 
               "text-white border-b-[3px] border-b-white": selected_destiny === "moon",
               "text-[#D0D6F9]": selected_destiny !== "moon" 
            })} 
			 >
        HOME
      </a>
			<a href="/destination" 
			  class={clsx({ 
               "text-white border-b-[3px] border-b-white": selected_destiny === "moon",
               "text-[#D0D6F9]": selected_destiny !== "moon" 
            })} 
			 >
        DESTINATION
      </a>
			   <a href="/crew" 
				   class={clsx({ 
               "text-white border-b-[3px] border-b-white": selected_destiny === "moon",
               "text-[#D0D6F9]": selected_destiny !== "moon" 
            })} 
				  >
        CREW
      </a>
			<a href="/technology" 
			  class={clsx({ 
               "text-white border-b-[3px] border-b-white": selected_destiny === "moon",
               "text-[#D0D6F9]": selected_destiny !== "moon" 
            })} 
			 >
        TECHNOLOGY
      </a>
	</nav>
</header>
{#if menu_open}
	<MobileMenu open={menu_open} />
{/if}
<slot></slot>