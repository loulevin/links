import * as tools from './tools';
import { PageHome } from './pages/PageHome';
import { PageDocumentation } from './pages/PageDocumentation';
import { PageTools } from './pages/PageTools';
import { PageUseful } from './pages/PageUseful';
import { PageYoutube } from './pages/PageYoutube';
import { PageInterest } from './pages/PageInterst';
import { Page404 } from './pages/Page404';

const pageNames = ['Home', 'Documentation', 'Tools', 'Useful', 'Youtube', 'Interest'];

const currentPageIdCode = getSmartCurrentPageId();

export const getCurrentPage = () => {
	switch (currentPageIdCode) {
		case 'home':
			return PageHome();
		case 'documentation':
			return PageDocumentation();
		case 'tools':
			return PageTools();
		case 'useful':
			return PageUseful();
		case 'youtube':
			return PageYoutube();
		case 'interest':
			return PageInterest();
		default:
			return Page404();
	}
}

const getPageIdCode = (pageName: string) => {
	pageName = tools.cleanCharactersToAscii(pageName);
	return pageName.toLowerCase();
}

export const getMenu = () => {
	const getMenuClass = (pageName: string) => {
		const pageIdCode = tools.cleanCharactersToAscii(pageName.toLowerCase());
		if (pageIdCode === currentPageIdCode) {
			return ` class="active"`
		} else {
			return '';
		}
	}

	return /*html*/`
	<nav class="menu">
		<ul>
			${pageNames.map(pageName => `<li><a href="${getPageIdCode(pageName)}"${getMenuClass(pageName)}>${pageName}</a></li>`).join('')}
		</ul>
	</nav>
`;
}


function getSmartCurrentPageId() {
	let currentPageIdCode = tools.getCurrentPageIdCode();
	currentPageIdCode = currentPageIdCode === '' ? tools.cleanCharactersToAscii(pageNames[0].toLowerCase()) : currentPageIdCode;
	return currentPageIdCode;
}
