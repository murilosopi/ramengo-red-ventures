import '../styles/components/strong-title.scss';

export function StrongTitle(content, tag = 'h1') {
    const title = document.createElement(tag);
    title.className = 'c-strong-title';
    title.innerHTML = content;

    return title;
}