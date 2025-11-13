export const GET = async () => {
  return new Response(
    JSON.stringify({
      agentCount: 12,
      activeAgents: 10,
      errorCount: 23,
      wafersToday: 1450
    }),
    { headers: { "Content-Type": "application/json" } }
  );
};
