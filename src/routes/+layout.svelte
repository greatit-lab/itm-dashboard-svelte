<script>
    import Sidebar from "$lib/components/layout/Sidebar.svelte";
    import Header from "$lib/components/layout/Header.svelte";
</script>

<div class="layout">
    
    <!-- LEFT SIDEBAR -->
    <aside class="sidebar">
        <Sidebar />
    </aside>

    <!-- RIGHT SIDE MAIN -->
    <div class="main">

        <!-- TOP HEADER -->
        <header class="top-header">
            <Header />
        </header>

        <!-- PAGE CONTAINER -->
        <main class="page-container">
            <div class="content-wrapper">
                <slot />
            </div>
        </main>

    </div>
</div>

<style>
    /* 전체 레이아웃 Grid */
    .layout {
        display: grid;
        grid-template-columns: 250px 1fr;
        grid-template-rows: auto 1fr;
        height: 100vh;
        overflow: hidden;
    }

    /* 왼쪽 사이드바 */
    .sidebar {
        grid-row: 1 / span 2;
        background: var(--sidebar-bg);
        color: var(--sidebar-text);
        border-right: 1px solid var(--border-color);
        overflow-y: auto;
        padding: 18px 12px;
    }

    /* 메인 영역 (상단 Header + Content) */
    .main {
        display: grid;
        grid-template-rows: 60px 1fr;
        overflow: hidden;
    }

    /* 상단 헤더 */
    .top-header {
        background: var(--card-bg);
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--border-color);
        padding: 0 24px;
        height: 60px;
    }

    /* 메인 컨텐츠 영역 */
    .page-container {
        overflow-y: auto;
        padding: 24px;
        background: var(--bg);
    }

    /* 폭 제한 + 정렬 */
    .content-wrapper {
        max-width: 1400px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
</style>
