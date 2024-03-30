<script>
/** @type {import('./$types').PageData} */
   export let data;
   let destinations = data.destinations;
   /** @type {'moon'|'mars'|'europa'|'titan'} */
   let selected_destiny = "moon";
   function handle_selection(new_destiny) {
      selected_destiny = new_destiny;
   }
</script>

<div class="w-screen bg-destination-mobile object-cover flex flex-col justify-start text-white p-default-mobile box-border" >
   <div class="mt-[10vh]" >
    <h5 class="font-Barlow-Condensed-Regular text-[18px] tracking-[3px] text-center" >PICK YOUR DESTINATION</h5>
   </div>
   <img class="mx-auto my-[30px]" src="/assets/destination/image-moon.webp" alt="Moon Image, Mobile" width="180" height="180">
   <div >
      <div class="flex justify-center font-Barlow-Condensed-Regular text-[18px]" >
         <button class="mx-[15px]" on:click={() => { handle_selection("moon") }} >MOON</button>
         <button class="mx-[15px]" on:click={() => { handle_selection("mars") }} >MARS</button>
         <button class="mx-[15px]" on:click={() => { handle_selection("europa") }} >EUROPA</button>
         <button class="mx-[15px]" on:click={() => { handle_selection("titan") }} >TITAN</button>
      </div>
      <div>
         {#if selected_destiny === "moon"}
            <h2 class="mt-[15px] text-center font-Bellefair-Regular text-[60px] font-extralight">
               {destinations[0].name}
            </h2>
            <h2 class="text-center font-Barlow-Condensed-Regular font-extralight text-[18px]" >
               {destinations[0].description}
            </h2>
            <hr class="border-[1px] my-[30px] border-white" >
            <div class="grid items-center" >
               <div>
                  <h4>
                     AVG. DISTANCE
                  </h4>
                  <h3>
                     {destinations[0].distance}
                  </h3>
               </div>
               <div>
                  <h4>
                     EST. TRAVEL TIME 
                  </h4>
                  <h3>
                     {destinations[0].travel}
                  </h3>
               </div>
            </div>
         {:else if selected_destiny === "mars"}
      
         {:else if selected_destiny === "europa"}

         {:else if selected_destiny === "titan"}
	         <p>just right!</p>
         {:else}
         {/if}
      </div>
   </div>
</div>
