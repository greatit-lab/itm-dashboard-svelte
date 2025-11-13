<script lang="ts">
    export let data;

    // +page.ts 에서 summary, status 반환받음
    const summary = data.summary ?? {};
    const status = data.status ?? [];
</script>

<div class="page-title">Home Dashboard</div>

<!-- KPI 4개를 4열 그리드로 배치 -->
<div class="kpi-grid">
    {#each [
        { label: "Total Agents", value: summary.totalAgents },
        { label: "Active Agents", value: summary.activeAgents },
        { label: "Errors Today", value: summary.errorCount },
        { label: "Wafers Today", value: summary.waferCount }
    ] as item}
        <div class="kpi-card">
            <div class="kpi-label">{item.label}</div>
            <div class="kpi-value">{item.value}</div>
        </div>
    {/each}
</div>

<!-- SECTION: Performance -->
<div class="section-title">Realtime Performance</div>
<div class="section-box">
    <p class="placeholder">Performance chart placeholder</p>
</div>

<!-- SECTION: Equipment Status -->
<div class="section-title">Equipment Status</div>
<div class="section-box">
    <table class="table">
        <thead>
            <tr>
                <th>EQPID</th>
                <th>CPU</th>
                <th>Memory</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {#each status as row}
                <tr>
                    <td>{row.eqpid}</td>
                    <td>{row.cpu ?? "-"}</td>
                    <td>{row.mem ?? "-"}</td>
                    <td>{row.status}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .page-title {
        font-size: 1.4rem;
        font-weight: 700;
        margin-bottom: 20px;
        margin-top: 10px;
    }

    /* KPI: 4개 카드 정렬 */
    .kpi-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        margin-bottom: 30px;
    }

    .kpi-card {
        background: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.06);
    }

    .kpi-label {
        font-size: 0.9rem;
        opacity: 0.7;
        margin-bottom: 6px;
    }

    .kpi-value {
        font-size: 2rem;
        font-weight: 800;
    }

    .section-title {
        font-size: 1.1rem;
        font-weight: 600;
        margin: 20px 0 12px;
    }

    .section-box {
        background: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: 14px;
        padding: 20px;
        margin-bottom: 40px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.04);
    }

    .placeholder {
        opacity: 0.6;
    }
</style>
