<script lang="ts">
    export let value: number = 0;
</script>

<div class="h-2 bg-gray-600/30 rounded-full overflow-hidden">
    <div
        class="h-full bg-green-500 transition-all"
        style="width: {Math.min(value, 100)}%"
    ></div>
</div>
