import '../../styles/components/main-cover.scss';

import { BrandLogo } from '../BrandLogo/brand-logo';
import { ArticleCover } from '../ArticleCover/article-cover';
import { IllustrationCover } from '../IllustrationCover/illustration-cover';

export function MainCover() {    
    const cover = document.createElement('section');

    cover.className = 'c-main-cover';
    cover.append(BrandLogo(), ArticleCover(), IllustrationCover() );

    return cover;
}
