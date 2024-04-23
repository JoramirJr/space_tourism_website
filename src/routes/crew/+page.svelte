<svelte:head>
	<title>Crew</title>
	<meta name="description" content="Showcase of experienced pilots that work for us" />
</svelte:head>

<script>
  import clsx from "clsx";
  /** @type {import('./$types').PageData} */
  export let data;
  let crew = data.crew;
  let crew_images = crew.map((d) => d.images.png);
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
        member_name = crew[0].name;
        member_role = crew[0].role;
        member_bio = crew[0].bio;
        break;
      case "mark":
        member_src_img = crew_images[1];
        member_name = crew[1].name;
        member_role = crew[1].role;
        member_bio = crew[1].bio;
        break;
      case "victor":
        member_src_img = crew_images[2];
        member_name = crew[2].name;
        member_role = crew[2].role;
        member_bio = crew[2].bio;
        break;
      case "anousheh":
        member_src_img = crew_images[3];
        member_name = crew[3].name;
        member_role = crew[3].role;
        member_bio = crew[3].bio;
        break;
    }
  }
</script>

<svelte:head>
  <title>Technology</title>
  <meta name="description" content="Choice of travel vehicle" />
</svelte:head>

<div
  class="w-screen h-screen bg-crew-mobile bg-cover flex flex-col justify-start text-white p-default-desktop box-border sm:bg-crew-desktop sm:flex sm:flex-row-reverse sm:justify-between"
>
  <div class="mt-[10vh] flex flex-col justify-end items-center md:max-h-[80vh]">
    <h5
      class="font-Barlow-Condensed-Regular text-[18px] tracking-[3px] text-center sm:absolute sm:left-[80px] sm:top-[160px] sm:tracking-[5px] sm:text-[22px]"
    >
      <span class="text-gray-600">02</span> MEET YOUR CREW
    </h5>
    <div
      class="max-h-[40vh] w-[40vw] flex flex-col justify-end items-center md:h-[80vh] md:w-[360px] md:fixed md:bottom-0 md:right-[80px]"
    >
      <img
        class="mx-auto mt-[30px] aspect-auto"
        src={member_src_img}
        alt="Crew member image, mobile"
      />
    </div>
    <hr class="border-[1px] m-0 border-white sm:hidden" />
  </div>
  <div
    class="sm:flex sm:flex-col-reverse sm:gap-[40px] sm:ml-[40px] sm:mb-[20px] sm:max-w-[40vw]"
  >
    <div
      class="flex justify-center font-Barlow-Condensed-Regular *:gap-[5px] *:h-[10px] *:w-[10px] *:rounded-full *:mx-[10px] *:my-[30px] sm:justify-start"
    >
      <button
        class={clsx({
          "bg-white": selected_member === "douglas",
          "bg-gray-700": selected_member !== "douglas",
        })}
        on:click={() => {
          handle_selection("douglas");
        }}
      />
      <button
        class={clsx({
          "bg-white": selected_member === "mark",
          "bg-gray-700": selected_member !== "mark",
        })}
        on:click={() => {
          handle_selection("mark");
        }}
      />
      <button
        class={clsx({
          "bg-white": selected_member === "victor",
          "bg-gray-700": selected_member !== "victor",
        })}
        on:click={() => {
          handle_selection("victor");
        }}
      />
      <button
        class={clsx({
          "bg-white": selected_member === "anousheh",
          "bg-gray-700": selected_member !== "anousheh",
        })}
        on:click={() => {
          handle_selection("anousheh");
        }}
      />
    </div>
    <div>
      <div class="grid place-items-center text-center sm:text3-left sm:block">
        <div class="gap-[10px]">
          <h4
            class="font-Bellefair-Regular tracking-[1px] text-gray-600 text-[18px]"
          >
            {member_role}
          </h4>
          <h3 class="font-Bellefair-Regular text-[32px] sm:text-[36px]">
            {member_name}
          </h3>
        </div>
        <div>
          <h4 class="font-Barlow-Condensed-Regular font-extralight text-[18px]">
            {member_bio}
          </h4>
        </div>
      </div>
    </div>
  </div>
</div>
