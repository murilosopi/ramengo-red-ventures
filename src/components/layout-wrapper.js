import '../styles/layout/section-cover.scss';

export function LayoutWrapper (lClass, tag = 'div') {
    const wrapper = document.createElement(tag);
    wrapper.className = lClass;

    return wrapper;
}