import '../../styles/components/strong-title.scss';

export function StrongTitle(tag = 'h1') {
    const title = document.createElement(tag);
    title.className = 'c-strong-title';

    return title;
}