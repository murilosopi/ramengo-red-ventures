import '../styles/layout/section-cover.scss';
import '../styles/layout/order-customizer.scss';
import '../styles/layout/options-list.scss';
import '../styles/layout/success-section.scss';

export function LayoutWrapper (lClass, tag = 'div') {
    const wrapper = document.createElement(tag);
    wrapper.className = lClass;

    return wrapper;
}