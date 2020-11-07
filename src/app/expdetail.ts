interface ExpSkill {
	label: string;
	main: boolean;
}

export interface ExpDetail {
	pending: boolean;
	company: string;
	start: number;
	end: number;
	descriptionLines: string[];
	skills: ExpSkill[];
}
