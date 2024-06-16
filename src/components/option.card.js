import '../styles/components/option-card.scss';
export function OptionCard(option) {
    const card = document.createElement('article');
    card.className ='c-option-card';

    const titleCard = document.createElement('h3');
    titleCard.className = 'title';

    const descriptionCard = document.createElement('p');
    descriptionCard.className = 'description';

    const price = document.createElement('span');
    price.className = 'price';

    const imageCard = new Image();
    imageCard.src = option.imageInactive;
    imageCard.alt = `${option.name} icon.`;
    imageCard.className = 'inactive';

    const imageCardActive = new Image();
    imageCardActive.src = option.imageActive;
    imageCardActive.alt = `${option.name} icon.`;
    imageCardActive.className = 'active';

    titleCard.textContent = option.name;

    descriptionCard.textContent = option.description;

    price.textContent = 'US$ ' + option.price;
    

    card.append(imageCard, imageCardActive, titleCard, descriptionCard, price);

    return card;
}