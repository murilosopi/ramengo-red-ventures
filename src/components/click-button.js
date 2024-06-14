import '../styles/click-button.scss';

export function ClickButton(content, variant = 'primary') {
    
    const button = document.createElement('button');

    button.classList.add('c-click-button', `-${variant}`);
    button.textContent = content;

    return button;
}