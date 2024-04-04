import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'slick-portfolio-csharp',
		color: '#5e95e3',
		description:
			'',
		shortDescription:
			'Découverte d\'Unity! - Projet d\'apprentissage afin de se familiariser avec les concepts de bases ainsi que l\'interface',
		links: [{ to: 'https://github.com/DavidFoot/FlappyBrol', label: 'GitHub' }],
		logo: Assets.Csharp,
		name: 'Flappy Brol',
		period: {
			from: new Date()
		},
		skills: getSkills('csharp'),
		type: 'Jeu 2D basé sur FlappyBird',
		screenshots: [
			{
				label: 'Capture',
				src: 'https://i.postimg.cc/1XXHWZFG/Flappy.png'
			}
		]
	},
	{
		slug: 'slick-portfolio-csharp',
		color: '#ff3e00',
		description:
			'',
		shortDescription:
			'',
		links: [{ to: 'https://github.com/DavidFoot/MyLittleRPG', label: 'GitHub' }],
		logo: Assets.Csharp,
		name: 'My Little RPG',
		period: {
			from: new Date()
		},
		skills: getSkills('csharp'),
		type: 'Jeu de type RPG 3D ',
		screenshots: [
			{
				label: 'Capture',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

export const title = 'Projets';
