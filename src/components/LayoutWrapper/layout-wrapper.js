export function LayoutWrapper (lClass, tag = 'div') {
    const wrapper = document.createElement(tag);
    wrapper.className = lClass;

    return wrapper;
}