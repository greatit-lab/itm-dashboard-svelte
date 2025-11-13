<script lang="ts">
    export let title: string;
    export let description: string | null = null;
</script>

<section class="section-wrapper">
    <div class="section-header">
        <h2 class="section-title">{title}</h2>

        {#if description}
            <p class="section-description">{description}</p>
        {/if}

        <div class="divider"></div>
    </div>

    <div class="section-content">
        <slot />
    </div>
</section>

<style>
    .section-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        animation: fadeIn 0.35s ease;
    }

    .section-header {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .section-title {
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--color-text);
        letter-spacing: -0.3px;
    }

    .section-description {
        font-size: 0.9rem;
        opacity: 0.6;
        color: var(--color-text);
    }

    .divider {
        margin-top: 8px;
        height: 1px;
        width: 100%;
        background: linear-gradient(
            to right, 
            rgba(0,0,0,0.15), 
            rgba(0,0,0,0.05),
            transparent
        );
    }

    .section-content {
        margin-top: 4px;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(4px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Dark mode divider improvement */
    :global(.dark) .divider {
        background: linear-gradient(
            to right,
            rgba(255,255,255,0.18),
            rgba(255,255,255,0.08),
            transparent
        );
    }
</style>
