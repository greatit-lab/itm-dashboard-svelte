<!-- ========================================================= -->
<!--  MODULE CONTEXT (타입 선언)                               -->
<!-- ========================================================= -->
<script context="module" lang="ts">
    export type Column = {
        key: string;
        label: string;
        type?: "text" | "number" | "cpu" | "mem";
        sortable?: boolean;
        width?: string;
    };
</script>

<!-- ========================================================= -->
<!--  INSTANCE SCRIPT                                          -->
<!-- ========================================================= -->
<script lang="ts">
    import CpuMemBar from "./CpuMemBar.svelte";

    // ⛔ import type { Column } from "./DataTable.svelte";  (삭제!)
    export let columns: Column[] = [];
    export let rows: Record<string, any>[] = [];

    let sortKey: string | null = null;
    let sortAsc: boolean = true;

    function sort(col: Column) {
        if (!col.sortable) return;

        if (sortKey === col.key) {
            sortAsc = !sortAsc;
        } else {
            sortKey = col.key;
            sortAsc = true;
        }

        rows = [...rows].sort((a, b) => {
            const va = a[col.key];
            const vb = b[col.key];

            if (typeof va === "number" && typeof vb === "number") {
                return sortAsc ? va - vb : vb - va;
            }

            return sortAsc
                ? String(va).localeCompare(String(vb))
                : String(vb).localeCompare(String(va));
        });
    }
</script>

<!-- ========================================================= -->
<!--  TABLE VIEW                                               -->
<!-- ========================================================= -->
<table class="w-full border-collapse text-sm">
    <thead>
        <tr class="border-b border-gray-700/30 text-left">
            {#each columns as col}
                <th
                    class="px-3 py-2 font-medium cursor-pointer select-none"
                    on:click={() => sort(col)}
                    style="width: {col.width || 'auto'}"
                >
                    {col.label}
                    {#if sortKey === col.key}
                        {sortAsc ? " ▲" : " ▼"}
                    {/if}
                </th>
            {/each}
        </tr>
    </thead>

    <tbody>
        {#each rows as row}
            <tr class="border-b border-gray-700/20 hover:bg-gray-700/10">
                {#each columns as col}
                    <td class="px-3 py-2">
                        {#if col.type === "cpu" || col.type === "mem"}
                            <CpuMemBar value={Number(row[col.key])}></CpuMemBar>
                        {:else}
                            {row[col.key]}
                        {/if}
                    </td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        border-radius: 12px;
        overflow: hidden;
    }
</style>
