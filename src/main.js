import './styles/layout/section-cover.scss';
import './styles/layout/success-section.scss';
import { LayoutWrapper } from './components/layout-wrapper';
import { MainCover } from "./components/main-cover";
import { OrderCustomizer } from './components/order-customizer';
import { SuccessContainer } from './components/success-container';

const app = document.querySelector('#app');

const mountHomePage = () => {
    scrollTo({ left: 0, top: 0});

    while (app.childNodes.length != 0) app.firstChild.remove();

    const sectionCover = LayoutWrapper('l-section-cover');
    const sectionOrder = LayoutWrapper('l-section-order');

    const orderCustomizer = OrderCustomizer();
    orderCustomizer.addEventListener('finished', mountSuccessPage);

    sectionCover.appendChild(MainCover(sectionOrder));
    sectionOrder.appendChild(orderCustomizer);

    app.append(sectionCover, sectionOrder);
};

const mountSuccessPage = e => {
    scrollTo({ left: 0, top: 0});
    const data = e.detail;

    while (app.childNodes.length != 0) app.firstChild.remove();

    const sectionSuccess = LayoutWrapper('l-success-section');
    const successContainer = sectionSuccess.appendChild(SuccessContainer(data));

    successContainer.addEventListener('new-order', mountHomePage);

    app.append(sectionSuccess);
}

document.addEventListener('DOMContentLoaded', mountHomePage);