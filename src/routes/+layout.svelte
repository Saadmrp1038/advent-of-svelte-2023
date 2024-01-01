<script>
	import '../app.pcss';
	import img from '$lib/assests/santa-svelte.png';
</script>

<body class="flex min-h-screen w-full flex-col bg-[#1F2937]">
	<nav class="flex flex-row justify-center bg-[#FF3E00] py-5">
		<div><img src={img} width="35px" alt="svelte-santa" /></div>
		<a href="/"><div class="text-2xl font-extrabold text-white">Advent of Svelte 2023</div> </a>
	</nav>
	<slot />
</body>
