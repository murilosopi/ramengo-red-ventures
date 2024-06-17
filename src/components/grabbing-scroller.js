import '../styles/components/grabbing-scroller.scss';
import { ScrollerButton } from './scroller-button';

/**
 * 
 * @param {HTMLElement} element
 * @param {Boolean} controls 
 * @param {Array} targets
 * @returns 
 */
export function GrabbingScroller(element, { controls = false, targets = [] }) {

    if (controls && !Array.isArray(targets) || !targets.length)
        throw 'Scroller controlling require target elements, but it was not passed.';

    const scroller = document.createElement('div');
    scroller.className = 'c-grabbing-scroller';

    element.classList.add('content');
    scroller.append(element);

    const control = {
        down: false,
        start: 0,
    };

    scroller.addEventListener('mousedown', e => {
        e.preventDefault();
        control.down = true;
        control.start = e.pageX - element.offsetLeft;
        control.scrollLeft = element.scrollLeft;
    });

    const move = e => {
        if (!control.down) return;

        const walk = e.pageX - element.offsetLeft;

        element.scrollLeft = control.scrollLeft + (control.start - walk) * 1.3;
    };

    const stopGrab = () => {
        control.down = false;

        if (controls) {
            const totalScrollWidth = element.scrollWidth - element.clientWidth;
            const widthPerTarget = totalScrollWidth / targets.length; 

            const indexControlActive = Math.ceil(element.scrollLeft / widthPerTarget) || 1;
            
            scroller.querySelector(`.c-scroller-button:nth-child(${indexControlActive})`).click();
        }
    }

    const toggleActiveControl = e => {
        const element = e.target.closest('.c-scroller-button');

        if (!element) return;

        const activeButton = scroller.querySelector('.c-scroller-button.-active');

        if (activeButton) activeButton.classList.remove('-active');

        element.classList.add('-active');
    }

    scroller.addEventListener('mousemove', move);
    scroller.addEventListener('touchmove', move);

    scroller.addEventListener('mouseup', stopGrab);
    scroller.addEventListener('touchend', stopGrab);
    
    scroller.addEventListener('touchcancel', stopGrab);
    scroller.addEventListener('mouseleave', stopGrab);

    scroller.addEventListener('click', toggleActiveControl);

    if (controls) {
        const controlsWrapper = document.createElement('div');
        controlsWrapper.append(...targets.map(target => ScrollerButton(element, target)));
        controlsWrapper.className = 'controls';
        controlsWrapper.firstChild.classList.add('-active');
    
        scroller.appendChild(controlsWrapper);
    }


    return scroller;
}