<svelte:options customElement="my-btn" />

<script>
  import "../app.css";
  export let btnText = "Button";
  let btnRef;

  function handleBtnClick(e) {
    const event = new CustomEvent("resetCnt", {
      detail: { message: "reset" },
      bubbles: true, // Event will bubble up through the DOM
      composed: true, // Event will cross shadow DOM boundaries
    });
    console.log("event", event);

    e?.target?.dispatchEvent(event);
    // the dispatchEvent method is to be called on the element
  }
</script>

<button on:click={handleBtnClick} bind:this={btnRef} class="font-bold">
  {btnText}
</button>
