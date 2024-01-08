<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import { Input } from '$lib/components/ui/input';
	import type { PageData } from './$types';

	export let data: PageData;

	let niceList = data.nice;
	let naughtyList = data.naughty;

	let filteredNiceList = niceList;
	let filteredNaughtyList = naughtyList;

	let name = '';

	$: {
		filteredNiceList = niceList.filter((item) => {
			return item.name.toLowerCase().includes(name.toLowerCase());
		});
		filteredNaughtyList = naughtyList.filter((item) => {
			return item.name.toLowerCase().includes(name.toLowerCase());
		});
	}
</script>

<div class="flex flex-col items-center">
	<div
		class="my-5 inline-block bg-gradient-to-br from-gray-400 via-zinc-400 to-stone-400 bg-clip-text text-4xl text-transparent"
	>
		Day 1 - Naughty or Nice
	</div>
	<div>
		<Input type="name" placeholder="Type a name" bind:value={name} class="my-5 text-white" />
	</div>
</div>
<div class="flex flex-row">
	<div class="my-5 w-1/2">
		<div class="text-center text-xl font-bold text-white">
			Nice List ({filteredNiceList.length})
		</div>
		<Table.Root class="mx-auto w-[400px]">
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-[100px]">Name</Table.Head>

					<Table.Head class="text-right">Tally</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each filteredNiceList as good}
					<Table.Row class="text-[#9CA3AF]">
						<Table.Cell class="font-medium">{good.name}</Table.Cell>
						<Table.Cell class="text-right">{good.tally}</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>

	<div class="my-5 w-1/2">
		<div class="text-center text-xl font-bold text-white">
			Naugthy List ({filteredNaughtyList.length})
		</div>
		<Table.Root class="mx-auto w-[400px]">
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-[100px]">Name</Table.Head>

					<Table.Head class="text-right">Tally</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each filteredNaughtyList as bad}
					<Table.Row class="text-[#9CA3AF]">
						<Table.Cell class="font-medium">{bad.name}</Table.Cell>
						<Table.Cell class="text-right">{bad.tally}</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
</div>
