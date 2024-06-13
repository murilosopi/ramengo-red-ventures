import { MainBanner } from "./components/MainBanner/main-banner";

const mountComponents = () => {
    const app = document.querySelector('#app');

    app.appendChild(MainBanner());
};

document.addEventListener('DOMContentLoaded', mountComponents);