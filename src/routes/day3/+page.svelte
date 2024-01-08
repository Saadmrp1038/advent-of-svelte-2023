<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import * as d3 from 'd3-interpolate';
	import { Button } from '$lib/components/ui/button';
	import type { kidData } from './proxy+page';
	export let data: PageData;

	let fullList = data.presentList;
	let remainingList = fullList.sort((a,b)=>{return a.weight - b.weight});
	let chosenList: kidData[] = [];
	let weightSum = 0.0;
	const weightLimit = 100;

	const color = d3.interpolateLab('#CEFAD0', '#008631');

	const addPresent = (index: number) => {
		weightSum += fullList[index].weight;
		chosenList = [...chosenList, remainingList[index]];
		remainingList.splice(index, 1);
		remainingList = remainingList.sort((a,b)=>{return a.weight - b.weight})
	};

	const removePresent = (index: number) => {
		weightSum -= chosenList[index].weight;
		remainingList = [...remainingList,chosenList[index]];
		chosenList = chosenList.slice(0,index).concat(chosenList.slice(index+1))
		chosenList = chosenList.sort((a,b)=>{return a.weight - b.weight})
	};

	onMount(() => {
		console.log(data);
	});
</script>

<div class="flex flex-col items-center">
	<div
		class="my-5 inline-block bg-gradient-to-br from-gray-400 via-zinc-400 to-stone-400 bg-clip-text text-4xl text-transparent"
	>
		Day 3 - Jingle Bell Balancer
	</div>
	<div class="flex flex-col">
		<div class="mb-1 flex flex-row justify-between">
			<div class="mt-10 text-white">Slight Load (Limit 100kg)</div>
			<div class="mt-10 text-white">Current Weight: {weightSum.toFixed(2)}kg</div>
		</div>
		<div class="h-[20px] w-[500px] rounded-lg bg-gray-500">
			<div
				class="h-[20px] rounded-lg"
				style="width: {weightSum}%; background-color: {color(weightSum / 100)}"
			></div>
		</div>
	</div>
	<div class="my-5 flex flex-row justify-evenly w-full">
		<div class="flex flex-col">
			<div class="text-xl text-white">Remaining Presents</div>
			<div class="mb-5 text-base text-gray-400">
				(only those that are possible to be take are shown)
			</div>
			<div class="grid grid-cols-3 gap-2">
				{#each remainingList as item, i}
					{#if weightSum + item.weight <= weightLimit}
						<Button
							variant="ghost"
							on:click={() => {
								addPresent(i);
							}}
							class="border border-gray-400 text-green-400"
						>
							{item.name}-{item.weight}
						</Button>
					{/if}
				{/each}
			</div>
		</div>
		<div class="flex flex-col">
			<div class="text-xl text-white">Sleigh</div>
			<div class="mb-5 text-base text-gray-400">(These are already on the sleigh)</div>
			<div class="grid grid-cols-3 gap-2">
				{#each chosenList as item, i}
					<Button
						variant="ghost"
						on:click={() => {
							removePresent(i);
						}}
						class="border border-gray-400 text-green-400"
					>
						{item.name}-{item.weight}
					</Button>
				{/each}
			</div>
		</div>
	</div>
</div>
