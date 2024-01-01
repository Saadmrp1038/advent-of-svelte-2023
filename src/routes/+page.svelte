<script lang="ts">
	import * as Table from '$lib/components/ui/table';
</script>

<div class="flex flex-col">
	<div class="mx-auto my-5 text-[#9CA3AF]">
		Link to the challenges
		<a class="text-blue-500" target="_blank" href="https://advent.sveltesociety.dev">Here</a>
	</div>
	<div class="my-5 text-center text-xl font-bold text-white">The Challenges</div>
	<Table.Root class="mx-auto w-[400px]">
		<Table.Header>
			<!-- <Table.Row>
				<Table.Head class="text-center">Challenge Name</Table.Head>
			</Table.Row> -->
		</Table.Header>
		<Table.Body>
			<Table.Row>
				<Table.Cell
					class="border-2 border-gray-600 p-0 text-base font-medium text-[#9CA3AF] transition-[#hover] hover:bg-gray-600"
				>
					<a href="/day1"> <div class="p-4">Day 1 - Naugthy or Nice</div> </a>
					<!-- Day 1 - Naugthy or Nice -->
				</Table.Cell>
			</Table.Row>

			<Table.Row>
				<Table.Cell
					class="border-2 border-gray-600 p-0 text-base font-medium text-[#9CA3AF] transition-[#hover] hover:bg-gray-600"
				>
					<a href="/day2"> <div class="p-4">Day 2 - Merry Munch-o-Meter</div></a>
				</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell
					class="border-2 border-gray-600 p-0 text-base font-medium text-[#9CA3AF] transition-[#hover] hover:bg-gray-600"
				>
					<a href="/day3"><div class="p-4">Day 3 - Jingle Bell Balancer</div></a>
				</Table.Cell>
			</Table.Row>
		</Table.Body>
	</Table.Root>
</div>
