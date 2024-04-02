<script>
   import clsx from "clsx";
/** @type {import('./$types').PageData} */
   export let data;
   let destinations = data.destinations;
   let destinations_images = destinations.map(d => d.images.png);
   /** @type {'moon'|'mars'|'europa'|'titan'} */
   let selected_destiny = "moon";

   let planet_src_img;
   let destination_name;
   let destination_description;
   let destination_distance;
   let destination_travel;
   function handle_selection(new_destiny) {
      selected_destiny = new_destiny;
   }
   $: {
      switch (selected_destiny) {
         case "moon":
            planet_src_img = destinations_images[0];
            destination_name =  destinations[0].name;
            destination_description = destinations[0].description
            destination_distance = destinations[0].distance
            destination_travel = destinations[0].travel
         break;
         case "mars":
            planet_src_img = destinations_images[1];
            destination_name =  destinations[1].name;
            destination_description = destinations[1].description
            destination_distance = destinations[1].distance
            destination_travel = destinations[1].travel
         break;
         case "europa":
            planet_src_img = destinations_images[2];
            destination_name =  destinations[2].name;
            destination_description = destinations[2].description
            destination_distance = destinations[2].distance
            destination_travel = destinations[2].travel
         break;
         case "titan":
            planet_src_img = destinations_images[3];
            destination_name =  destinations[3].name;
            destination_description = destinations[3].description
            destination_distance = destinations[3].distance
            destination_travel = destinations[3].travel
         break;
      }
   }
</script>

<div class="w-screen bg-destination-mobile bg-cover flex flex-col justify-start text-white p-default-mobile box-border" >
   <div class="mt-[10vh]" >
    <h5 class="font-Barlow-Condensed-Regular text-[18px] tracking-[3px] text-center" >PICK YOUR DESTINATION</h5>
   </div>
   <img class="mx-auto my-[30px]" src={planet_src_img} alt="Moon Image, Mobile" width="180" height="180">
   <div >
      <div class="flex justify-center font-Barlow-Condensed-Regular text-[18px] *:mx-[15px]" >
         <button 
            class={clsx({ 
               "text-white border-b-[3px] border-b-white": selected_destiny === "moon",
               "text-[#D0D6F9]": selected_destiny !== "moon" 
            })} 
            on:click={() => { handle_selection("moon")
         }} >
            MOON
         </button>
         <button 
            class={clsx({ 
               "text-white border-b-[3px] border-b-white": selected_destiny === "mars", 
               "text-[#D0D6F9]": selected_destiny !== "mars" 

            })} 
            on:click={() => { handle_selection("mars")
         }} >
            MARS
         </button>
         <button 
            class={clsx({ 
               "text-white border-b-[3px] border-b-white": selected_destiny === "europa",
               "text-[#D0D6F9]": selected_destiny !== "europa" 
            })} 
            on:click={() => { handle_selection("europa")
         }} >
            EUROPA
         </button>
         <button 
            class={clsx({ 
               "text-white border-b-[3px] border-b-white": selected_destiny === "titan",
               "text-[#D0D6F9]": selected_destiny !== "titan"
            })} 
            on:click={() => { handle_selection("titan")
         }} >
            TITAN
         </button>
         
      </div>
      <div>
            <h2 class="mt-[15px] text-center font-Bellefair-Regular text-[60px] font-extralight">
               {destination_name}
            </h2>
            <h2 class="text-center font-Barlow-Condensed-Regular font-extralight text-[18px]" >
               {destination_description}
            </h2>
            <hr class="border-[1px] my-[30px] border-white" >
            <div class="grid place-items-center gap-[20px] text-center" >
               <div class="gap-[10px]" >
                  <h4 class="font-Barlow-Condensed-Regular font-extralight tracking-[3px] text-[18px] " >
                     AVG. DISTANCE
                  </h4>
                  <h3 class="font-Bellefair-Regular text-[32px]" >
                     {destination_distance}
                  </h3>
               </div>
               <div class="gap-[10px]" >
                  <h4 class="font-Barlow-Condensed-Regular font-extralight tracking-[3px] text-[18px] " >
                     EST. TRAVEL TIME 
                  </h4>
                  <h3 class="font-Bellefair-Regular text-[32px]" >
                     {destination_travel}
                  </h3>
               </div>
            </div>
      </div>
   </div>
</div>
