import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
  {
		slug: 'open-sourcer',
		company: 'Pharmasimple',
		description: 'Responsable IT',
		contract: ContractType.SelfEmployed,
		type: '',
		location: 'Home',
		period: { from: new Date(2016,0,1) },
		skills: getSkills('ts', 'js'),
		name: 'Responsable IT',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Gestion du département IT'
	},
];

export const title = 'Expériences';
