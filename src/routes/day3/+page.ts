import type { PageLoad } from './$types';

export type kidData = {
	name: string;
	weight: number;
};

export const load: PageLoad = async ({ fetch }) => {
	async function getKidData() {
		const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-three.json');
		const data = await res.json();
		return data as kidData[];
	}

	return {
		presentList: await getKidData()
	};
};
