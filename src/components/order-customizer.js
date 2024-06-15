import { LayoutWrapper } from "./layout-wrapper";
import { MenuSection } from "./menu-section";
import { ClickButton } from "./click-button";
import { getIngredientsOrder } from "../actions/orders";

export function OrderCustomizer() {
    const selections = {
        broth: {
            title: 'First things first: select your favorite broth.',
            description: 'It will give the whole flavor to your ramen soup.'
        },
        protein: {
            title: 'It\u2019s time to choose (or not) your meat!',
            description: 'Some people love it, some don\u2019t. We have options for all tastes.',
        }
    };

    const customizer = LayoutWrapper('l-order-customizer');

    const button = ClickButton('Place my order', 'disabled');
    button.disabled = true;
    button.addEventListener('click', () => {
        const isDisabled = !selections.broth.idChoice || !selections.protein.idChoice;
        if (isDisabled) return;
    });

    const updateButtonState = () => {
        const isDisabled = !selections.broth.idChoice || !selections.protein.idChoice;
        button.disabled = isDisabled;
        button.classList.toggle('-disabled', isDisabled);
        button.classList.toggle('-primary', !isDisabled);
    };

    const handleSelectionType = async (type) => {
        const menu = selections[type];

        menu.options = await getIngredientsOrder(type) || [];
        menu.idChoice = null;

        const section = MenuSection(menu);

        section.addEventListener('choose', updateButtonState);

        customizer.appendChild(section);
    };

    const allPromises = Object.keys(selections).map(type => handleSelectionType(type));

    Promise.all(allPromises).then(() => customizer.appendChild(button));

    return customizer;
}
