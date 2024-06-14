import '../styles/components/main-cover.scss';

import { BrandLogo } from './brand-logo';
import { ArticleCover } from './article-cover';
import { IllustrationCover } from './illustration-cover';

export function MainCover() {    
    const cover = document.createElement('section');

    cover.className = 'c-main-cover';
    cover.append(BrandLogo(), ArticleCover(), IllustrationCover() );

    return cover;
}
