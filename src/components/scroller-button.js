import '../styles/components/scroller-button.scss';

/**
 * 
 * @param {HTMLElement} container
 * @param {HTMLElement} target 
 */
export function ScrollerButton(container, target) {
    const scrollerButton = document.createElement('button');
    scrollerButton.className = 'c-scroller-button';

    const moveScrollerToTarget = () => {
        // calculate the position to scroll to
        const targetRect = target.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const targetCenter = targetRect.left + targetRect.width / 2;
        const containerCenter = containerRect.left + containerRect.width / 2;
        const scrollLeft = container.scrollLeft + (targetCenter - containerCenter);

        // scroll to the calculated position smoothly
        container.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
        });

        
    };
    scrollerButton.addEventListener('click', moveScrollerToTarget);

    return scrollerButton;
}