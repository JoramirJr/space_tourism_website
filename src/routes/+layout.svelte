<script>
	import "../app.css";
	import MobileMenu from "../components/mobile_menu.svelte";
	import { onMount } from 'svelte';
	import clsx from "clsx";
	import { base } from '$app/paths';
	
	let mobile_menu_open = false;
	let selected_page = "home";

	function handle_mobile_menu() {
		mobile_menu_open = !mobile_menu_open;
	}
	function handle_desktop_menu(new_page) {
    selected_page = new_page;
  }
</script>

<header class="flex justify-between p-default-mobile md:p-default-desktop bg-transparent fixed left-0 top-0 w-screen" >
	<img src="/assets/shared/logo.svg" width="35" height="35" alt="Space Tourism Logo" />
	<button class="min-[668px]:hidden" on:click={handle_mobile_menu} >
		<img src="/assets/shared/icon-hamburger.svg" width="25" height="25" alt="Hamburger Mobile Menu" />
	</button>
	<nav class="flex gap-[40px] h-[6em] justify-center box-border absolute text-[10px] right-0 bg-white/10 opacity-100 backdrop-blur-xl w-[60vw] max-[667px]:hidden *:h-full *:grid *:place-items-center">
		  <a href="{base}/" 
				on:click={() => { handle_desktop_menu("home") }}
			  class={clsx({ 
               "text-white border-b-[3px] border-b-white": selected_page === "home",
               "text-[#D0D6F9]": selected_page !== "home" 
            })}
			 >
        00 HOME
      </a>
			<a href="{base}/destination"
				on:click={() => { handle_desktop_menu("destination") }} 
			  class={clsx({ 
               "text-white border-b-[3px] border-b-white": selected_page === "destination",
               "text-[#D0D6F9]": selected_page !== "destination" 
            })} 
			 >
        01 DESTINATION
      </a>
			<a href="{base}/crew" 
				on:click={() => { handle_desktop_menu("crew") }}
				class={clsx({ 
						"text-white border-b-[3px] border-b-white": selected_page === "crew",
						"text-[#D0D6F9]": selected_page !== "crew" 
					})} >
        02 CREW
      </a>
			<a href="{base}/technology" 
				on:click={() => { handle_desktop_menu("technology") }}
			  class={clsx({ 
               "text-white border-b-[3px] border-b-white": selected_page === "technology",
               "text-[#D0D6F9]": selected_page !== "technology" 
            })} 
			 >
        03 TECHNOLOGY
      </a>
	</nav>
</header>
{#if mobile_menu_open}
	<MobileMenu open={mobile_menu_open} />
{/if}
<slot></slot>