import './styles/main.scss';
import { getMenu, getCurrentPage } from './Router';

const siteElem = document.querySelector<HTMLDivElement>('#app');

if (siteElem){
siteElem.innerHTML =/* html */`
<header>
	<!-- <h1>Links</h1> -->
	${getMenu()}
</header>
<main>
	${getCurrentPage()}
</main>
`;}