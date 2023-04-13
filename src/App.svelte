<script lang="ts">
  import { onMount } from "svelte";
  import { flip } from "svelte/animate";
  import chance from "chance";
  import { questions, rolls } from "./divide";
  import Box from "./lib/Box.svelte";

  let seed: string = "ece20";
  let ques = Array.from(questions);

  const onShuffle = () => {
    const c = new chance.Chance(seed);
    ques = c.shuffle(Array.from(questions));
  };

  onMount(() => {
    setTimeout(onShuffle, 500);
  });
</script>

<div class="max-w-xs md:max-w-sm mx-auto relative pt-16 md:pt-24">
  <div class="grid grid-cols-3 gap-y-12 gap-x-1 md:gap-x-4 absolute w-full">
    {#each rolls as roll}
      <div class="col-span-3 w-full bg-zinc-800 h-24 relative rounded-xl">
        <div
          class="absolute border-2 border-lime-600 text-lime-50 px-2 py-1 rounded bg-lime-900 font-bold -top-6 left-4"
        >
          {roll}
        </div>
      </div>
    {/each}
    <div class="h-24" />
  </div>
  <div
    class="grid grid-cols-3 gap-y-12 gap-x-1 md:gap-x-4 absolute w-full px-4"
  >
    {#each ques as question (question)}
      <div animate:flip={{ duration: 1200 }}>
        <Box>{question}</Box>
      </div>
    {/each}
  </div>
</div>
<div class="fixed bottom-0 right-0 p-12">
  <input
    type="text"
    bind:value={seed}
    placeholder="Seed"
    class="rounded-l-lg rounded-r-none px-2 py-1 font-bold text-gray-700 w-24 m-0"
    autocomplete="off"
  /><button
    on:click={onShuffle}
    class="rounded-r-lg bg-sky-700 text-sky-50 font-bold px-2 py-1 uppercase"
    >Shuffle</button
  >
</div>
