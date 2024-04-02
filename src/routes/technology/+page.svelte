<script>
   import clsx from "clsx";
/** @type {import('./$types').PageData} */
   export let data;
   let technology = data.technology;
   let landscape_tech_images = technology.map(d => d.images.landscape);
   /** @type {'vehicle'|'capsule'|'port'} */
   let selected_tech = "vehicle";

   let tech_src_img;
   let tech_name;
   let tech_description;
   let tech_distance;
   let tech_travel;
   function handle_selection(new_selection) {
      selected_tech = new_selection;
   }
   $: {
      switch (selected_tech) {
         case "vehicle":
            tech_src_img = landscape_tech_images[0];
            tech_name =  technology[0].name;
            tech_description = technology[0].description
         break;
         case "capsule":
            tech_src_img = landscape_tech_images[1];
            tech_name =  technology[1].name;
            tech_description = technology[1].description
         break;
         case "port":
            tech_src_img = landscape_tech_images[2];
            tech_name =  technology[2].name;
            tech_description = technology[2].description
         break;
      }
   }
</script>

<div class="w-screen h-screen bg-technology-mobile bg-cover flex flex-col justify-start text-white box-border" >
   <div class="mt-[10vh]" >
    <h5 class="font-Barlow-Condensed-Regular text-[18px] tracking-[3px] text-center" ><span class="text-gray-600">03 </span>SPACE LAUNCH 101</h5>
   </div>
   <img class="w-screen object-fit my-[30px]" src={tech_src_img} alt="Technology image" height="200">
   <div>
      <div class="flex justify-center font-Bellefair-Regular *:gap-[5px] *:h-[40px] *:w-[40px] *:rounded-full *:mx-[10px] *:my-[5px]" >
      <button 
         class={clsx({ 
            "bg-white text-[#0B0D17]": selected_tech === "vehicle",
            "bg-transparent border-[1px] border-gray-100": selected_tech !== "vehicle" 
         })} 
         on:click={() => { handle_selection("vehicle")
      }}>
         1
      </button>
      <button 
         class={clsx({ 
            "bg-white text-[#0B0D17]": selected_tech === "port", 
            "bg-transparent border-[1px] border-gray-100": selected_tech !== "port" 

         })} 
         on:click={() => { handle_selection("port")
      }}>
         2
      </button>
      <button 
         class={clsx({ 
            "bg-white text-[#0B0D17]": selected_tech === "capsule",
            "bg-transparent border-[1px] border-gray-100": selected_tech !== "capsule" 
         })} 
         on:click={() => { handle_selection("capsule")
      }}>
         3
      </button>
   </div>
       <h5 class="font-Barlow-Condensed-Regular text-[16px] tracking-[3px] text-center mt-[20px]" >THE TERMINOLOGY...</h5>
        <h3 class="my-auto font-Bellefair-Regular text-[25px] text-center" >
            {tech_name}
        </h3>
        <h4 class="font-Barlow-Condensed-Regular mt-[10px] font-extralight text-[16px] text-center px-default-mobile" >
            {tech_description}
        </h4>
   </div>
</div>
