import '../styles/layout/loading-box.scss';
import { LayoutWrapper } from './layout-wrapper';
import { LoadingSpinner } from './loading-spinner';

/**
 * 
 * @param {String} variant determines color style of the loading spinner
 */
export function LoadingBox (variant = 'primary') {
    const box = LayoutWrapper('l-loading-box');
    box.classList.add(`-${variant}`, 'bg-light');
    box.append(LoadingSpinner(variant));

    return box;
}