<script lang="ts">
    export let title: string;
    export let value: number | string;
    export let trend: number | null = null; // + or -
</script>

<div class="kpi-card group">
    <div class="kpi-title">{title}</div>

    <div class="kpi-value">
        {value}
        {#if trend !== null}
            <span class="trend {trend >= 0 ? 'up' : 'down'}">
                {trend >= 0 ? '+' + trend : trend}%
            </span>
        {/if}
    </div>
</div>

<style>
    .kpi-card {
        border-radius: 18px;
        padding: 22px;
        background: var(--color-card-bg);
        border: 1px solid var(--color-card-border);
        backdrop-filter: blur(18px);
        box-shadow:
            0 12px 28px rgba(0,0,0,0.10),
            0 6px 14px rgba(0,0,0,0.06);
        transition: all 0.28s cubic-bezier(0.4, 0.0, 0.2, 1);
        cursor: pointer;
    }

    .kpi-card:hover {
        transform: translateY(-6px) scale(1.015);
        box-shadow:
            0 18px 40px rgba(0,0,0,0.14),
            0 8px 20px rgba(0,0,0,0.1);
    }

    .kpi-title {
        font-size: 0.9rem;
        opacity: 0.65;
        font-weight: 500;
    }

    .kpi-value {
        margin-top: 12px;
        font-size: 2.4rem;
        font-weight: 700;
        color: var(--color-text);
        display: flex;
        align-items: baseline;
        gap: 12px;
    }

    .trend {
        font-size: 1rem;
        font-weight: 600;
        padding: 3px 10px;
        border-radius: 9999px;
        backdrop-filter: blur(6px);
    }

    .trend.up {
        background: rgba(34,197,94,0.15); /* green */
        color: rgb(34,197,94);
    }

    .trend.down {
        background: rgba(239,68,68,0.15); /* red */
        color: rgb(239,68,68);
    }
</style>
