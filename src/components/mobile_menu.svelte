<script>
  export let open = false; 
  
  function handle_menu() {
		open = !open;
	}
</script>
{#if open}
  <div class="z-10 text-white p-[20px] absolute w-[254px] right-0 top-0 h-screen bg-white/10 opacity-100 backdrop-blur-xl" >
    <div class="flex justify-end">
      <button on:click={handle_menu} >
      <img src="/assets/shared/icon-close.svg" alt="Close mobile menu icon" />
      </button>
    </div>
    <div class="font-Barlow-Condensed-Regular text-[20px] mt-[60px] p-[20px] flex flex-col gap-[20px] w-full *:w-full *:flex *:gap-[10px]" >
      <h3>
        <b>00</b>
        <a href="/" class="font-extralight " >
          HOME
        </a >
      </h3>
      <h3>
        <b>01</b>
        <a href="/destination" class="font-extralight " >
          DESTINATION
        </a >
      </h3>
      <h3>
        <b>02</b>
        <a href="/crew" class="font-extralight " >
          CREW
        </a >
      </h3>
      <h3>
        <b>03</b>
        <a href="/technology" class="font-extralight " >
          TECHNOLOGY
        </a >
      </h3>
    </div>
  </div>
{/if}
