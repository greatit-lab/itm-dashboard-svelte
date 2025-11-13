<script>
    export let title;
    export let value;
    export let icon;
    export let color = "#009688";
</script>

<div class="p-4 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center">
    
    <div class="p-3 rounded-lg" style="background: {color}15;">
        <span class="text-3xl" style="color: {color}">{icon}</span>
    </div>

    <div class="ml-4">
        <div class="text-sm text-gray-500">{title}</div>
        <div class="text-2xl font-bold">{value}</div>
    </div>

</div>
