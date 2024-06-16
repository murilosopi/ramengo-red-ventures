import '../styles/components/success-container.scss';
import iconSource from '/images/bowing.svg';
import { BrandLogo } from './brand-logo';
import { StrongTitle } from './strong-title';
import { ClickButton } from './click-button';
import { LayoutWrapper } from './layout-wrapper';

export function SuccessContainer(orderResult) {    
    const alternativeBrand = BrandLogo(true);

    // Result rámen image
    const imageResult = new Image();
    imageResult.className = 'image';
    imageResult.src = orderResult.image;
    imageResult.alt = `${orderResult.description} image`;
    
    // Result section heading
    const resultHeading = document.createElement('h1');
    resultHeading.textContent = 'Your Order:';
    resultHeading.className = 'heading';

    // Rámen name title
    const ramenTitle = StrongTitle(orderResult.description, 'h2');
    ramenTitle.classList.add('u-text-accent');

    const wrapper = LayoutWrapper('wrapper');
    wrapper.append(imageResult, resultHeading, ramenTitle);
    
    // Result content section
    const result = document.createElement('section');
    result.className = 'result';
    result.append(alternativeBrand, wrapper);
    
    // Order section heading
    const orderHeading = document.createElement('h1');
    orderHeading.textContent = 'どもありがとうございます。';
    orderHeading.classList.add('heading', 'u-text-accent');

    // Order section icon
    const orderIcon = new Image();
    orderIcon.src = iconSource;
    orderIcon.alt = `Icon bowing`;
    orderIcon.className = 'icon'

    const orderText = document.createElement('p');
    orderText.textContent = 'Hold on, when you least expect you will be eating your rámen. ';
    orderText.className = 'text';

    const orderStrongText = StrongTitle('Your order is being prepared', 'p');
    orderStrongText.classList.add('u-text-secondary')

    const buttonNewOrder = ClickButton('Place new order', 'primary');
    
    // Order content section
    const order = document.createElement('section');
    order.className = 'order';
    order.append(orderIcon, orderHeading, orderStrongText, orderText, buttonNewOrder) 
    
    const container = document.createElement('main');
    container.className = 'c-success-container';
    container.append(result, order);

    const handleNewOrder = () => {
        container.dispatchEvent(new CustomEvent('new-order'));
    };
    buttonNewOrder.addEventListener('click', handleNewOrder);

    return container;
}
