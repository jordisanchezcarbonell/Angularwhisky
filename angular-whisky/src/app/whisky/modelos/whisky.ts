export class Whisky {
    id: number;
    whisky: string;
    metacritic: number;
    stdev: number;
    hastac: number;
    cost: string;
    classWhisky: string;
    superCluster: string;
    cluster: string;
    country: string;
    type: string;




	constructor(id: number,whisky: string, metacritic: number, stdev: number, hastac: number, cost: string, classWhisky: string, superCluster: string, cluster: string, country: string, type: string) {
		this.id = id;
        this.whisky = whisky;
		this.metacritic = metacritic;
		this.stdev = stdev;
		this.hastac = hastac;
		this.cost = cost;
		this.classWhisky = classWhisky;
		this.superCluster = superCluster;
		this.cluster = cluster;
		this.country = country;
		this.type = type;
	}
 
    
}



/*
export interface Whisky {
    id: number;
    whisky: string;
    metacritic: number;
    stdev: number;
    hastac: number;
    cost: string;
    classWhisky: string;
    superCluster: string;
    cluster: string;
    country: string;
    type: string;
}
*/