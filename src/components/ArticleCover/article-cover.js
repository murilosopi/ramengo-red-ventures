import '../../styles/components/article-cover.scss';
import { StrongTitle } from '../StrongTitle/strong-title';

export function ArticleCover() {
    const title = StrongTitle();
    title.innerHTML = `<span class="u-text-vertical u-text-accent column" lang="ja">
                            ラーメン
                        </span>
                        <span class="column">
                            GO!
                        </span>`;

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Enjoy a good ramen in the comfort of your house. Create your own ramen and choose your favorite flavour combination!';


    const article = document.createElement('article');
    article.className = 'c-article-cover u-text-light';
    article.append(title, paragraph);

    return article;
}