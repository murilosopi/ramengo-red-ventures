import { MainCover } from "./components/main-cover";
import { LayoutWrapper } from './components/layout-wrapper';

const mountComponents = () => {
    const app = document.querySelector('#app');

    
    const sectionCover = LayoutWrapper('l-section-cover');
    sectionCover.appendChild(MainCover());

    app.appendChild(sectionCover);
};

document.addEventListener('DOMContentLoaded', mountComponents);