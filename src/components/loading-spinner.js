import '../styles/components/loading-spinner.scss';

/**
 * @param {String} variant determines color style of the loading spinner
 */
export function LoadingSpinner(variant = 'primary') {
    const spinner = document.createElement('div');
    spinner.classList.add('c-loading-spinner', `-${variant}`);

    return spinner;
}