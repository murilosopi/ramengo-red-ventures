import '../styles/components/article-cover.scss';

import { ClickButton } from './click-button';
import { StrongTitle } from './strong-title';                

/**
 * 
 * @param {HTMLElement} target element for scrolling to by a click button
 */
export function ArticleCover(target) {
    const titleContent = `<span class="u-text-vertical u-text-accent column" lang="ja">
                            ラーメン
                        </span>
                        <span class="column">
                            GO!
                        </span>`;
    const title = StrongTitle(titleContent);

    const paragraph = document.createElement('p');
    paragraph.className = 'text';
    paragraph.textContent = 'Enjoy a good ramen in the comfort of your house. Create your own ramen and choose your favorite flavour combination!';

    const button = ClickButton('Order now', 'primary');
    
    button.addEventListener('click', () => target.scrollIntoView({ behavior: 'smooth'}));

    const article = document.createElement('article');
    article.className = 'c-article-cover u-text-light';
    article.append(title, paragraph, button);

    return article;
}