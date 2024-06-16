import '../styles/components/main-cover.scss';

import { BrandLogo } from './brand-logo';
import { ArticleCover } from './article-cover';
import { IllustrationCover } from './illustration-cover';

/**
 * 
 * @param {HTMLElement} target element for scrolling to by a click button of ArticleCover component
 */
export function MainCover(target) {    
    const cover = document.createElement('section');

    cover.className = 'c-main-cover';
    cover.append(BrandLogo(), ArticleCover(target), IllustrationCover() );

    return cover;
}
