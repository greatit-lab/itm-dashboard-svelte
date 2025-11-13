// Mock API — 실제 API 연동 전까지는 이걸 사용
// SvelteKit에서 +page.ts가 import 하는 경로: $lib/services/api

export async function getDashboardSummary() {
    return {
        totalAgents: 12,
        activeAgents: 10,
        errorCount: 23,
        waferCount: 1450
    };
}

export async function getDashboardAgentStatus() {
    return [
        { eqpid: "CMP-01", cpu: 40, mem: 55, status: "Online" },
        { eqpid: "CMP-02", cpu: 60, mem: 70, status: "Run" },
        { eqpid: "CMP-03", cpu: 10, mem: 25, status: "Idle" }
    ];
}
