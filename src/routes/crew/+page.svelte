<script>
   import clsx from "clsx";
/** @type {import('./$types').PageData} */
   export let data;
   let crew = data.crew;
   let crew_images = crew.map(d => d.images.png);
   /** @type {'douglas'|'mark'|'victor'|'anousheh'} */
   let selected_member = "douglas";

   let member_src_img;
   let member_name;
   let member_role;
   let member_bio;
   function handle_selection(new_selection) {
      selected_member = new_selection;
   }
   $: {
      switch (selected_member) {
         case "douglas":
            member_src_img = crew_images[0];
            member_name =  crew[0].name;
            member_role = crew[0].role
            member_bio = crew[0].bio
         break;
         case "mark":
            member_src_img = crew_images[1];
            member_name =  crew[1].name;
            member_role = crew[1].role
            member_bio = crew[1].bio
         break;
         case "victor":
            member_src_img = crew_images[2];
            member_name =  crew[2].name;
            member_role = crew[2].role
            member_bio = crew[2].bio
         break;
         case "anousheh":
            member_src_img = crew_images[3];
            member_name =  crew[3].name;
            member_role = crew[3].role
            member_bio = crew[3].bio
         break;
      }
   }
</script>

<div class="w-screen bg-destination-mobile object-cover flex flex-col justify-start text-white p-default-mobile box-border" >
   <div class="mt-[10vh]" >
    <h5 class="font-Barlow-Condensed-Regular text-[18px] tracking-[3px] text-center" ><span>02</span> MEET YOUR CREW</h5>
   </div>
   <img class="mx-auto my-[30px]" src={member_src_img} alt="Crew member image, mobile" width="180" height="180">
   <hr class="border-[1px] border-white" >
</div>
