import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'David';

export const lastName = 'Foot';

export const description =
	'HELLO WORLD! Développeur passionné depuis tout petit par les jeux videos, je concentre maintenant mon énergie à développer mes compétences dans le language C# et l\'apprentissage d\'Unity';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/DavidFoot/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/david-foot-a42107136/'
	},
	{
		platform: Platform.Email,
		link: 'david.foot@outlook.be'
	}
];

export const skills = getSkills('js', 'css', 'html', 'Csharp', 'sass', 'Python', 'Docker','Nginx','AWS');
