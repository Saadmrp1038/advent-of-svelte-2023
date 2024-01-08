<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import cookieImg from '$lib/assests/Cookie.png';
	import santa1 from '$lib/assests/santa/santa-cry.png';
	import santa2 from '$lib/assests/santa/santa-sad.png';
	import santa3 from '$lib/assests/santa/santa-neutral.png';
	import santa4 from '$lib/assests/santa/santa-smile.png';
	import santa5 from '$lib/assests/santa/santa-love.png';
	import santa6 from '$lib/assests/santa/santa-happy.png';
	import * as d3 from 'd3-interpolate';

	let cookieCnt = 0;

	const color = d3.interpolateLab('#CEFAD0', '#008631');

	const addCookie = () => {
		if (cookieCnt < 50) cookieCnt++;
	};

	const removeCookie = () => {
		if (cookieCnt > 0) cookieCnt--;
	};

	const resetCookie = () => {
		cookieCnt = 0;
	};
</script>

<div class="flex flex-col items-center">
	<div
		class="my-5 inline-block bg-gradient-to-br from-gray-400 via-zinc-400 to-stone-400 bg-clip-text text-4xl text-transparent"
	>
		Day 2 - Naughty or Nice
	</div>

	<div class="my-10 flex flex-row justify-center gap-5">
		<div class=" my-10 flex flex-col items-center gap-5">
			{#if cookieCnt < 10}
				<img src={santa1} alt="santa-cry" width="80px" />
			{:else if cookieCnt < 20}
				<img src={santa2} alt="santa-sad" width="80px" />
			{:else if cookieCnt < 30}
				<img src={santa3} alt="santa-neutral" width="80px" />
			{:else if cookieCnt < 40}
				<img src={santa4} alt="santa-smile" width="80px" />
			{:else if cookieCnt < 50}
				<img src={santa5} alt="santa-love" width="80px" />
			{:else}
				<img src={santa6} alt="santa-happy" width="80px" />
			{/if}
			<div class="text-2xl text-white">Cookies Eaten: {cookieCnt}</div>
		</div>
		<div class="flex flex-col items-center gap-5">
			<div class="flex flex-row">
				<div class="h-[227.5px] w-[540px] rounded-lg border-2 border-red-700 p-5">
					{#each Array(Math.floor((cookieCnt + 9) / 10)) as _, index}
						<div class="flex w-[500px] flex-row justify-start">
							{#each Array(Math.min(cookieCnt - index * 10, 10)) as _, index}
								<img src={cookieImg} alt="cookie" width="50px" />
							{/each}
						</div>
					{/each}
				</div>
			</div>
			<div class="h-[20px] w-[200px] rounded-lg bg-gray-500">
				<div
					class="h-[20px] rounded-lg"
					style="width: {cookieCnt * 2}%; background-color: {color(cookieCnt / 50)}"
				></div>
			</div>
			<div></div>
			<div class="flex flex-col gap-3">
				<Button class="bg-blue-500" on:click={addCookie}>Add</Button>
				<Button class="bg-blue-500" on:click={removeCookie}>Remove</Button>
				<Button class="bg-blue-500" on:click={resetCookie}>Reset</Button>
			</div>
		</div>
	</div>
</div>
