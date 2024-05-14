<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import { fade } from 'svelte/transition';
	import { Button } from '$lib/components/ui/button';

	let currentHeartRate: number = 0;
	let heartRateHistory: number[] = [];

	let ctx: HTMLCanvasElement | undefined;
	let chart: Chart | undefined;
	let chartType: 'line' | 'bar' = 'line';

	async function getHeartRate() {
		try {
			const ret = await fetch('https://advent.sveltesociety.dev/data/2023/day-four.json');
			const res = await ret.json();

			currentHeartRate = res.heartRate;
			heartRateHistory.push(currentHeartRate);
			// heartRateHistory = heartRateHistory

			chart?.data.labels?.push((heartRateHistory.length * .5).toFixed(2));
			chart?.data.datasets.forEach((dataset) => {
				dataset.data.push(currentHeartRate);
			});

			chart?.update();
		} catch (error) {
			console.error('Failed to fetch heart rate:', error);
		}
	}

	onMount(() => {
		setInterval(getHeartRate, 500);
	});

	$: if (ctx) {
		if (chart) {
			chart.destroy();
		}

        Chart.defaults.color = "#CECECE"

		chart = new Chart(ctx, {
			type: chartType,
			data: {
				labels: [],
				datasets: [
					{
						label: 'Heart Rate History',
						data: [],
						borderWidth: 1
					}
				]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
						min: 130,
						max: 50,


                        title: {
                            display: true,
                            text: "Heart Rate (bpm)",
                        }
					},

                    x: {
                        title: {
                            display: true,
                            text: "Time (seconds)",
                        }
                    }
				},
				// animation: false
			}
		});
	}
</script>

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<div class="flex flex-col items-center">
	<div
		class="my-5 inline-block bg-gradient-to-br from-gray-400 via-zinc-400 to-stone-400 bg-clip-text text-4xl text-transparent"
	>
		Day 4 - Heart of Christmas
	</div>

	<div class="mb-10 flex flex-col">
		<div class="mb-4 text-4xl">{currentHeartRate} bpm</div>
		<div class="flex justify-center">
			<div class="relative mr-4 h-20 w-20 rounded-full bg-red-500">
				<div class="absolute inset-0 flex items-center justify-center font-bold text-white">
					{currentHeartRate}
				</div>
			</div>
		</div>
	</div>
</div>
<div class="flex flex-col items-center">
	<div class="mb-5 w-4/6">
		<canvas bind:this={ctx} width="100" height="50" in:fade></canvas>
	</div>
</div>
