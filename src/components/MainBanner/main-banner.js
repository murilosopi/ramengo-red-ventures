import image from '/images/banner.png';

export function MainBanner() {    
    const banner = new Image();

    banner.src = image;
    banner.alt = 'Banner do RamenGo';
    return banner;
}
