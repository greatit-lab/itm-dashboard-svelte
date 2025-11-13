<script>
    import Icon from "@iconify/svelte";
</script>

<nav class="menu">

    <div class="title">ITM Dashboard</div>

    <a href="/" class="item">
        <Icon icon="mdi-view-dashboard" /> Dashboard
    </a>

    <a href="/equipment" class="item">
        <Icon icon="mdi-cog" /> Equipment Specs
    </a>

    <a href="/lamp-life" class="item">
        <Icon icon="mdi-lightbulb" /> Lamp Life
    </a>

    <a href="/performance" class="item">
        <Icon icon="mdi-chart-line" /> Performance Trend
    </a>
</nav>

<style>
    .menu {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border-radius: 8px;
        cursor: pointer;
        color: var(--sidebar-text);
    }

    .item:hover {
        background: rgba(255,255,255,0.1);
    }
</style>
