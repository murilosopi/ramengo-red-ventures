/**
 * @param {String} layoutClass wrapper class name
 * @param {String} tag type of element created
 * @returns 
 */
export function LayoutWrapper (layoutClass, tag = 'div') {
    const wrapper = document.createElement(tag);
    wrapper.className = layoutClass;

    return wrapper;
}