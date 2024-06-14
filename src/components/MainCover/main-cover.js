
import { BrandLogo } from '../BrandLogo/brand-logo';

import '../../styles/components/main-cover.scss';
export function MainCover() {    
    const cover = document.createElement('section');

    cover.className = 'c-main-cover';
    cover.appendChild(BrandLogo());

    return cover;
}
