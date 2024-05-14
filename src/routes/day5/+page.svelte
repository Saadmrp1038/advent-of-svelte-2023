<script lang="ts">
	import { onMount } from 'svelte';
    import { Circle } from 'svelte-loading-spinners';

	type TaskType = 'CREATED_TOY' | 'WRAPPED_PRESENT';

	interface Task {
		elf: string;
		task: TaskType;
		minutesTaken: number;
		date: string;
	}

	let allData: Task[] = [];

	let presentsWrapped: number;
	let toysProduced: number;
	let totalTimeTaken: number;
	let averageTimeTaken: number;
	let toysProducedPerHour: number;
	let elfNames: string[] = [];
	let elfCount = 0;

	function getTotalUniqueCount(arr: string[]) {
		const uniqueValues = new Set(arr);
		return uniqueValues.size;
	}

	async function getData() {
		try {
			const ret = await fetch('https://advent.sveltesociety.dev/data/2023/day-five.json');
			const res = (await ret.json()) as Task[];
			allData = res;

			console.log(allData.length);

			presentsWrapped = 0;
			toysProduced = 0;
			totalTimeTaken = 0;
			elfNames = [];

			allData.forEach((it) => {
				if (it.task === 'CREATED_TOY') toysProduced++;
				else presentsWrapped++;

				totalTimeTaken += it.minutesTaken;

				elfNames.push(it.elf);
			});

			averageTimeTaken = totalTimeTaken / allData.length;

			elfCount = getTotalUniqueCount(elfNames);

			toysProducedPerHour = (60 / averageTimeTaken) * elfCount;
		} catch (error) {
			console.error('Failed to fetch data:', error);
		}
	}

	onMount(() => {
		setInterval(getData, 1000);
	});
</script>

<div class="flex flex-col items-center">
	<div
		class="my-5 inline-block bg-gradient-to-br from-gray-400 via-zinc-400 to-stone-400 bg-clip-text text-4xl text-transparent"
	>
		Day 5 - Present Progress
	</div>
	{#if toysProduced && presentsWrapped && averageTimeTaken && toysProducedPerHour}
		<div class="dashboard flex flex-row">
			<div class="stat">
				<div class="stat-title">Toys Produced</div>
				<div class="stat-value">{toysProduced}</div>
			</div>
			<div class="stat">
				<div class="stat-title">Presents Wrapped</div>
				<div class="stat-value">{presentsWrapped}</div>
			</div>
			<div class="stat">
				<div class="stat-title">Average Toy Making Time</div>
				<div class="stat-value">{averageTimeTaken.toFixed(2)} minutes</div>
			</div>
			<div class="stat">
				<div class="stat-title">Toys Made Per Hour</div>
				<div class="stat-value">{toysProducedPerHour.toFixed(2)}</div>
			</div>
		</div>
	{:else}
		<div class="dashboard">
            Data is loading
            <Circle size="30" color="#FF3E00" unit="px" duration="1s" />
        </div>
	{/if}
</div>

<style>
	.dashboard {
		display: flex;
		align-items: center;
		gap: 20px;
		padding: 20px;
		background-color: #f0f0f0;
		border-radius: 8px;
	}
	.stat {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 10px;
		background-color: #fff;
		border-radius: 4px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
	.stat-title {
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.stat-value {
		font-size: 24px;
		color: #007bff;
	}
</style>
