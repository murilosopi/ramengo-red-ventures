import '../styles/components/brand-logo.scss';
import source from '/images/logo.svg';
import sourceAlt from '/images/logo-alt.svg';

export function BrandLogo(alt = false) {    
    const logo = new Image();

    logo.className = 'c-brand-logo';
    logo.alt = 'ramenGO!';
    logo.src = alt ? sourceAlt : source;

    return logo;
}
