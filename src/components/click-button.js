import '../styles/components/click-button.scss';

/**
 * 
 * @param {String} content button text content
 * @param {String} variant determines color style of the button
 */
export function ClickButton(content, variant = 'primary') {
    
    const button = document.createElement('button');

    button.classList.add('c-click-button', `-${variant}`);
    button.textContent = content;

    return button;
}