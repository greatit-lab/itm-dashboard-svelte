import { getDashboardSummary, getDashboardAgentStatus } from "$lib/services/api";

export async function load() {
    return {
        summary: await getDashboardSummary(),
        status: await getDashboardAgentStatus()
    };
}
