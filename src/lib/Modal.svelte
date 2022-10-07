<script>
    import { Button, Modal } from "carbon-components-svelte";

    // let open = false;
    export let src, alt, open
    const origButton = '<Button kind="tertiary" on:click={() => (open = true)}>Learn more</Button>'
</script>

<Modal 
    passiveModal 
    bind:open 
    on:open 
    on:close={() => open = false}
    size="lg"
    >
    <img {alt} {src} class="modal-image" />
</Modal>

<style>
    .modal-image { 
        height: 97%;
        width: 97%;
        object-fit: contain;
    }
</style>