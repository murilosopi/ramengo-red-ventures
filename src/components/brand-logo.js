import '../styles/components/brand-logo.scss';
import source from '/images/logo.svg';

export function BrandLogo() {    
    const logo = new Image();

    logo.className = 'c-brand-logo';
    logo.alt = 'ramenGO!';
    logo.src = source;

    return logo;
}
