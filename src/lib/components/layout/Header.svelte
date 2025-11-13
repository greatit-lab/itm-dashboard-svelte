<script>
    import Icon from "@iconify/svelte";
</script>

<div class="header-bar">
    <div class="title">Home Dashboard</div>

    <button class="theme-btn">
        <Icon icon="mdi-theme-light-dark" />
    </button>
</div>

<style>
    .header-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
    }

    .title {
        font-size: 22px;
        font-weight: 600;
    }

    .theme-btn {
        padding: 8px 12px;
        border-radius: 8px;
        background: var(--card-bg);
        border: 1px solid var(--border-color);
    }
</style>
