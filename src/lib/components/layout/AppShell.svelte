<script lang="ts">
    import Sidebar from "./Sidebar.svelte";
    import Header from "./Header.svelte";
    import { theme } from "$lib/stores/theme";
</script>

<div class="min-h-screen flex bg-(--bg) text-(--text)">
    <Sidebar />

    <div class="flex-1 flex flex-col">
        <Header />

        <main class="p-6 bg-(--bg-muted) min-h-[calc(100vh-60px)]">
            <slot />
        </main>
    </div>
</div>
