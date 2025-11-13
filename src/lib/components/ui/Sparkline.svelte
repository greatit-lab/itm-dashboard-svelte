<script lang="ts">
    import { onMount } from "svelte";

    export let data: number[] = [];
    export let color: string = "var(--color-text)";

    let canvas: HTMLCanvasElement;

    function drawSparkline() {
        if (!canvas || data.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const w = canvas.width;
        const h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        const max = Math.max(...data);
        const min = Math.min(...data);

        const scaleX = w / (data.length - 1);
        const scaleY = (h - 6) / (max - min || 1);

        ctx.lineWidth = 2;
        ctx.strokeStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 6;

        ctx.beginPath();

        data.forEach((value, i) => {
            const x = i * scaleX;
            const y = h - (value - min) * scaleY - 3;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });

        ctx.stroke();

        // Dot indicator (last point)
        const lastX = (data.length - 1) * scaleX;
        const lastY = h - (data[data.length - 1] - min) * scaleY - 3;

        ctx.fillStyle = color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(lastX, lastY, 3.5, 0, Math.PI * 2);
        ctx.fill();
    }

    onMount(() => {
        const resizeObserver = new ResizeObserver(() => {
            if (!canvas) return;
            canvas.width = canvas.clientWidth * window.devicePixelRatio;
            canvas.height = canvas.clientHeight * window.devicePixelRatio;
            drawSparkline();
        });
        resizeObserver.observe(canvas);

        return () => resizeObserver.disconnect();
    });

    $: drawSparkline();
</script>

<div class="sparkline-container">
    <canvas bind:this={canvas}></canvas>
</div>

<style>
    .sparkline-container {
        width: 100%;
        height: 48px;
        position: relative;
        opacity: 0;
        animation: fadeIn 0.5s ease forwards;

        /* Glass effect */
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.03),
            rgba(255, 255, 255, 0.00)
        );
        border-radius: 8px;
    }

    canvas {
        width: 100%;
        height: 100%;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(4px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Dark mode subtle highlight */
    :global(.dark) .sparkline-container {
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.00)
        );
    }
</style>
