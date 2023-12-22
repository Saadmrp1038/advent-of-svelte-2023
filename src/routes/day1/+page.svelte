<script lang="ts">
    import * as Table from '$lib/components/ui/table'
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<div class="flex flex-row">
	<div class="w-1/2 my-5">
        <div class="font-bold text-xl text-center text-white">Nice List</div>
		<Table.Root class="w-[400px] mx-auto">
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-[100px]">Name</Table.Head>

					<Table.Head class="text-right">Tally</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each data.nice as good}
					<Table.Row class="text-[#9CA3AF]">
						<Table.Cell class="font-medium">{good.name}</Table.Cell>
						<Table.Cell class="text-right">{good.tally}</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>

	<div class="w-1/2 my-5">
        <div class="font-bold text-xl text-center text-white">Naugthy List</div>
		<Table.Root class="w-[400px] mx-auto">
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-[100px]">Name</Table.Head>

					<Table.Head class="text-right">Tally</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each data.naughty as bad}
					<Table.Row class="text-[#9CA3AF]">
						<Table.Cell class="font-medium">{bad.name}</Table.Cell>
						<Table.Cell class="text-right">{bad.tally}</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
</div>