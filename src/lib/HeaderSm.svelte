<script>
  import {
    Header,
    SkipToContent,
  } from "carbon-components-svelte";
  import "carbon-components-svelte/css/all.css";
	import Nogo from "./Nogo.svelte";
	import DIogo from "./DIogo.svelte";
  import Nonlyogo from "./Nonlyogo.svelte";
  let innerWidth = 0
</script>

<svelte:window bind:innerWidth  />

<Header
  >
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <a href="https://newberry.org">
    {#if innerWidth > 800}
    <Nogo />
    {:else}
    <Nonlyogo />
    {/if}
    </a>
  <a href="https://collections.newberry.org">
    {#if innerWidth > 800}
    <h1>Digital Collections</h1>
    {:else}
    <DIogo />
    {/if}
  </a>
</Header>
  
<style>
  a {
    text-decoration: none !important;
  }
  a:hover {
    text-decoration: none !important;
  }
  h1 {
    color: var(--colorZero);
    padding-left: 70px;
    font-family: 'Flecha M Medium';
  }
</style>