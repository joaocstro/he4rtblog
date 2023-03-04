<script lang="ts">
    let cardStyle: "cards" | "cards2" | "cards3" = "cards";
</script>

<div class="wrapper">
    <div class="button-wrapper">
        <button
            class:selected={cardStyle === "cards"}
            on:click={() => (cardStyle = "cards")}>Cards com sombra</button
        >
        <button
            class:selected={cardStyle === "cards2"}
            on:click={() => (cardStyle = "cards2")}>Cards sem sombra</button
        >
        <button
            class:selected={cardStyle === "cards3"}
            on:click={() => (cardStyle = "cards3")}
            >Cards com sombra + hover</button
        >
    </div>

    {#if cardStyle === "cards"}
        <div class="cards">
            <slot name="cards" />
        </div>
    {:else if cardStyle === "cards2"}
        <div class="cards2">
            <slot name="cards2" />
        </div>
    {:else}
        <div class="cards3">
            <slot name="cards3" />
        </div>
    {/if}
</div>

<style>
    .button-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    button {
        all: unset;
        font-family: monospace;
        font-size: 1rem;
        font-weight: 700;
        padding: 0.2em 0.4em;

        border-radius: 5px;

        transition: transform 0.3s cubic-bezier(0.13, 0.68, 0.51, 1.54);
        cursor: pointer;

        background-color: var(--c-elevation-2);
    }

    button.selected {
        background-color: var(--c-primary);
        color: white;
    }

    button:hover {
        transform: scale(1.025);
    }

    button:active {
        transform: scale(0.975);
    }
</style>
