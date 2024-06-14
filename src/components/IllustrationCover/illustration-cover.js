import '../../styles/components/illustration-cover.scss';

import source from '/images/cover-illustration.png';

export function IllustrationCover() {
    const illustration = new Image();
    illustration.src = source;
    illustration.className = 'c-illustration-cover';

    return illustration;
}
