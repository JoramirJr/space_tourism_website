<script>
  import clsx from "clsx";
  /** @type {import('./$types').PageData} */
  export let data;
  let technology = data.technology;

  /** @type {'vehicle'|'capsule'|'port'} */
  let selected_tech = "vehicle";

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
        tech_name = technology[0].name;
        tech_description = technology[0].description;
        break;
      case "capsule":
        tech_name = technology[1].name;
        tech_description = technology[1].description;
        break;
      case "port":
        tech_name = technology[2].name;
        tech_description = technology[2].description;
        break;
    }
  }
</script>

<svelte:head>
  <title>Technology</title>
  <meta name="description" content="Choice of travel vehicle" />
</svelte:head>
<div
  class="w-screen h-screen bg-technology-mobile bg-cover flex flex-col justify-start text-white box-border sm:bg-technology-desktop sm:flex-row-reverse sm:items-center sm:justify-between sm:pt-[20vh]"
>
  <div class="mt-[10vh]">
    <h5
      class="font-Barlow-Condensed-Regular text-[18px] tracking-[3px] text-center sm:absolute sm:left-[80px] sm:top-[160px] sm:tracking-[5px] sm:text-[22px]"
    >
      <span class="text-gray-600">03 </span>SPACE LAUNCH 101
    </h5>
  </div>
  <div
    class={clsx(
      "w-screen h-[25vh] bg-cover my-[30px] sm:w-[55vw] sm:h-[65vh]",
      {
        "portrait:bg-technology-vehicle-landscape": selected_tech === "vehicle",
        "landscape:bg-technology-vehicle-portrait": selected_tech === "vehicle",
        "landscape:bg-technology-port-portrait": selected_tech === "port",
        "portrait:bg-technology-port-landscape": selected_tech === "port",
        "landscape:bg-technology-capsule-portrait": selected_tech === "capsule",
        "portrait:bg-technology-capsule-landscape": selected_tech === "capsule",
      },
    )}
  ></div>
  <div
    class="sm:flex sm:justify-between sm:w-full sm:pl-[7vw] sm:h-[50vh] sm:pt-[8vh]"
  >
    <div
      class="flex justify-center font-Bellefair-Regular *:gap-[5px] *:h-[40px] *:w-[40px] *:rounded-full *:mx-[10px] *:my-[5px] sm:flex-col sm:gap-[10px] sm:*:h-[50px] sm:*:w-[50px] sm:justify-start"
    >
      <button
        class={clsx({
          "bg-white text-[#0B0D17]": selected_tech === "vehicle",
          "bg-transparent border-[1px] border-gray-100":
            selected_tech !== "vehicle",
        })}
        on:click={() => {
          handle_selection("vehicle");
        }}
      >
        1
      </button>
      <button
        class={clsx({
          "bg-white text-[#0B0D17]": selected_tech === "port",
          "bg-transparent border-[1px] border-gray-100":
            selected_tech !== "port",
        })}
        on:click={() => {
          handle_selection("port");
        }}
      >
        2
      </button>
      <button
        class={clsx({
          "bg-white text-[#0B0D17]": selected_tech === "capsule",
          "bg-transparent border-[1px] border-gray-100":
            selected_tech !== "capsule",
        })}
        on:click={() => {
          handle_selection("capsule");
        }}
      >
        3
      </button>
    </div>
    <div class="sm:mx-[5vw]">
      <h5
        class="font-Barlow-Condensed-Regular text-[16px] tracking-[3px] text-center mt-[20px] sm:text-start"
      >
        THE TERMINOLOGY...
      </h5>
      <h3
        class="my-auto font-Bellefair-Regular text-[25px] text-center sm:text-[40px] sm:text-start"
      >
        {tech_name}
      </h3>
      <h4
        class="font-Barlow-Condensed-Regular mt-[10px] font-extralight text-[16px] text-center px-default-mobile sm:text-start sm:px-0"
      >
        {tech_description}
      </h4>
    </div>
  </div>
</div>
