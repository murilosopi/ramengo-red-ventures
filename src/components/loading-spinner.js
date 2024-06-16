import '../styles/components/loading-spinner.scss';
export function LoadingSpinner(variant = 'primary') {
    const spinner = document.createElement('div');
    spinner.classList.add('c-loading-spinner', `-${variant}`);

    return spinner;
}