import { LayoutWrapper } from "./layout-wrapper";
import { OptionCard } from "./option.card";
import { StrongTitle } from "./strong-title";
/**
 * @param {Object} menu - The menu object containing properties for the section.
 * @param {string} menu.title - The title of the menu section.
 * @param {string} menu.description - The description of the menu section.
 * @param {Array} menu.options - An array with the available items options from API.
 * @param {number} [menu.idChoice] - The id choice is optional and is added/updated dynamically to the original object menu.
 * @returns {HTMLElement} The created section element.
 */

export function MenuSection(menu) {
    const title = StrongTitle(menu.title, 'h2');
    
    const text = document.createElement('p');
    text.textContent = menu.description;
    
    const section = document.createElement('section');
    section.classList.add('c-menu-section', 'u-text-center');
    
    const list = LayoutWrapper('l-options-list');
    menu.options.forEach(o => {
        const card = OptionCard(o);

        list.appendChild(card);

        card.addEventListener('click', () => {                
            const oldChoice = menu.idChoice;

            if (oldChoice) 
                list.querySelector('.-selected').classList.remove('-selected');

            menu.idChoice = oldChoice == o.id ? null : o.id;

            if (menu.idChoice) 
                card.classList.add('-selected');

            section.dispatchEvent(new CustomEvent('choose'));
        });

    });

    section.append(title, text, list);

    return section;
}