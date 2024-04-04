import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'unity-flappy-csharp',
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
		slug: 'unity-RPG-csharp',
		color: '#ff3e00',
		description:
			'',
		shortDescription:
			'Apprentissage de concepts plus avancé: création de terrain en 3d, personnages joueurs et ennemis, déplacement des unités, gain d\'expérience, armes de corps à corps et à distance, effets de particules, animations,..;',
		links: [{ to: 'https://github.com/DavidFoot/MyLittleRPG', label: 'GitHub' }],
		logo: Assets.Csharp,
		name: 'My Little RPG',
		period: {
			from: new Date()
		},
		skills: getSkills('csharp'),
		type: 'Jeu de type RPG 3D ',
		screenshots: [
		]
	}
];

export const title = 'Projets';
