import '../styles/components/strong-title.scss';

/**
 * @param {String} content HTML title content
 * @param {String} tag type of element created
 */
export function StrongTitle(content, tag = 'h1') {
    const title = document.createElement(tag);
    title.className = 'c-strong-title';
    title.innerHTML = content;

    return title;
}