import type { PageLoad } from './$types';

type kidData = {
	name: string;
	tally: number;
}[];

const algo = (data: kidData) => {
    const sortedData = data.sort((a,b)=>a.tally-b.tally)

    let idx = 0;
    while(idx<sortedData.length){
        if(sortedData[idx].tally>0){
            break;
        }
        idx++;
    }

    const naughty = sortedData.slice(0, idx);
    const nice = sortedData.slice(idx, sortedData.length).reverse();

	return {naughty, nice};
};

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-one.json');

	const data = (await res.json()) as kidData;

	const {naughty, nice} = algo(data);

    return {
        naughty,
        nice
    }
};
