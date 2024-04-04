import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'DÉVELOPPEMENT WEB & INTRANET',
		description: '20-03-2006 au 17-11-2006',
		location: 'Hornu',
		logo: Assets.Unknown,
		name: '',
		organization: 'Technocité',
		period: { from: new Date(2006, 0, 1), to: new Date(2006, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['HTML', 'XHTML','CSS','PHP', 'ASP.NET', 'Javascript', 'Apache']
	},
	{
		degree: 'Bachelier en informatique de gestion',
		description: 'nstitut Reine Astrid - Mons (2000 à 2005) ',
		location: 'Mons',
		logo: Assets.Unknown,
		name: '',
		organization: 'IRAM',
		period: { from: new Date(2000, 0, 1), to: new Date(2005, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['C', 'C++', 'Cobol', 'Fortran','Java','Réseaux','UML','Algorithmes et structures']
	}
];

export const title = 'Formations';
