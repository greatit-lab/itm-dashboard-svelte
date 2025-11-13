<script lang="ts">
    export let status: "Online" | "Offline" | "Unknown" | "Run" | "Idle" | "Error";

    const statusMap = {
        Online: "bg-green-500/20 text-green-400",
        Offline: "bg-gray-600/20 text-gray-300",
        Unknown: "bg-gray-500/20 text-gray-300",
        Run: "bg-blue-500/20 text-blue-400",
        Idle: "bg-yellow-500/20 text-yellow-400",
        Error: "bg-red-500/20 text-red-400",
    } as const;
</script>

<span class={`px-2 py-1 rounded text-xs font-medium ${statusMap[status]}`}>
    {status}
</span>
