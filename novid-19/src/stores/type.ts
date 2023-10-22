export interface ExtData {
	noSymptom: number;
	incrNoSymptom: number;
}

export interface Today {
	confirm: number;
	suspect?: any;
	heal?: number;
	dead?: number;
	severe?: any;
	storeConfirm?: number;
	input?: number;
}

export interface Total {
	confirm: number;
	suspect: number;
	heal: number;
	dead: number;
	severe: number;
	input?: number;
}

export interface Children {
	today: Today;
	total: Total;
	extData: ExtData;
	name: string;
	id: string;
	lastUpdateTime: string;
	children: any[];
}

export interface AreaTree {
	today: Today;
	total: Total;
	extData: ExtData;
	name: string;
	id: string;
	lastUpdateTime: string;
	children: Children[];
}

export interface RootObject {
	areaTree: AreaTree;
}