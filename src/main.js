import { LayoutWrapper } from './components/layout-wrapper';
import { MainCover } from "./components/main-cover";
import { OrderCustomizer } from './components/order-customizer';

const mountComponents = () => {
    const app = document.querySelector('#app');

    const sectionCover = LayoutWrapper('l-section-cover');
    sectionCover.appendChild(MainCover());

    const sectionOrder = LayoutWrapper('l-section-order');
    sectionOrder.appendChild(OrderCustomizer());

    app.append(sectionCover, sectionOrder);
};

document.addEventListener('DOMContentLoaded', mountComponents);