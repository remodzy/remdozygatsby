export const mainColorsGroup = {
    primary: {
        main: '#4865EB',
        sub: '#507CF5'
    },
    success: {
        main: '#5B9976',
        sub: '#97BFAB'
    },
    warning: {
        main: '#D78153',
        sub: '#E3975D'
    },
    text: {
        main: '#22344B',
        sub: '#5C6E80'
    },
    background: {
        main: '#F8FAFC'
    }
};

export const subColorsGroup = {
    first: {
        main: '#21A4D9',
        sub: '#4BC2F2'
    },
    second: {
        main: '#B98EE0',
        sub: '#CB9EF3'
    },
    third: {
        main: '#FC7266',
        sub: '#FE958C'
    },
    fourth: {
        main: '#FFBF87',
        sub: '#FFC99A'
    },
    fifth: {
        main: '#5A60A6',
        sub: '#7177C2'
    },
    sixth: {
        main: '#F7C357',
        sub: '#F8D58D'
    },
    seventh: {
        main: '#FEA897',
        sub: '#FFB5A7'
    },
    eighth: {
        main: '#D3DE5A',
        sub: '#E1EB7A'
    }
}

export type ColorName = {
    group: string,
    color: string,
}

export function getColor(name: ColorName) {
    if (name.group === 'main') {
        return mainColorsGroup[name.color];
    }

    return subColorsGroup[name.color];
}

export function getTextColor() {
    return mainColorsGroup.text;
}


